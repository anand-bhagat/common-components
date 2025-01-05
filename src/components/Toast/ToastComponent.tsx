"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ToastOptions } from "./useToast";

interface ToastComponentProps extends ToastOptions {
    onClose: () => void;
}

const ToastComponent: React.FC<ToastComponentProps> = ({
    type = "info",
    title,
    message,
    duration = 5000,
    showProgressBar = true,
    showCloseButton = true,
    onClose,
    isOpen,
}) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (duration === Infinity || !showProgressBar) return;

        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
            setProgress(remaining);

            if (remaining === 0) {
                clearInterval(timer);
            }
        }, 10);

        return () => clearInterval(timer);
    }, [duration, showProgressBar]);

    const colors = {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500",
        info: "bg-blue-500",
    };

    const icons = {
        success: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                />
            </svg>
        ),
        error: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ),
        warning: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
        ),
        info: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    };

    const toastVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 500 },
        },
        exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={toastVariants}
                    className={twMerge(
                        "relative min-w-[300px] max-w-md rounded-lg shadow-lg mb-4",
                        "bg-white border border-gray-200"
                    )}
                >
                    <div className="p-4">
                        <div className="flex items-start">
                            <div
                                className={twMerge(
                                    "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white",
                                    colors[type]
                                )}
                            >
                                {icons[type]}
                            </div>
                            <div className="ml-3 w-0 flex-1">
                                {title && (
                                    <h4 className="text-sm font-medium text-gray-900">
                                        {title}
                                    </h4>
                                )}
                                <p className="mt-1 text-sm text-gray-600">
                                    {message}
                                </p>
                            </div>
                            {showCloseButton && (
                                <button
                                    onClick={onClose}
                                    className="ml-4 flex-shrink-0 rounded-lg p-1 hover:bg-gray-100 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                    {showProgressBar && duration !== Infinity && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-lg overflow-hidden">
                            <div
                                className={twMerge(
                                    "h-full transition-all duration-100 ease-linear",
                                    colors[type]
                                )}
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ToastComponent;
