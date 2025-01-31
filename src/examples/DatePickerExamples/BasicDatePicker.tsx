"use client";
import React from "react";
import { DatePicker } from "@/components/DatePicker";

const BasicDatePicker = () => {
    const handleDateChange = (date: Date | null) => {
        console.log("Selected date:", date);
    };

    return (
        <div className="space-y-6">
            <div className="max-w-md">
                <h2 className="text-xl font-semibold mb-4">Basic Date Picker</h2>
                <p className="text-gray-600 mb-6">
                    A simple date picker with default configuration. Click the input or icon to open
                    the calendar.
                </p>
                <div className="w-64">
                    <DatePicker onChange={handleDateChange}>
                        <DatePicker.Control>
                            <DatePicker.Input placeholder="Select a date" />
                            <DatePicker.Icon />
                        </DatePicker.Control>
                        <DatePicker.Calendar />
                    </DatePicker>
                </div>
            </div>
        </div>
    );
};

export default BasicDatePicker;
