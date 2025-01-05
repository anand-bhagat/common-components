"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SamplePage = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <div className="p-4">
            <button 
                onClick={() => setIsVisible(!isVisible)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Toggle Content
            </button>

            <AnimatePresence mode="wait">
                {isVisible && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ 
                            opacity: 1,
                            scale: 1,
                            transition: { 
                                type: "spring", 
                                damping: 30, 
                                stiffness: 400 
                            }
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: {
                                duration: 0.2
                            }
                        }}
                        className="fixed inset-0 flex items-center justify-center z-50"
                    >
                        <motion.div 
                            className="absolute inset-0 bg-black/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        
                        <div className="relative z-10 p-6 bg-white rounded-lg shadow-xl max-w-md w-full m-4">
                            Sample Page Content
                            <button onClick={() => setIsVisible(false)}>Close</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SamplePage;