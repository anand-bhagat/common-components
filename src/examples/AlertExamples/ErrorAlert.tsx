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
            className="flex items-center justify-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:border-red-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-red-700 group-hover:text-red-800">
                    Error Alert
                </span>
                <p className="text-sm text-red-600/80 mt-2">
                    Error notification
                </p>
            </div>
        </button>
    );
};

export default ErrorAlert;
