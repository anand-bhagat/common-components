import React from "react";
import { Accordion } from "@/components/Accordion/Accordion";
import { twMerge } from "tailwind-merge";

const MultipleAccordion = () => {
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
                        Multiple Selection Accordion
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Multiple panels can be opened simultaneously
                    </p>
                </div>

                <Accordion allowMultiple defaultOpen={["section-1"]}>
                    <Accordion.Item id="section-1">
                        <Accordion.Trigger className="bg-blue-50 hover:bg-blue-100">
                            Short Content Section
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-blue-50/50">
                            <p>This is a brief content section.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="section-2">
                        <Accordion.Trigger className="bg-green-50 hover:bg-green-100">
                            Medium Content Section
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-green-50/50">
                            <div className="space-y-2">
                                <p>This section contains a moderate amount of content.</p>
                                <p>It spans multiple paragraphs to demonstrate different content lengths.</p>
                                <ul className="list-disc list-inside">
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="section-3">
                        <Accordion.Trigger className="bg-purple-50 hover:bg-purple-100">
                            Long Content Section
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-purple-50/50">
                            <div className="space-y-4">
                                <p>
                                    This is a longer content section with more detailed information.
                                    It demonstrates how the accordion handles larger content blocks.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Key Benefits:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Improved organization of content</li>
                                        <li>Better user experience with expandable sections</li>
                                        <li>Flexible content layout options</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-white rounded-lg">
                                    <p className="text-sm text-gray-600">
                                        This nested box shows how the accordion handles
                                        complex nested elements and maintains proper spacing
                                        and alignment.
                                    </p>
                                </div>
                                <p>
                                    The animation smoothly adjusts to different content
                                    lengths while maintaining a consistent look and feel.
                                </p>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default MultipleAccordion; 