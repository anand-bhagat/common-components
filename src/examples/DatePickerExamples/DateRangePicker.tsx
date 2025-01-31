import React from "react";
import { DatePicker } from "@/components/DatePicker";
import { addDays, subDays } from "date-fns";

const DateRangePicker = () => {
    const today = new Date();
    const handleDateChange = (date: Date | null) => {
        console.log("Selected date:", date);
    };

    return (
        <div className="space-y-6">
            <div className="max-w-md">
                <h2 className="text-xl font-semibold mb-4">Date Range Restrictions</h2>
                <p className="text-gray-600 mb-6">
                    Examples of date pickers with minimum and maximum date restrictions.
                </p>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-medium mb-3">Future Dates Only</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Only allows selecting dates from today onwards.
                        </p>
                        <div className="w-64">
                            <DatePicker 
                                onChange={handleDateChange}
                                minDate={today}
                            >
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select future date" />
                                    <DatePicker.Icon />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Past Dates Only</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Only allows selecting dates up to yesterday.
                        </p>
                        <div className="w-64">
                            <DatePicker 
                                onChange={handleDateChange}
                                maxDate={subDays(today, 1)}
                            >
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select past date" />
                                    <DatePicker.Icon />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Date Range (±7 days)</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Only allows selecting dates within a week before and after today.
                        </p>
                        <div className="w-64">
                            <DatePicker 
                                onChange={handleDateChange}
                                minDate={subDays(today, 7)}
                                maxDate={addDays(today, 7)}
                            >
                                <DatePicker.Control>
                                    <DatePicker.Input placeholder="Select date within range" />
                                    <DatePicker.Icon />
                                </DatePicker.Control>
                                <DatePicker.Calendar />
                            </DatePicker>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">With Default Date</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Has a default date and restricts selection to the next 30 days.
                        </p>
                        <div className="w-64">
                            <DatePicker 
                                onChange={handleDateChange}
                                defaultDate={today}
                                minDate={today}
                                maxDate={addDays(today, 30)}
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

export default DateRangePicker; 