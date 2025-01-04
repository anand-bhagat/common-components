"use client";
import React from "react";
import { useAlert } from "@/components/Alert/useAlert";

const SuccessAlert = () => {
    const { showAlert } = useAlert();

    const handleSuccessAlert = async () => {
        const result = await showAlert({
            title: "Success!",
            children: "Your action was completed successfully.",
            type: "success",
            confirmText: "Great!",
        });
        console.log("Alert result:", result);
    };
    return (
        <button
            onClick={handleSuccessAlert}
            className="flex items-center justify-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-green-700 group-hover:text-green-800">
                    Success Alert
                </span>
                <p className="text-sm text-green-600/80 mt-2">
                    Positive confirmation
                </p>
            </div>
        </button>
    );
};

export default SuccessAlert;
