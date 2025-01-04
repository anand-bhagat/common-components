"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import ToastComponent from "./ToastComponent";
import { ToastPosition, useToast } from "./useToast";

const positionStyles: Record<ToastPosition, string> = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
};

const Toaster = () => {
    const { toasts, hideToast } = useToast();

    const getToastsByPosition = (position: ToastPosition) => {
        return toasts.filter((toast) => toast.position === position);
    };

    return (
        <>
            {(Object.keys(positionStyles) as ToastPosition[]).map((position) => (
                <div key={position} className={twMerge("fixed z-50", positionStyles[position])}>
                    {getToastsByPosition(position).map((toast) => (
                        <ToastComponent
                            key={toast.id}
                            {...toast}
                            onClose={() => hideToast(toast.id)}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

export default Toaster;