"use client";
import React from "react";
import BasicAccordion from "./BasicAccordion";
import MultipleAccordion from "./MultipleAccordion";
import CustomStyledAccordion from "./CustomStyledAccordion";
import IconPositionAccordion from "./IconPositionAccordion";
import NestedAccordion from "./NestedAccordion";
import PreExpandedAccordion from "./PreExpandedAccordion";
import RichContentAccordion from "./RichContentAccordion";
import AnimatedContentAccordion from "./AnimatedContentAccordion";

const AccordionExamples = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BasicAccordion />
            <MultipleAccordion />
            <CustomStyledAccordion />
            <IconPositionAccordion />
            <NestedAccordion />
            <PreExpandedAccordion />
            <RichContentAccordion />
            <AnimatedContentAccordion />
        </div>
    );
};

export default AccordionExamples; 