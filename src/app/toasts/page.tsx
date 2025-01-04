import Toaster from "@/components/Toast/Toaster";
import ToastExamples from "@/examples/ToastExamples";
import React from "react";

const page = () => {
    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Toast Component
            </h1>
            <p className="text-center text-gray-700 mb-12">
                Explore different types of toasts and their functionalities.
            </p>
            <ToastExamples />
            <Toaster />
        </div>
    );
};

export default page;
