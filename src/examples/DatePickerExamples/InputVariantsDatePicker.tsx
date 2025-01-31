import React from "react";
import { DatePicker } from "@/components/DatePicker";

const InputVariantsDatePicker = () => {
    const handleDateChange = (date: Date | null) => {
        console.log("Selected date:", date);
    };

    return (
        <div className="space-y-6">
            <div className="max-w-md">
                <h2 className="text-xl font-semibold mb-4">Input Variants</h2>
                <p className="text-gray-600 mb-6">
                    Different input configurations including read-only mode, icon positioning,
                    and custom icons.
                </p>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-medium mb-3">Read-only Input</h3>
                        <div className="w-64">
                            <DatePicker onChange={handleDateChange}>
                                <DatePicker.Control>
                                    <DatePicker.Input 
                                        placeholder="Select date" 
                                        allowManualInput={false}
                                    />
                                    <DatePicker.Icon />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Left-aligned Icon</h3>
                        <div className="w-64">
                            <DatePicker onChange={handleDateChange}>
                                <DatePicker.Control>
                                    <DatePicker.Icon />
                                    <DatePicker.Input placeholder="Select date" />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Custom Icon</h3>
                        <div className="w-64">
                            <DatePicker onChange={handleDateChange}>
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select date" />
                                    <DatePicker.Icon>
                                        <svg 
                                            className="w-5 h-5" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                            />
                                        </svg>
                                    </DatePicker.Icon>
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Custom Trigger</h3>
                        <div className="w-64">
                            <DatePicker onChange={handleDateChange}>
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select date" />
                                    <DatePicker.Trigger>
                                        <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
                                            Pick
                                        </button>
                                    </DatePicker.Trigger>
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputVariantsDatePicker; 