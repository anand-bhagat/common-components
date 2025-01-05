"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useAlert } from "./useAlert";

const AlertComponent = () => {
    const { currentAlert, hideAlert } = useAlert();

    const icons = {
        success: "/alert/success.gif",
        error: "/alert/error.gif",
        warning: "/alert/warning.gif",
        info: "/alert/info.gif",
    };

    const colors = {
        success: "bg-green-500 hover:bg-green-600",
        error: "bg-red-500 hover:bg-red-600",
        warning: "bg-yellow-500 hover:bg-yellow-600",
        info: "bg-blue-500 hover:bg-blue-600",
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 500 },
        },
    };

    const {
        type = "info",
        title,
        children,
        confirmText = "Confirm",
        cancelText = "Cancel",
        showCancelButton = true,
    } = currentAlert || {};

    return (
        <AnimatePresence mode="wait">
            {currentAlert && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
                >
                    <motion.div
                        variants={modalVariants}
                        className={twMerge(
                            "bg-white/90 rounded-lg shadow-xl max-w-md w-full",
                            "border border-gray-200/50 backdrop-blur-sm"
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-center mb-4">
                                <Image
                                    src={icons[type]}
                                    alt={type}
                                    width={96}
                                    height={96}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="text-center">
                                {title && (
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                        {title}
                                    </h3>
                                )}
                                <div className="text-gray-600">
                                    {typeof children === "string" ? (
                                        <p className="text-sm">{children}</p>
                                    ) : (
                                        children
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
                            {showCancelButton && (
                                <button
                                    onClick={() => hideAlert(false)}
                                    className={twMerge(
                                        "px-4 py-2 text-sm font-medium rounded-lg",
                                        "text-gray-700 bg-gray-100 hover:bg-gray-200",
                                        "focus:outline-none focus:ring-2 focus:ring-gray-300",
                                        "transition-colors duration-200"
                                    )}
                                >
                                    {cancelText}
                                </button>
                            )}
                            <button
                                onClick={() => hideAlert(true)}
                                className={twMerge(
                                    "px-4 py-2 text-sm font-medium text-white rounded-lg",
                                    "focus:outline-none focus:ring-2",
                                    "transition-colors duration-200",
                                    colors[type]
                                )}
                            >
                                {confirmText}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AlertComponent;
