import TooltipExamples from "@/examples/TooltipExamples";
import React from "react";

const TooltipPage = () => {
    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Tooltip Component
            </h1>
            <p className="text-center text-gray-700 mb-12">
                Explore different types of tooltips and their functionalities.
            </p>
            <TooltipExamples />
        </div>
    );
};

export default TooltipPage;
