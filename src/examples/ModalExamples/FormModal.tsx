import React, { useState } from "react";
import { useModal } from "@/components/Modal/useModal";
import { Modal } from "@/components/Modal/Modal";
import { twMerge } from "tailwind-merge";

const FormModal = () => {
    const { isOpen, showModal, hideModal } = useModal();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleOpenModal = async () => {
        await showModal();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        await hideModal();
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
                        Form Modal
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Modal with form inputs
                    </p>
                </div>
            </button>

            <Modal isOpen={isOpen} onClose={hideModal}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header>Contact Form</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                    rows={4}
                                    required
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            onClick={hideModal}
                            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                        >
                            Submit
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
};

export default FormModal;
