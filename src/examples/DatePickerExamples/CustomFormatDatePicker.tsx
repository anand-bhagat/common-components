import React from "react";
import { DatePicker } from "@/components/DatePicker";

const CustomFormatDatePicker = () => {
    const handleDateChange = (date: Date | null) => {
        console.log("Selected date:", date);
    };

    return (
        <div className="space-y-6">
            <div className="max-w-md">
                <h2 className="text-xl font-semibold mb-4">Custom Format Date Picker</h2>
                <p className="text-gray-600 mb-6">
                    Customize the date format using date-fns format strings. The format can be set
                    globally for the picker or specifically for the input.
                </p>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-medium mb-3">Global Format (dd-MMM-yyyy)</h3>
                        <div className="w-64">
                            <DatePicker onChange={handleDateChange} dateFormat="dd-MMM-yyyy">
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select date" />
                                    <DatePicker.Icon />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Input-specific Format (yyyy/MM/dd)</h3>
                        <div className="w-64">
                            <DatePicker onChange={handleDateChange}>
                                <DatePicker.Control>
                                    <DatePicker.Input 
                                        placeholder="Select date" 
                                        format="yyyy/MM/dd"
                                    />
                                    <DatePicker.Icon />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Full Month Name (MMMM dd, yyyy)</h3>
                        <div className="w-64">
                            <DatePicker onChange={handleDateChange} dateFormat="MMMM dd, yyyy">
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

export default CustomFormatDatePicker; 