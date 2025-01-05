"use client"
import React from "react";
import BasicModal from "./BasicModal";
import FormModal from "./FormModal";
import NestedModal from "./NestedModal";
import ColoredModal from "./ColoredModal";
import SizeModal from "./SizeModal";

const ModalExamples = () => {
    return (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 group">
            <BasicModal />
            <NestedModal />
            <FormModal />
            <ColoredModal />
            <SizeModal />
        </div>
    );
};

export default ModalExamples; 