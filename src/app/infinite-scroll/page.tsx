import InfiniteScrollExamples from "@/examples/InfiniteScrollExamples";
import React from "react";

export default function InfiniteScrollPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-8">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Infinite Scroll Component
                </h1>
                <p className="text-center text-gray-700 mb-12">
                    Explore different types of infinite scroll implementations
                    and their functionalities.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg
                                className="h-5 w-5 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                This component has known issues and limitations that may affect its functionality. We are aware of these problems but they are not actively being worked on at the moment. Please use with caution as some features may not work as expected.
                            </p>
                        </div>
                    </div>
                </div>
                <InfiniteScrollExamples />
            </div>
        </div>
    );
}
