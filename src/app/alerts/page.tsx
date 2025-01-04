"use client";
import AlertDialog from "@/components/Alert/AlertDialog";
import { useAlert } from "@/components/Alert/useAlert";
import React from "react";

const AlertsPage = () => {
    const { showAlert } = useAlert();

    const handleBasicAlert = async () => {
        const result = await showAlert({
            title: "Basic Alert",
            children: "This is a basic alert message.",
            type: "info",
        });
        console.log("Alert result:", result);
    };

    const handleSuccessAlert = async () => {
        const result = await showAlert({
            title: "Success!",
            children: "Your action was completed successfully.",
            type: "success",
            confirmText: "Great!",
        });
        console.log("Alert result:", result);
    };

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
        <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-8">
                Alert Component
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-400 mb-12">
                Explore different types of alerts and their functionalities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <button
                    onClick={handleSuccessAlert}
                    className="flex items-center justify-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700/30 hover:border-green-300 dark:hover:border-green-600/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                >
                    <div className="text-center">
                        <span className="text-lg font-medium text-green-700 dark:text-green-200 group-hover:text-green-800 dark:group-hover:text-green-100">
                            Success Alert
                        </span>
                        <p className="text-sm text-green-600/80 dark:text-green-300/60 mt-2">
                            Positive confirmation
                        </p>
                    </div>
                </button>
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
                <AlertDialog />
            </div>
        </div>
    );
};

export default AlertsPage;
