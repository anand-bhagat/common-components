"use client";
import React from "react";
import { useAlert } from "@/components/Alert/useAlert";

const CallbackAlert = () => {
    const { showAlert } = useAlert();

    const handleCallbackAlert = async () => {
        const result = await showAlert({
            title: "With Callbacks",
            children:
                "This alert demonstrates onConfirm and onCancel callbacks.",
            type: "info",
            confirmText: "Proceed",
            cancelText: "Cancel",
            onConfirm: async () => {
                console.log("Confirm callback executed");
                // Simulate some async work
                await new Promise((resolve) => setTimeout(resolve, 1000));
            },
            onCancel: () => {
                console.log("Cancel callback executed");
            },
        });
        console.log("Alert result:", result);
    };
    return (
        <button
            onClick={handleCallbackAlert}
            className="flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700/30 hover:border-blue-300 dark:hover:border-blue-600/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-blue-700 dark:text-blue-200 group-hover:text-blue-800 dark:group-hover:text-blue-100">
                    Callback Alert
                </span>
                <p className="text-sm text-blue-600/80 dark:text-blue-300/60 mt-2">
                    Alert with action callback
                </p>
            </div>
        </button>
    );
};

export default CallbackAlert;
