import React from 'react';
import { Tabs } from '@/components/Tabs/Tabs';
import { 
    UserIcon, 
    KeyIcon, 
    CogIcon, 
    ShieldCheckIcon,
    LockClosedIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const DisabledTabs = () => {
    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Disabled Tabs</h2>
            
            {/* Permission Level Indicator */}
            <div className="mb-4 flex items-center gap-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                <ExclamationTriangleIcon className="w-5 h-5" />
                <span>You have limited permissions. Some features are disabled.</span>
            </div>

            <Tabs defaultTab="profile" tabsId="disabled-tabs">
                <Tabs.List className="bg-gray-50 p-1 rounded-lg">
                    <Tabs.Tab 
                        id="profile" 
                        icon={<UserIcon />}
                    >
                        Profile
                    </Tabs.Tab>
                    <Tabs.Tab 
                        id="security" 
                        icon={<KeyIcon />}
                        disabled
                        className="group"
                    >
                        <span className="flex items-center gap-2">
                            Security
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="inline-flex items-center px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                            >
                                Premium
                            </motion.span>
                        </span>
                    </Tabs.Tab>
                    <Tabs.Tab 
                        id="admin" 
                        icon={<CogIcon />}
                        disabled
                        className="group"
                    >
                        <span className="flex items-center gap-2">
                            Admin
                            <LockClosedIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-500" />
                        </span>
                    </Tabs.Tab>
                </Tabs.List>

                <div className="mt-6">
                    <Tabs.Panel id="profile" className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid gap-4"
                        >
                            <div className="p-4 bg-green-50 rounded-lg">
                                <div className="flex items-center gap-2 text-green-700 mb-2">
                                    <ShieldCheckIcon className="w-5 h-5" />
                                    <h3 className="font-medium">Available Features</h3>
                                </div>
                                <p className="text-green-600 text-sm">
                                    You have access to basic profile management features.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 bg-white border border-gray-200 rounded-lg"
                                >
                                    <h4 className="font-medium mb-2">Personal Info</h4>
                                    <p className="text-sm text-gray-600">Edit your basic information</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-4 bg-white border border-gray-200 rounded-lg"
                                >
                                    <h4 className="font-medium mb-2">Preferences</h4>
                                    <p className="text-sm text-gray-600">Manage your preferences</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </Tabs.Panel>

                    <Tabs.Panel id="security" className="p-4">
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <LockClosedIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Premium Feature
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Upgrade your account to access advanced security features.
                            </p>
                            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                                Upgrade Now
                            </button>
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel id="admin" className="p-4">
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <LockClosedIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Admin Access Required
                            </h3>
                            <p className="text-gray-600">
                                This section is only available to administrators.
                                Contact your system administrator for access.
                            </p>
                        </div>
                    </Tabs.Panel>
                </div>
            </Tabs>
        </div>
    );
};

export default DisabledTabs;