import React from "react";
import BasicInfiniteScroll from "./BasicInfiniteScroll";
import ChatInfiniteScroll from "./ChatInfiniteScroll";

const InfiniteScrollExamples = () => {
    return (
        <div className="grid gap-8">
            <section className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold"> Basic Usage </h2>
                <p className="text-gray-600">
                    A simple infinite scroll implementation that loads more
                    items as you scroll down. Perfect for content feeds, product
                    listings, and search results.
                </p>
                <BasicInfiniteScroll />
            </section>

            <section className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold"> Chat Example </h2>
                <p className="text-gray-600">
                    A chat - like implementation that loads older messages as
                    you scroll up. Ideal for messaging interfaces, conversation
                    threads, and activity logs.
                </p>
                <ChatInfiniteScroll />
            </section>
        </div>
    );
};

export default InfiniteScrollExamples;
