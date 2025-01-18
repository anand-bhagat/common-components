import React from 'react';
import { Tabs } from '@/components/Tabs/Tabs';
import { motion } from 'framer-motion';
import { BeakerIcon, SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';

// Custom animated icons
const PulsingIcon = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        animate={{
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
        }}
        className="w-5 h-5 text-indigo-500"
    >
        {children}
    </motion.div>
);

const AnimatedTabs = () => {
    return (
        <div className="w-full p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Animated Tabs</h2>
            <Tabs defaultTab="features" tabsId="animated-tabs">
                <Tabs.List className="bg-white/50 p-1 rounded-lg">
                    <Tabs.Tab 
                        id="features" 
                        icon={<PulsingIcon><SparklesIcon /></PulsingIcon>}
                        className="relative overflow-hidden"
                    >
                        <motion.span
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Features
                        </motion.span>
                    </Tabs.Tab>
                    <Tabs.Tab 
                        id="experiments" 
                        icon={<PulsingIcon><BeakerIcon /></PulsingIcon>}
                        className="relative overflow-hidden"
                    >
                        <motion.span
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Experiments
                        </motion.span>
                    </Tabs.Tab>
                    <Tabs.Tab 
                        id="performance" 
                        icon={<PulsingIcon><BoltIcon /></PulsingIcon>}
                        className="relative overflow-hidden"
                    >
                        <motion.span
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Performance
                        </motion.span>
                    </Tabs.Tab>
                </Tabs.List>

                <div className="mt-4">
                    <Tabs.Panel id="features" className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {[1, 2, 3].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: item * 0.1 }}
                                    className="p-4 bg-white rounded-lg shadow-sm mb-4"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Feature {item} with staggered animation
                                </motion.div>
                            ))}
                        </motion.div>
                    </Tabs.Panel>

                    <Tabs.Panel id="experiments" className="space-y-4">
                        <motion.div
                            initial={{ scale: 0.8, rotate: -5 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.8, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <motion.div
                                        key={item}
                                        whileHover={{ 
                                            scale: 1.05,
                                            rotate: item % 2 === 0 ? 2 : -2
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-4 bg-white rounded-lg shadow-sm text-center"
                                    >
                                        Experiment {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </Tabs.Panel>

                    <Tabs.Panel id="performance" className="h-48">
                        <motion.div
                            className="h-full bg-white rounded-lg p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="flex items-end justify-around h-full">
                                {[0.4, 0.7, 0.5, 0.9, 0.6].map((height, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-8 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t"
                                        initial={{ height: 0 }}
                                        animate={{ height: `${height * 100}%` }}
                                        transition={{
                                            duration: 0.8,
                                            delay: index * 0.1,
                                            ease: "backOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </Tabs.Panel>
                </div>
            </Tabs>
        </div>
    );
};

export default AnimatedTabs; 