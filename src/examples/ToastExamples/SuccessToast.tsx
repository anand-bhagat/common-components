import { useToast } from "@/components/Toast/useToast";
import React from "react";

const SuccessToast = () => {
    const { showToast } = useToast();

    const handleSuccessToast = () => {
        showToast({
            type: "success",
            title: "Success!",
            message: "Operation completed successfully",
            position: "top-right",
        });
    };

    return (
        <button
            onClick={handleSuccessToast}
            className="flex items-center justify-center p-6 bg-green-50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
        >
            <div className="text-center">
                <span className="text-lg font-medium text-green-700 group-hover:text-green-800">
                    Success Toast
                </span>
                <p className="text-sm text-green-500 mt-2">
                    Top-right position
                </p>
            </div>
        </button>
    );
};

export default SuccessToast;
