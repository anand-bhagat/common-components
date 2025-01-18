"use client";
import React from "react";
import BasicTabs from "./BasicTabs";
import VerticalTabs from "./VerticalTabs";
import AnimatedTabs from "./AnimatedTabs";
import DisabledTabs from "./DisabledTabs";
import CapsuleTabs from "./CapsuleTabs";


const TabsExamples = () => {
    return (
        <div className="grid grid-cols-1 gap-6">
            <BasicTabs />
            <VerticalTabs />
            <AnimatedTabs />
            <DisabledTabs />
            <CapsuleTabs />
        </div>
    );
};

export default TabsExamples;
