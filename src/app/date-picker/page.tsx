import React, { Suspense } from "react";
import DatePickerExamples from "@/examples/DatePickerExamples";

const DatePickerPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-8">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Date Picker Component
                </h1>
                <p className="text-center text-gray-700 mb-12">
                    Explore different types of date pickers and their
                    functionalities.
                </p>
                <Suspense fallback={<div>Loading...</div>}>
                    <DatePickerExamples />
                </Suspense>
            </div>
        </div>
    );
};

export default DatePickerPage;
