import { useToast } from "@/components/Toast/useToast";
import React from "react";

const CustomToast = () => {
    const { showToast } = useToast();

    const handleCustomToast = () => {
        showToast({
            type: "info",
            title: "Custom Toast",
            message: "This toast has custom duration and no progress bar",
            position: "bottom-center",
            duration: 10000,
            showProgressBar: false,
        });
    };

    return (
        <button
            onClick={handleCustomToast}
            className="flex items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-blue-700 group-hover:text-blue-800">
                    Custom Toast
                </span>
                <p className="text-sm text-blue-500 mt-2">
                    Custom configuration
                </p>
            </div>
        </button>
    );
};

export default CustomToast;
