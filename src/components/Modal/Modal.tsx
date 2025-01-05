import React, { createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ModalContextValue {
    isOpen: boolean;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
    isOpen: false,
    hideModal: () => {},
});

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Modal: React.FC<ModalProps> & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
} = ({ isOpen, onClose, children, className }) => {
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 500 },
        },
    };

    return (
        <ModalContext.Provider value={{ isOpen, hideModal: onClose }}>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={overlayVariants}
                        className={twMerge(
                            "fixed inset-0 z-50 flex items-center justify-center p-4",
                            "bg-black/20 backdrop-blur-sm"
                        )}
                        onClick={() => onClose()}
                    >
                        <motion.div
                            variants={modalVariants}
                            className={twMerge(
                                "bg-white/90 rounded-lg shadow-xl w-full max-w-lg",
                                "border border-gray-200/50 backdrop-blur-sm",
                                className
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </ModalContext.Provider>
    );
};

const ModalHeader: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => {
    const { hideModal } = useContext(ModalContext);

    return (
        <div
            className={twMerge(
                "px-6 py-4 border-b border-gray-200 flex justify-between items-center",
                className
            )}
        >
            <div className="text-xl font-semibold text-gray-900">
                {children}
            </div>
            <button
                onClick={() => hideModal()}
                className="text-gray-500 hover:text-gray-700"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

const ModalBody: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => (
    <div className={twMerge("px-6 py-4", className)}>{children}</div>
);

const ModalFooter: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => (
    <div
        className={twMerge(
            "px-6 py-4 border-t border-gray-200 flex justify-end space-x-2",
            className
        )}
    >
        {children}
    </div>
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
