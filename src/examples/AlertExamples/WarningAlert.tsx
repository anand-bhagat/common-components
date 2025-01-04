"use client";
import React from "react";
import { useAlert } from "@/components/Alert/useAlert";

const WarningAlert = () => {
    const { showAlert } = useAlert();

    const handleWarningAlert = async () => {
        const result = await showAlert({
            title: "Warning",
            children: "Are you sure you want to proceed?",
            type: "warning",
            confirmText: "Yes, proceed",
            cancelText: "No, cancel",
        });
        console.log("Alert result:", result);
    };

    return (
        <button
            onClick={handleWarningAlert}
            className="flex items-center justify-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 hover:border-yellow-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-yellow-700 group-hover:text-yellow-800">
                    Warning Alert
                </span>
                <p className="text-sm text-yellow-600/80 mt-2">
                    Important warning message
                </p>
            </div>
        </button>
    );
};

export default WarningAlert;
