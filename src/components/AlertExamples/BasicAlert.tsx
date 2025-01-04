"use client";
import React from "react";
import { useAlert } from "@/components/Alert/useAlert";

const BasicAlert = () => {
    const { showAlert } = useAlert();
    const handleBasicAlert = async () => {
        const result = await showAlert({
            title: "Basic Alert",
            children: "This is a basic alert message.",
            type: "info",
        });
        console.log("Alert result:", result);
    };
    return (
        <button
            onClick={handleBasicAlert}
            className="flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-200 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-gray-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-blue-700 dark:text-gray-200 group-hover:text-blue-800 dark:group-hover:text-white">
                    Information Alert
                </span>
                <p className="text-sm text-blue-600/80 dark:text-gray-400 mt-2">
                    For general messages and notifications
                </p>
            </div>
        </button>
    );
};

export default BasicAlert;
