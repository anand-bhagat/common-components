import React from "react";
import { Accordion } from "@/components/Accordion/Accordion";
import { twMerge } from "tailwind-merge";

const BasicAccordion = () => {
    return (
        <div className="mb-4 md:mb-0">
            {/* Example Card Container */}
            <div className={twMerge(
                "w-full block transition-all duration-300 rounded-xl",
                "bg-white p-6",
                "border border-gray-200",
                "hover:shadow-lg"
            )}>
                <div className="text-center mb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Basic Accordion
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Simple single-panel accordion with default styling
                    </p>
                </div>

                {/* Basic Accordion Implementation */}
                <Accordion>
                    <Accordion.Item id="section-1">
                        <Accordion.Trigger>
                            What is React?
                        </Accordion.Trigger>
                        <Accordion.Content>
                            React is a JavaScript library for building user interfaces. 
                            It lets you compose complex UIs from small and isolated 
                            pieces of code called components.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="section-2">
                        <Accordion.Trigger>
                            Why use React?
                        </Accordion.Trigger>
                        <Accordion.Content>
                            React makes it painless to create interactive UIs, 
                            efficiently updates and renders components when data 
                            changes, and can be used to build mobile applications.
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="section-3">
                        <Accordion.Trigger>
                            Key Features
                        </Accordion.Trigger>
                        <Accordion.Content>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Component-Based Architecture</li>
                                <li>Virtual DOM</li>
                                <li>Unidirectional Data Flow</li>
                                <li>JSX Support</li>
                                <li>Rich Ecosystem</li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default BasicAccordion; 