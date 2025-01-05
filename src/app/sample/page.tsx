"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SamplePage = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    return (
        <div className="p-4">
            <button 
                onClick={() => setIsVisible(!isVisible)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Toggle Content
            </button>

            <AnimatePresence>
                <motion.div
                    key="content"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ 
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? 1 : 0.95,
                        y: isVisible ? 0 : -20,
                        transition: { 
                            type: "spring", 
                            damping: 25, 
                            stiffness: 500 
                        }
                    }}
                >
                    <div className="p-4 bg-gray-100 rounded">
                        Sample Page Content
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SamplePage;