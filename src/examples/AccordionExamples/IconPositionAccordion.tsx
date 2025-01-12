import React from "react";
import { Accordion } from "@/components/Accordion/Accordion";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Custom Icon Components
const StarIcon = ({ isOpen }: { isOpen: boolean }) => (
    <motion.svg
        className="w-5 h-5"
        animate={{ scale: isOpen ? 1.2 : 1 }}
        fill={isOpen ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
    </motion.svg>
);

const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
    <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        className="relative w-5 h-5 text-blue-500"
    >
        <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-4 h-0.5 bg-current rounded-full" />
            <span className="absolute w-4 h-0.5 bg-current rounded-full rotate-90" />
        </span>
    </motion.div>
);

const IconPositionAccordion = () => {
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
                        Icon Position Variants
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Different icon positions and styles
                    </p>
                </div>

                <Accordion className="space-y-4">
                    <Accordion.Item id="left-icon">
                        <Accordion.Trigger 
                            icon={StarIcon}
                            iconPosition="left"
                            className="bg-amber-50 hover:bg-amber-100 text-amber-700"
                        >
                            Left Icon Position
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-amber-50/50">
                            <p>Icon positioned on the left side of the trigger.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="right-icon">
                        <Accordion.Trigger 
                            icon={PlusIcon}
                            iconPosition="right"
                            className="bg-blue-50 hover:bg-blue-100 text-blue-700"
                        >
                            Right Icon Position (Default)
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-blue-50/50">
                            <p>Default icon position on the right side.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="default-icon">
                        <Accordion.Trigger className="bg-green-50 hover:bg-green-100 text-green-700">
                            Default Chevron Icon
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-green-50/50">
                            <p>Using the default chevron icon.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item id="no-icon">
                        <Accordion.Trigger 
                            className="bg-purple-50 hover:bg-purple-100 text-purple-700"
                            showIcon={false}
                        >
                            No Icon
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-purple-50/50">
                            <p>Trigger without any icon.</p>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default IconPositionAccordion; 