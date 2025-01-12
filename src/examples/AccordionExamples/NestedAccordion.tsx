import { Accordion } from "@/components/Accordion/Accordion";
import React from "react";
import { twMerge } from "tailwind-merge";

const NestedAccordion = () => {
    return (
        <div className="mb-4 md:mb-0">
            <div
                className={twMerge(
                    "w-full block transition-all duration-300 rounded-xl",
                    "bg-white p-6",
                    "border border-gray-200",
                    "hover:shadow-lg"
                )}
            >
                <div className="text-center mb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Nested Accordions
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Accordions within accordion panels
                    </p>
                </div>

                {/* Parent Accordion */}
                <Accordion className="space-y-2">
                    <Accordion.Item id="parent-1">
                        <Accordion.Trigger className="bg-blue-50 hover:bg-blue-100">
                            First Level - Section 1
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-blue-50/30 p-2">
                            <p className="mb-4 text-blue-700">
                                Parent content goes here.
                            </p>

                            {/* First Nested Accordion */}
                            <Accordion
                                className="ml-4 border-l-2 border-blue-200 pl-4"
                                allowMultiple
                            >
                                <Accordion.Item id="nested-1-1">
                                    <Accordion.Trigger className="bg-green-50 hover:bg-green-100">
                                        Second Level - Section 1.1
                                    </Accordion.Trigger>
                                    <Accordion.Content className="bg-green-50/30">
                                        <p>Nested content for section 1.1</p>
                                    </Accordion.Content>
                                </Accordion.Item>

                                <Accordion.Item id="nested-1-2">
                                    <Accordion.Trigger className="bg-green-50 hover:bg-green-100">
                                        Second Level - Section 1.2
                                    </Accordion.Trigger>
                                    <Accordion.Content className="bg-green-50/30">
                                        {/* Second Level Nested Accordion */}
                                        <Accordion className="ml-4 border-l-2 border-green-200 pl-4 mt-2">
                                            <Accordion.Item id="nested-2-1">
                                                <Accordion.Trigger className="bg-purple-50 hover:bg-purple-100">
                                                    Third Level - Section 1.2.1
                                                </Accordion.Trigger>
                                                <Accordion.Content className="bg-purple-50/30">
                                                    <p>Deep nested content</p>
                                                </Accordion.Content>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="parent-2">
                        <Accordion.Trigger className="bg-blue-50 hover:bg-blue-100">
                            First Level - Section 2
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-blue-50/30 p-2">
                            <p className="mb-4 text-blue-700">
                                Another parent section.
                            </p>

                            {/* Another Nested Accordion */}
                            <Accordion
                                className="ml-4 border-l-2 border-blue-200 pl-4"
                                allowMultiple
                            >
                                <Accordion.Item id="nested-2-1">
                                    <Accordion.Trigger className="bg-green-50 hover:bg-green-100">
                                        Second Level - Section 2.1
                                    </Accordion.Trigger>
                                    <Accordion.Content className="bg-green-50/30">
                                        <p>Content for nested section 2.1</p>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default NestedAccordion;
