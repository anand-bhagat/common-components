import React from "react";
import { Accordion } from "@/components/Accordion/Accordion";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Custom animated icons
const PulsingIcon = ({ isOpen }: { isOpen: boolean }) => (
    <motion.div
        animate={{
            scale: isOpen ? [1, 1.2, 1] : 1,
        }}
        transition={{
            duration: 0.5,
            times: [0, 0.5, 1],
            repeat: isOpen ? Infinity : 0,
        }}
        className="w-5 h-5 text-indigo-500"
    >
        <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            animate={{ rotate: isOpen ? 180 : 0 }}
        >
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
    </motion.div>
);

const SpinningIcon = ({ isOpen }: { isOpen: boolean }) => (
    <motion.div
        animate={{ rotate: isOpen ? 360 : 0 }}
        transition={{ duration: 0.6, ease: "backInOut" }}
        className="w-5 h-5 text-emerald-500"
    >
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
    </motion.div>
);

const AnimatedContentAccordion = () => {
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
                        Animated Content Accordion
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        With custom animations and motion effects
                    </p>
                </div>

                <Accordion allowMultiple className="space-y-4">
                    <Accordion.Item id="fade-slide">
                        <Accordion.Trigger 
                            icon={PulsingIcon}
                            className="bg-indigo-50 hover:bg-indigo-100"
                        >
                            Fade & Slide Animation
                        </Accordion.Trigger>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Accordion.Content className="bg-indigo-50/50">
                                <div className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: item * 0.1 }}
                                            className="p-3 bg-white rounded-lg shadow-sm"
                                        >
                                            Item {item} with staggered animation
                                        </motion.div>
                                    ))}
                                </div>
                            </Accordion.Content>
                        </motion.div>
                    </Accordion.Item>

                    <Accordion.Item id="scale-rotate">
                        <Accordion.Trigger 
                            icon={SpinningIcon}
                            className="bg-emerald-50 hover:bg-emerald-100"
                        >
                            Scale & Rotate Effects
                        </Accordion.Trigger>
                        <motion.div
                            initial={{ scale: 0.8, rotate: -5 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.8, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <Accordion.Content className="bg-emerald-50/50">
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map((item) => (
                                        <motion.div
                                            key={item}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-4 bg-white rounded-lg shadow-sm text-center"
                                        >
                                            Interactive Item {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </Accordion.Content>
                        </motion.div>
                    </Accordion.Item>

                    <Accordion.Item id="wave-effect">
                        <Accordion.Trigger className="bg-fuchsia-50 hover:bg-fuchsia-100">
                            Wave Animation Effect
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-fuchsia-50/50">
                            <div className="flex justify-center space-x-2">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <motion.div
                                        key={index}
                                        animate={{
                                            y: ["0%", "-50%", "0%"],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="w-3 h-12 bg-fuchsia-400 rounded-full"
                                    />
                                ))}
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default AnimatedContentAccordion; 