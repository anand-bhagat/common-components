import React, { useState } from "react";
import { DatePicker } from "@/components/DatePicker";

const DefaultDatePicker = () => {
    const [controlledDate, setControlledDate] = useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        console.log("Selected date:", date);
    };

    const handleControlledDateChange = (date: Date | null) => {
        setControlledDate(date);
        console.log("Controlled date:", date);
    };

    return (
        <div className="space-y-6">
            <div className="max-w-md">
                <h2 className="text-xl font-semibold mb-4">Default Date & State Management</h2>
                <p className="text-gray-600 mb-6">
                    Examples of date pickers with default dates and controlled state management.
                </p>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-medium mb-3">With Default Date (Uncontrolled)</h3>
                        <div className="w-64">
                            <DatePicker 
                                defaultDate={new Date()} 
                                onChange={handleDateChange}
                            >
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select date" />
                                    <DatePicker.Icon />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Controlled State</h3>
                        <div className="space-y-4">
                            <div className="w-64">
                                <DatePicker 
                                    value={controlledDate}
                                    onChange={handleControlledDateChange}
                                >
                                    <DatePicker.Control>
                                        <DatePicker.Input placeholder="Select date" />
                                        <DatePicker.Icon />
                                    </DatePicker.Control>
                                    <DatePicker.Calendar />
                                </DatePicker>
                            </div>
                            <div className="text-sm text-gray-600">
                                Selected date: {controlledDate ? controlledDate.toLocaleDateString() : 'None'}
                            </div>
                            <button
                                onClick={() => setControlledDate(null)}
                                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                            >
                                Clear Date
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Specific Default Date (Uncontrolled)</h3>
                        <div className="w-64">
                            <DatePicker 
                                defaultDate={new Date("2024-12-25")} 
                                onChange={handleDateChange}
                            >
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select date" />
                                    <DatePicker.Icon />
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

export default DefaultDatePicker; 