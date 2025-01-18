import React from 'react';
import { Tabs } from '@/components/Tabs/Tabs';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';

const BasicTabs = () => {
    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Basic Tabs</h2>
            <Tabs defaultTab="home" tabsId="basic-tabs">
                <Tabs.List>
                    <Tabs.Tab id="home" icon={<HomeIcon />}>
                        Home
                    </Tabs.Tab>
                    <Tabs.Tab id="profile" icon={<UserIcon />}>
                        Profile
                    </Tabs.Tab>
                    <Tabs.Tab id="settings" icon={<CogIcon />}>
                        Settings
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel id="home" className="p-4">
                    <h3 className="text-xl font-medium mb-2">Welcome Home</h3>
                    <p className="text-gray-600">
                        This is the home tab content. The tabs component supports icons,
                        animations, and keyboard navigation.
                    </p>
                </Tabs.Panel>

                <Tabs.Panel id="profile" className="p-4">
                    <h3 className="text-xl font-medium mb-2">User Profile</h3>
                    <p className="text-gray-600">
                        This is the profile tab content. Try using keyboard navigation
                        (arrow keys, home, end) to move between tabs.
                    </p>
                </Tabs.Panel>

                <Tabs.Panel id="settings" className="p-4">
                    <h3 className="text-xl font-medium mb-2">Settings</h3>
                    <p className="text-gray-600">
                        This is the settings tab content. Notice the smooth animations
                        when switching between tabs.
                    </p>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

export default BasicTabs; 