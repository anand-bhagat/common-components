import { useToast } from "@/components/Toast/useToast";
import React from "react";

const BasicToast = () => {
    const { showToast } = useToast();

    const handleBasicToast = () => {
        showToast({
            type: "info",
            title: "Information", 
            message: "This is a basic toast notification",
        });
    };
    return (
        <button
            onClick={handleBasicToast}
            className="flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-blue-700 group-hover:text-blue-800">
                    Basic Toast
                </span>
                <p className="text-sm text-blue-600/70 mt-2">
                    Default position and duration
                </p>
            </div>
        </button>
    );
};

export default BasicToast;
