import React from "react";
import { Accordion } from "@/components/Accordion/Accordion";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Custom Icon Component
const CustomIcon = ({ isOpen }: { isOpen: boolean }) => (
    <motion.div
        animate={{ rotate: isOpen ? 0 : 0 }}
        className="relative w-5 h-5"
    >
        <span className="absolute inset-0 flex items-center justify-center">
            <motion.span
                className="w-4 h-0.5 bg-purple-500 rounded-full"
                animate={{ rotate: isOpen ? 0 : 0 }}
            />
            <motion.span 
                className="absolute w-4 h-0.5 bg-purple-500 rounded-full"
                animate={{ rotate: isOpen ? 0 : 90 }}
            />
        </span>
    </motion.div>
);

const CustomStyledAccordion = () => {
    return (
        <div className="mb-4 md:mb-0">
            <div className={twMerge(
                "w-full block transition-all duration-300 rounded-xl",
                "bg-gradient-to-br from-purple-50 to-pink-50 p-6",
                "border border-purple-100",
                "hover:shadow-lg hover:shadow-purple-100"
            )}>
                <div className="text-center mb-4">
                    <span className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Custom Styled Accordion
                    </span>
                    <p className="text-sm text-purple-600/70 mt-2">
                        With custom colors, typography, and animations
                    </p>
                </div>

                <Accordion 
                    className="divide-y-2 divide-purple-100 border-y-2 border-purple-100 rounded-lg overflow-hidden"
                    allowMultiple
                >
                    <Accordion.Item id="custom-1">
                        <Accordion.Trigger 
                            icon={CustomIcon}
                            className="bg-white hover:bg-purple-50/50 font-medium text-purple-700"
                        >
                            Custom Icons & Typography
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-white/50 prose prose-purple">
                            <p className="text-purple-600">
                                This section demonstrates custom icons and typography styles.
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="custom-2">
                        <Accordion.Trigger 
                            icon={CustomIcon}
                            className="bg-white hover:bg-purple-50/50"
                        >
                            <div className="flex flex-col items-start">
                                <span className="font-semibold text-purple-700">
                                    Complex Content Layout
                                </span>
                                <span className="text-sm text-purple-500">
                                    With subtitle and custom spacing
                                </span>
                            </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-gradient-to-br from-white to-purple-50">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                        <span className="text-purple-600 font-medium">1</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-purple-700">Feature One</h4>
                                        <p className="text-sm text-purple-600">Detailed description here</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                        <span className="text-purple-600 font-medium">2</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-purple-700">Feature Two</h4>
                                        <p className="text-sm text-purple-600">Another description here</p>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="custom-3">
                        <Accordion.Trigger 
                            icon={CustomIcon}
                            className="bg-white hover:bg-purple-50/50"
                        >
                            <div className="inline-flex items-center gap-2">
                                <span className="px-2 py-1 text-sm bg-purple-100 text-purple-600 rounded">
                                    New
                                </span>
                                <span className="font-medium text-purple-700">
                                    With Custom Badge
                                </span>
                            </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-white/50">
                            <p className="text-purple-600">
                                This section shows how to add custom elements like badges
                                to your accordion triggers.
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default CustomStyledAccordion; 