import React from "react";
import { Accordion } from "@/components/Accordion/Accordion";
import { twMerge } from "tailwind-merge";

const PreExpandedAccordion = () => {
    return (
        <div className="mb-4 md:mb-0">
            <div className={twMerge(
                "w-full block transition-all duration-300 rounded-xl",
                "bg-white p-6",
                "border border-gray-200",
                "hover:shadow-lg"
            )}>
                <div className="text-center mb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Pre-expanded Accordion
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Sections expanded by default
                    </p>
                </div>

                <Accordion 
                    allowMultiple 
                    defaultOpen={["section-1", "section-3"]}
                    className="space-y-3"
                >
                    <Accordion.Item id="section-1">
                        <Accordion.Trigger className="bg-teal-50 hover:bg-teal-100">
                            <div className="flex items-center gap-2">
                                <span className="text-teal-700">Pre-expanded Section</span>
                                <span className="px-2 py-0.5 text-xs bg-teal-100 text-teal-600 rounded-full">
                                    Open by default
                                </span>
                            </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-teal-50/50">
                            <p className="text-teal-700">
                                This section is expanded when the accordion first renders.
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="section-2">
                        <Accordion.Trigger className="bg-slate-50 hover:bg-slate-100">
                            <span className="text-slate-700">Collapsed Section</span>
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-slate-50/50">
                            <p className="text-slate-700">
                                This section starts collapsed.
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="section-3">
                        <Accordion.Trigger className="bg-teal-50 hover:bg-teal-100">
                            <div className="flex items-center gap-2">
                                <span className="text-teal-700">Another Pre-expanded Section</span>
                                <span className="px-2 py-0.5 text-xs bg-teal-100 text-teal-600 rounded-full">
                                    Open by default
                                </span>
                            </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-teal-50/50">
                            <div className="space-y-3 text-teal-700">
                                <p>Multiple sections can be expanded by default when:</p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>allowMultiple prop is true</li>
                                    <li>defaultOpen array includes multiple IDs</li>
                                </ul>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default PreExpandedAccordion; 