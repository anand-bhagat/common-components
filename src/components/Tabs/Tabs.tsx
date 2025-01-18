import React, { createContext, useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useRouter, useSearchParams } from 'next/navigation';

// Context Types
interface TabsContextType {
    activeTab: string;
    setActiveTab: (id: string) => void;
    orientation?: 'horizontal' | 'vertical';
    tabsId: string;
    registerDisabledTab: (id: string) => void;
    unregisterDisabledTab: (id: string) => void;
    indicator?: React.ComponentType<IndicatorProps>;
}

interface TabContextType {
    id: string;
    isActive: boolean;
}

// Props Types
interface TabsProps {
    children: React.ReactNode;
    defaultTab?: string;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    tabsId: string;
    indicator?: React.ComponentType<IndicatorProps>;
}

interface TabListProps {
    children: React.ReactNode;
    className?: string;
    'aria-label'?: string;
}

interface TabProps {
    children: React.ReactNode;
    id: string;
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

interface TabPanelProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

export interface IndicatorProps {
    isActive: boolean;
    disabled?: boolean;
    tabsId: string;
}

// Create Contexts
const TabsContext = createContext<TabsContextType | null>(null);
const TabContext = createContext<TabContextType | null>(null);

// Custom Hooks
const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('useTabs must be used within a Tabs component');
    }
    return context;
};

const useTab = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTab must be used within a Tab component');
    }
    return context;
};

// Default Underline Indicator
const DefaultIndicator = ({ isActive, disabled, tabsId }: IndicatorProps) => {
    if (!isActive || disabled) return null;
    return (
        <motion.div
            layoutId={`tab-underline-${tabsId}`}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
            initial={false}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
            }}
        />
    );
};

// Component Implementation
export const Tabs = ({
    children,
    defaultTab,
    orientation = 'horizontal',
    className,
    tabsId,
    indicator = DefaultIndicator,
}: TabsProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const urlTab = searchParams.get(tabsId);
    const disabledTabsRef = useRef<Set<string>>(new Set());

    const registerDisabledTab = (id: string) => {
        disabledTabsRef.current.add(id);
    };

    const unregisterDisabledTab = (id: string) => {
        disabledTabsRef.current.delete(id);
    };

    const setActiveTab = (id: string) => {
        if (disabledTabsRef.current.has(id)) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set(tabsId, id);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        if (urlTab && disabledTabsRef.current.has(urlTab)) {
            // If URL tab is disabled, switch to default tab if available
            if (defaultTab && !disabledTabsRef.current.has(defaultTab)) {
                setActiveTab(defaultTab);
            }
        } else if (!urlTab && defaultTab) {
            setActiveTab(defaultTab);
        }
    }, [urlTab, defaultTab]);

    const activeTab = urlTab || defaultTab || '';

    return (
        <TabsContext.Provider 
            value={{ 
                activeTab, 
                setActiveTab, 
                orientation, 
                tabsId,
                registerDisabledTab,
                unregisterDisabledTab,
                indicator 
            }}
        >
            <div
                className={twMerge(
                    'w-full',
                    orientation === 'vertical' ? 'flex gap-6' : 'block',
                    className
                )}
            >
                {children}
            </div>
        </TabsContext.Provider>
    );
};

export const TabList = ({ children, className, 'aria-label': ariaLabel }: TabListProps) => {
    const { orientation } = useTabs();
    return (
        <div
            role="tablist"
            aria-label={ariaLabel}
            aria-orientation={orientation}
            className={twMerge(
                'relative',
                orientation === 'vertical'
                    ? 'flex flex-col border-r border-gray-200'
                    : 'flex border-b border-gray-200',
                className
            )}
        >
            {children}
        </div>
    );
};

export const Tab = ({ children, id, icon, className, disabled }: TabProps) => {
    const { activeTab, setActiveTab, registerDisabledTab, unregisterDisabledTab, tabsId, indicator: Indicator } = useTabs();
    const isActive = activeTab === id && !disabled;
    const IndicatorComponent = Indicator || DefaultIndicator;

    useEffect(() => {
        if (disabled) {
            registerDisabledTab(id);
        }
        return () => unregisterDisabledTab(id);
    }, [disabled, id]);

    const handleClick = (e: React.MouseEvent) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        setActiveTab(id);
    };

    return (
        <TabContext.Provider value={{ id, isActive }}>
            <button
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tabsId}-${id}`}
                aria-disabled={disabled}
                id={`${tabsId}-${id}`}
                tabIndex={disabled ? -1 : isActive ? 0 : -1}
                onClick={handleClick}
                disabled={disabled}
                className={twMerge(
                    'relative px-4 py-2 outline-none',
                    'flex items-center gap-2',
                    'text-gray-600 hover:text-gray-900',
                    isActive && 'text-blue-600',
                    disabled && [
                        'cursor-not-allowed',
                        'opacity-50',
                        'hover:text-gray-600',
                        'bg-gray-50'
                    ],
                    className
                )}
            >
                {icon && <span className="w-5 h-5">{icon}</span>}
                {children}
                <IndicatorComponent isActive={isActive} disabled={disabled} tabsId={tabsId} />
            </button>
        </TabContext.Provider>
    );
};

export const TabPanel = ({ children, id, className }: TabPanelProps) => {
    const { activeTab, tabsId } = useTabs();
    const isActive = activeTab === id;

    return (
        <div
            role="tabpanel"
            id={`panel-${tabsId}-${id}`}
            aria-labelledby={`tab-${tabsId}-${id}`}
            hidden={!isActive}
            className={twMerge(
                'outline-none',
                'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50',
                className
            )}
        >
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

// Compound Components Assignment
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs; 