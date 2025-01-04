"use client";
import React from "react";
import { useAlert } from "@/components/Alert/useAlert";

const ErrorAlert = () => {
    const { showAlert } = useAlert();

    const handleErrorAlert = async () => {
        const result = await showAlert({
            title: "Error",
            children: "Something went wrong. Please try again.",
            type: "error",
            confirmText: "OK",
            showCancelButton: false,
        });
        console.log("Alert result:", result);
    };

    return (
        <button
            onClick={handleErrorAlert}
            className="flex items-center justify-center p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/20 rounded-xl border border-red-200 dark:border-red-700/30 hover:border-red-300 dark:hover:border-red-600/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-red-700 dark:text-red-200 group-hover:text-red-800 dark:group-hover:text-red-100">
                    Error Alert
                </span>
                <p className="text-sm text-red-600/80 dark:text-red-300/60 mt-2">
                    Error notification
                </p>
            </div>
        </button>
    );
};

export default ErrorAlert;
