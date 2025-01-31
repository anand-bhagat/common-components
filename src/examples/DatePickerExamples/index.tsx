"use client";
import React from "react";
import BasicDatePicker from "./BasicDatePicker";
import CustomFormatDatePicker from "./CustomFormatDatePicker";
import InputVariantsDatePicker from "./InputVariantsDatePicker";
import DefaultDatePicker from "./DefaultDatePicker";
import Tabs from "@/components/Tabs/Tabs";

const DatePickerExamples = () => {
    const examples = [
        { id: "basic", label: "Basic Usage", content: <BasicDatePicker /> },
        { id: "format", label: "Date Formats", content: <CustomFormatDatePicker /> },
        { id: "input", label: "Input Variants", content: <InputVariantsDatePicker /> },
        { id: "default", label: "Default & State", content: <DefaultDatePicker /> },
    ];

    return (
        <div className="space-y-8">
            <Tabs defaultTab="basic" tabsId="datepicker-examples">
                <Tabs.List className="flex-wrap">
                    {examples.map((example) => (
                        <Tabs.Tab key={example.id} id={example.id}>
                            {example.label}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>

                {examples.map((example) => (
                    <Tabs.Panel key={example.id} id={example.id} className="p-4">
                        {example.content}
                    </Tabs.Panel>
                ))}
            </Tabs>
        </div>
    );
};

export default DatePickerExamples;
