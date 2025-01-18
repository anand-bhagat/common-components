import React from 'react';
import { Tabs } from '@/components/Tabs/Tabs';
import { DocumentIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';

const VerticalTabs = () => {
    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Vertical Tabs</h2>
            <Tabs defaultTab="docs" tabsId="vertical-tabs" orientation="vertical">
                <Tabs.List className="w-48">
                    <Tabs.Tab id="docs" icon={<DocumentIcon />}>
                        Documentation
                    </Tabs.Tab>
                    <Tabs.Tab id="profile" icon={<UserIcon />}>
                        Profile
                    </Tabs.Tab>
                    <Tabs.Tab id="settings" icon={<CogIcon />}>
                        Settings
                    </Tabs.Tab>
                </Tabs.List>

                <div className="flex-1 pl-6">
                    <Tabs.Panel id="docs" className="prose">
                        <h3>Documentation</h3>
                        <p>Vertical tabs are great for side navigation patterns.</p>
                    </Tabs.Panel>
                    <Tabs.Panel id="profile" className="prose">
                        <h3>User Profile</h3>
                        <p>Manage your profile settings here.</p>
                    </Tabs.Panel>
                    <Tabs.Panel id="settings" className="prose">
                        <h3>Settings</h3>
                        <p>Configure your application preferences.</p>
                    </Tabs.Panel>
                </div>
            </Tabs>
        </div>
    );
};

export default VerticalTabs; 