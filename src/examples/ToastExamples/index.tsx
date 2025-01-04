"use client";
import React from "react";
import BasicToast from "./BasicToast";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";
import WarningToast from "./WarningToast";
import CustomToast from "./CustomToast";

const ToastExamples = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BasicToast />
            <SuccessToast />
            <ErrorToast />
            <WarningToast />
            <CustomToast />
        </div>
    );
};

export default ToastExamples;
