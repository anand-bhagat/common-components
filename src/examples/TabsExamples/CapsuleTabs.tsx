import Tabs, { IndicatorProps } from "@/components/Tabs/Tabs";
import { CogIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const CapsuleIndicator = ({ isActive, disabled, tabsId }: IndicatorProps) => {
    if (!isActive || disabled) return null;
    return (
        <motion.div
            layoutId={`tab-capsule-${tabsId}`}
            className="absolute inset-0 bg-blue-100 rounded-md -z-10"
            initial={false}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
            }}
            style={{
                height: "85%",
                top: "7.5%",
            }}
        />
    );
};

const CapsuleTabs = () => {
    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Capsule Tabs</h2>
            <Tabs
                defaultTab="home"
                tabsId="capsule-tabs"
                indicator={CapsuleIndicator}
            >
                <Tabs.List className="bg-gray-100 p-1 rounded-lg relative">
                    <Tabs.Tab
                        id="home"
                        className="z-10"
                        icon={<HomeIcon className="w-5 h-5" />}
                    >
                        Home
                    </Tabs.Tab>
                    <Tabs.Tab
                        id="profile"
                        className="z-10"
                        icon={<UserIcon className="w-5 h-5" />}
                    >
                        Profile
                    </Tabs.Tab>
                    <Tabs.Tab
                        id="settings"
                        className="z-10"
                        icon={<CogIcon className="w-5 h-5" />}
                    >
                        Settings
                    </Tabs.Tab>
                </Tabs.List>

                <div className="mt-4">
                    <Tabs.Panel id="home">
                        <h3 className="text-lg font-medium">Home Content</h3>
                        <p>Welcome to the home tab!</p>
                    </Tabs.Panel>
                    <Tabs.Panel id="profile">
                        <h3 className="text-lg font-medium">Profile Content</h3>
                        <p>This is your profile information.</p>
                    </Tabs.Panel>
                    <Tabs.Panel id="settings">
                        <h3 className="text-lg font-medium">
                            Settings Content
                        </h3>
                        <p>Manage your settings here.</p>
                    </Tabs.Panel>
                </div>
            </Tabs>
        </div>
    );
};

export default CapsuleTabs;
