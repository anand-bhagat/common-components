import React from "react";
import { useModal } from "@/components/Modal/useModal";
import { Modal } from "@/components/Modal/Modal";
import { twMerge } from "tailwind-merge";

const BasicModal = () => {
    const { isOpen, showModal, hideModal } = useModal();

    const handleOpenModal = async () => {
        await showModal();
    };

    return (
        <div>
            <button
                onClick={handleOpenModal}
                className={twMerge(
                    "w-full block transition-all duration-300 rounded-xl",
                    "bg-white p-6",
                    "border border-gray-200",
                    "hover:scale-105 hover:shadow-xl",
                    "group-hover:blur-[2px] hover:!blur-none"
                )}
            >
                <div className="text-center">
                    <span className="text-lg font-medium text-gray-900">
                        Basic Modal
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Simple modal with basic functionality
                    </p>
                </div>
            </button>

            <Modal isOpen={isOpen} onClose={hideModal}>
                <Modal.Header>Basic Modal</Modal.Header>
                <Modal.Body>
                    <p>This is a basic modal with standard functionality.</p>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={hideModal}
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BasicModal;
