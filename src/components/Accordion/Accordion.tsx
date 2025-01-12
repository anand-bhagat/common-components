import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Context Types
interface AccordionContextType {
    activeItems: string[];
    toggleItem: (id: string) => void;
    allowMultiple: boolean;
}

interface AccordionItemContextType {
    isOpen: boolean;
    id: string;
}

// Props Types
interface AccordionProps {
    children: React.ReactNode;
    allowMultiple?: boolean;
    className?: string;
    defaultOpen?: string[];
}

interface AccordionItemProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

interface AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
    icon?: React.ComponentType<{ isOpen: boolean }>;
    iconPosition?: "left" | "right";
    showIcon?: boolean;
}

interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
}

// Create Contexts
const AccordionContext = createContext<AccordionContextType | null>(null);
const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

// Custom Hooks
const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("useAccordion must be used within an Accordion");
    }
    return context;
};

const useAccordionItem = () => {
    const context = useContext(AccordionItemContext);
    if (!context) {
        throw new Error("useAccordionItem must be used within an AccordionItem");
    }
    return context;
};

// Default Icon Component
const DefaultIcon = ({ isOpen }: { isOpen: boolean }) => (
    <motion.svg
        className="w-4 h-4"
        animate={{ rotate: isOpen ? 180 : 0 }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
        />
    </motion.svg>
);

// Component Implementation
export const Accordion = ({
    children,
    allowMultiple = false,
    className,
    defaultOpen = [],
}: AccordionProps) => {
    const [activeItems, setActiveItems] = useState<string[]>(defaultOpen);

    const toggleItem = (id: string) => {
        setActiveItems((prev) => {
            if (allowMultiple) {
                return prev.includes(id)
                    ? prev.filter((item) => item !== id)
                    : [...prev, id];
            }
            return prev.includes(id) ? [] : [id];
        });
    };

    return (
        <AccordionContext.Provider
            value={{ activeItems, toggleItem, allowMultiple }}
        >
            <div
                className={twMerge(
                    "divide-y divide-gray-200 border-y border-gray-200",
                    className
                )}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem = ({
    children,
    id,
    className,
}: AccordionItemProps) => {
    const { activeItems } = useAccordion();
    const isOpen = activeItems.includes(id);

    return (
        <AccordionItemContext.Provider value={{ isOpen, id }}>
            <div className={twMerge("", className)}>{children}</div>
        </AccordionItemContext.Provider>
    );
};

export const AccordionTrigger = ({
    children,
    className,
    icon,
    iconPosition = "right",
    showIcon = true,
}: AccordionTriggerProps) => {
    const { toggleItem } = useAccordion();
    const { isOpen, id } = useAccordionItem();

    const Icon = icon || DefaultIcon;

    return (
        <button
            onClick={() => toggleItem(id)}
            className={twMerge(
                "flex items-center justify-between w-full p-4 text-left",
                "text-gray-900 hover:bg-gray-50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                className
            )}
        >
            {showIcon && iconPosition === "left" && (
                <span className="mr-4 flex-shrink-0"><Icon isOpen={isOpen} /></span>
            )}
            <span className="flex-1">{children}</span>
            {showIcon && iconPosition === "right" && (
                <span className="ml-4 flex-shrink-0"><Icon isOpen={isOpen} /></span>
            )}
        </button>
    );
};

export const AccordionContent = ({
    children,
    className,
}: AccordionContentProps) => {
    const { isOpen } = useAccordionItem();

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                            height: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                            },
                            opacity: { duration: 0.2 },
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            height: { duration: 0.2 },
                            opacity: { duration: 0.2 },
                        },
                    }}
                    className={twMerge("overflow-hidden", className)}
                >
                    <div className="p-4">{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Compound Components Assignment
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent; 