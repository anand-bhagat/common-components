import React from "react";
import { useModal } from "@/components/Modal/useModal";
import { Modal } from "@/components/Modal/Modal";
import { twMerge } from "tailwind-merge";

const SizeModal = () => {
    const {
        isOpen: isSmallOpen,
        showModal: showSmallModal,
        hideModal: hideSmallModal,
    } = useModal();
    const {
        isOpen: isLargeOpen,
        showModal: showLargeModal,
        hideModal: hideLargeModal,
    } = useModal();

    return (
        <div className="col-span-2 grid grid-cols-2 gap-4">
            {/* Small Modal */}
            <div>
                <button
                    onClick={showSmallModal}
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
                            Small Modal
                        </span>
                        <p className="text-sm text-gray-600 mt-2">
                            Compact size modal
                        </p>
                    </div>
                </button>

                <Modal
                    className="max-w-sm"
                    isOpen={isSmallOpen}
                    onClose={hideSmallModal}
                >
                    <Modal.Header>Small Modal</Modal.Header>
                    <Modal.Body>
                        <p>This is a compact modal with limited width.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            onClick={hideSmallModal}
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                        >
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* Large Modal */}
            <div>
                <button
                    onClick={showLargeModal}
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
                            Large Modal
                        </span>
                        <p className="text-sm text-gray-600 mt-2">
                            Full-width modal
                        </p>
                    </div>
                </button>

                <Modal
                    className="max-w-4xl w-full"
                    isOpen={isLargeOpen}
                    onClose={hideLargeModal}
                >
                    <Modal.Header>Large Modal</Modal.Header>
                    <Modal.Body>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium mb-2">
                                    Left Column
                                </h4>
                                <p>
                                    This is a full-width modal with multiple
                                    columns of content.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">
                                    Right Column
                                </h4>
                                <p>
                                    The extra space allows for more complex
                                    layouts and content.
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            onClick={hideLargeModal}
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                        >
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default SizeModal;
