import React from "react";
import { useModal } from "@/components/Modal/useModal";
import { Modal } from "@/components/Modal/Modal";
import { twMerge } from "tailwind-merge";

const NestedModal = () => {
    const { isOpen, showModal, hideModal } = useModal();
    const {
        isOpen: isNestedOpen,
        showModal: showNestedModal,
        hideModal: hideNestedModal,
    } = useModal();

    const handleOpenModal = async () => {
        await showModal();
    };

    const handleOpenNestedModal = async () => {
        await hideModal();
        await showNestedModal();
    };

    const handleCloseNestedModal = async () => {
        await hideNestedModal();
        await showModal();
    };

    return (
        <div className="mb-4 md:mb-0">
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
                        Nested Modal
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Nested modal with basic functionality
                    </p>
                </div>
            </button>
            <Modal isOpen={isOpen} onClose={hideModal}>
                <Modal.Header>Example Modal</Modal.Header>
                <Modal.Body>
                    <p>This is the main modal content.</p>
                    <div className="mt-4">
                        <button
                            onClick={handleOpenNestedModal}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Open Nested Modal
                        </button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={() => hideModal()}
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => hideModal()}
                        className="px-4 py-2 text-white bg-blue-500 rounded"
                    >
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
            <Modal isOpen={isNestedOpen} onClose={hideNestedModal}>
                <Modal.Header>Nested Modal</Modal.Header>
                <Modal.Body>
                    <p>This is a nested modal!</p>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={handleCloseNestedModal}
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleCloseNestedModal}
                        className="px-4 py-2 text-white bg-blue-500 rounded"
                    >
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default NestedModal;
