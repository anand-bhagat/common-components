import { useToast } from "@/components/Toast/useToast";
import React from "react";

const WarningToast = () => {
    const { showToast } = useToast();

    const handleWarningToast = () => {
        showToast({
            type: "warning",
            title: "Warning",
            message: "Please save your changes before leaving",
            position: "top-center",
        });
    };

    return (
        <button
            onClick={handleWarningToast}
            className="flex items-center justify-center p-6 bg-yellow-50 rounded-xl border border-yellow-200 hover:border-yellow-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-yellow-700 group-hover:text-yellow-800">
                    Warning Toast
                </span>
                <p className="text-sm text-yellow-500 mt-2">
                    Top-center position
                </p>
            </div>
        </button>
    );
};

export default WarningToast;
