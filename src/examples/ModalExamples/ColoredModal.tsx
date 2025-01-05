import React from "react";
import { useModal } from "@/components/Modal/useModal";
import { Modal } from "@/components/Modal/Modal";
import { twMerge } from "tailwind-merge";

const ColoredModal = () => {
    const { isOpen, showModal, hideModal } = useModal();

    const handleOpenModal = async () => {
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
                        Colored Modal
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Custom colored modals
                    </p>
                </div>
            </button>

            <Modal className="border-none" isOpen={isOpen} onClose={hideModal}>
                <Modal.Header className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-t-lg">
                    <h3 className="text-white">Colored Modal</h3>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-gray-600">
                        This modal demonstrates custom background colors and
                        gradients.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={hideModal}
                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={hideModal}
                        className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600"
                    >
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ColoredModal;
