import { useToast } from "@/components/Toast/useToast";
import React from "react";

const ErrorToast = () => {
    const { showToast } = useToast();

    const handleErrorToast = () => {
        showToast({
            type: "error",
            title: "Error",
            message: "Something went wrong. Please try again.",
            position: "bottom-right",
            duration: 8000,
        });
    };

    return (
        <button
            onClick={handleErrorToast}
            className="flex items-center justify-center p-6 bg-red-50 rounded-xl border border-red-200 hover:border-red-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-red-700 group-hover:text-red-800">
                    Error Toast
                </span>
                <p className="text-sm text-red-500 mt-2">
                    Bottom-right with longer duration
                </p>
            </div>
        </button>
    );
};

export default ErrorToast;
