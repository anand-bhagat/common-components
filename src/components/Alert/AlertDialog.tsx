"use client";
import React from "react";
import AlertComponent from "./AlertComponent";
import { useAlert } from "./useAlert";

const AlertDialog = () => {
    const { currentAlert } = useAlert();

    if (!currentAlert) return null;

    return <AlertComponent />;
};

export default AlertDialog;
