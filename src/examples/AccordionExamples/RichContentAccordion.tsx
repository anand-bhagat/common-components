import React from "react";
import { Accordion } from "@/components/Accordion/Accordion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const RichContentAccordion = () => {
    return (
        <div className="mb-4 md:mb-0">
            <div className={twMerge(
                "w-full block transition-all duration-300 rounded-xl",
                "bg-white p-6",
                "border border-gray-200",
                "hover:shadow-lg"
            )}>
                <div className="text-center mb-4">
                    <span className="text-lg font-medium text-gray-900">
                        Rich Content Accordion
                    </span>
                    <p className="text-sm text-gray-600 mt-2">
                        Complex content layouts and interactive elements
                    </p>
                </div>

                <Accordion allowMultiple className="space-y-4">
                    {/* Image Gallery Section */}
                    <Accordion.Item id="gallery">
                        <Accordion.Trigger className="bg-rose-50 hover:bg-rose-100">
                            Image Gallery Layout
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-rose-50/50">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                                {[1, 2, 3].map((id) => (
                                    <div key={id} className="relative aspect-square rounded-lg overflow-hidden bg-rose-100">
                                        <Image
                                            src={`https://picsum.photos/400?random=${id}`}
                                            alt={`Gallery image ${id}`}
                                            fill
                                            className="object-cover hover:scale-110 transition-transform"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>

                    {/* Table Section */}
                    <Accordion.Item id="table">
                        <Accordion.Trigger className="bg-cyan-50 hover:bg-cyan-100">
                            Data Table Layout
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-cyan-50/50">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-cyan-200">
                                    <thead className="bg-cyan-100">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-cyan-700 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-cyan-700 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-cyan-700 uppercase tracking-wider">Role</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-cyan-100">
                                        {[
                                            { name: "John Doe", status: "Active", role: "Developer" },
                                            { name: "Jane Smith", status: "Away", role: "Designer" },
                                            { name: "Mike Johnson", status: "Offline", role: "Manager" },
                                        ].map((person, idx) => (
                                            <tr key={idx} className="hover:bg-cyan-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{person.status}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{person.role}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>

                    {/* Interactive Elements */}
                    <Accordion.Item id="interactive">
                        <Accordion.Trigger className="bg-violet-50 hover:bg-violet-100">
                            Interactive Elements
                        </Accordion.Trigger>
                        <Accordion.Content className="bg-violet-50/50">
                            <div className="space-y-4 p-4">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                                    <input type="checkbox" className="w-4 h-4 text-violet-600" />
                                    <div className="flex-1">
                                        <label className="text-sm font-medium text-gray-900">Enable notifications</label>
                                        <p className="text-sm text-gray-600">Receive updates about new features</p>
                                    </div>
                                    <button className="px-3 py-1 bg-violet-100 text-violet-700 rounded hover:bg-violet-200">
                                        Settings
                                    </button>
                                </div>

                                <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                                    <div className="space-y-2 flex-1">
                                        <label className="block text-sm font-medium text-gray-900">
                                            Feedback
                                        </label>
                                        <textarea 
                                            className="w-full p-2 border border-violet-200 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                            rows={3}
                                            placeholder="Share your thoughts..."
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button className="px-4 py-2 bg-white text-violet-700 rounded border border-violet-200 hover:bg-violet-50">
                                        Cancel
                                    </button>
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default RichContentAccordion; 