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
            className="flex items-center justify-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/20 rounded-xl border border-yellow-200 dark:border-yellow-700/30 hover:border-yellow-300 dark:hover:border-yellow-600/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-yellow-700 dark:text-yellow-200 group-hover:text-yellow-800 dark:group-hover:text-yellow-100">
                    Warning Alert
                </span>
                <p className="text-sm text-yellow-600/80 dark:text-yellow-300/60 mt-2">
                    Important warning message
                </p>
            </div>
        </button>
    );
};

export default WarningAlert;
