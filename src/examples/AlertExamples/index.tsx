"use client";
import React from "react";

import BasicAlert from "./BasicAlert";
import WarningAlert from "./WarningAlert";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import CallbackAlert from "./CallbackAlert";

const AlertExamples = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BasicAlert />
            <WarningAlert />
            <SuccessAlert />
            <ErrorAlert />
            <CallbackAlert />
        </div>
    );
};

export default AlertExamples;
