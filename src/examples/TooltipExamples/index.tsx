"use client";

import React from "react";
import Tooltip from "@/components/Tooltip/Tooltip";

const TooltipExamples = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4 p-6 bg-white rounded-xl border border-gray-200 w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Position Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                    <Tooltip
                        position="top"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Top
                        <Tooltip.Content>
                            Tooltip on top
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip
                        position="bottom"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Bottom
                        <Tooltip.Content>
                            Tooltip on bottom
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip
                        position="left"
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Left
                        <Tooltip.Content>
                            Tooltip on left
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip
                        position="right"
                        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                        Right
                        <Tooltip.Content>
                            Tooltip on right
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>
                </div>
            </div>

            {/* Custom Styled Tooltips */}
            <div className="space-y-4 p-6 bg-white rounded-xl border border-gray-200 w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Custom Styles
                </h3>
                <div className="flex flex-wrap gap-4">
                    <Tooltip className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                        Custom Color
                        <Tooltip.Content className="bg-indigo-500">
                            Indigo tooltip
                            <Tooltip.Arrow color="border-t-indigo-500" />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                        With Icon
                        <Tooltip.Content className="bg-pink-500 w-36">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 shrink-0">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                Info with icon
                            </div>
                            <Tooltip.Arrow color="border-t-pink-500" />
                        </Tooltip.Content>
                    </Tooltip>
                </div>
            </div>

            {/* Interactive Elements */}
            <div className="space-y-4 p-6 bg-white rounded-xl border border-gray-200 w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Interactive Elements
                </h3>
                <div className="flex flex-wrap gap-4">
                    <Tooltip as="div">
                        <input
                            type="text"
                            placeholder="Hover me"
                            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Tooltip.Content>
                            Input field tooltip
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip
                        as="div"
                        className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                        <span className="text-gray-600">?</span>
                        <Tooltip.Content className="w-48">
                            <div className="font-medium mb-1">Help Icon</div>
                            <p className="text-sm">
                                This is a longer tooltip explanation that wraps
                                to multiple lines.
                            </p>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>
                </div>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-gray-200 w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Size Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                    <Tooltip className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
                        Small
                        <Tooltip.Content className="w-20">
                            Compact tooltip
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">
                        Large
                        <Tooltip.Content className="w-48">
                            A larger tooltip with more content that wraps to multiple lines for better readability
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>
                </div>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-gray-200 w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Rich Content
                </h3>
                <div className="flex flex-wrap gap-4">
                    <Tooltip className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">
                        User Profile
                        <Tooltip.Content className="w-64 p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-violet-200 flex items-center justify-center">
                                    <span className="text-violet-600 text-lg font-medium">JD</span>
                                </div>
                                <div>
                                    <h4 className="font-medium">John Doe</h4>
                                    <p className="text-gray-200 text-sm">Software Engineer</p>
                                </div>
                            </div>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600">
                        Statistics
                        <Tooltip.Content className="w-48">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Views</span>
                                    <span className="font-medium">1,234</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Likes</span>
                                    <span className="font-medium">567</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Comments</span>
                                    <span className="font-medium">89</span>
                                </div>
                            </div>
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip>
                </div>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Arrow Positions
                </h3>
                <div className="flex flex-wrap gap-4">
                    <Tooltip className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600">
                        Start Arrow
                        <Tooltip.Content className="w-32">
                            Arrow at start
                            <Tooltip.Arrow className="left-4 -translate-x-0" />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
                        End Arrow
                        <Tooltip.Content className="w-32">
                            Arrow at end
                            <Tooltip.Arrow className="left-auto right-4 -translate-x-0" />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip 
                        position="bottom" 
                        className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
                    >
                        Custom Offset
                        <Tooltip.Content className="w-36">
                            Arrow with offset
                            <Tooltip.Arrow className="left-[75%]" />
                        </Tooltip.Content>
                    </Tooltip>

                    <Tooltip className="px-4 py-2 bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600">
                        No Arrow
                        <Tooltip.Content className="w-32">
                            Without arrow
                        </Tooltip.Content>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default TooltipExamples;
