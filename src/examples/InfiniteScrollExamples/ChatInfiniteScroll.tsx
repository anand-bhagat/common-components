"use client";

import { InfiniteScroll } from "@/components/InfiniteScroll";
import React, { useState } from "react";

interface Message {
    id: number;
    text: string;
    sender: "user" | "other";
    timestamp: string;
}

const generateMessages = (start: number, count: number): Message[] => {
    return Array.from({ length: count }, (_, index) => ({
        id: start + index,
        text: `Message ${start + index}`,
        sender:
            (start + index) % 2 === 0 ? ("user" as const) : ("other" as const),
        timestamp: new Date(
            Date.now() - (start + index) * 60000
        ).toLocaleTimeString(),
    })).reverse(); // Reverse to simulate older messages being loaded
};

const ChatInfiniteScroll = () => {
    const [messages, setMessages] = useState(() => generateMessages(0, 20));
    const [isLoading, setIsLoading] = useState(false);
    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            const nextMessages = generateMessages(messages.length, 20);
            setMessages((prev) => [...nextMessages, ...prev]); // Prepend older messages
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="h-[500px] border border-gray-200 rounded-lg bg-gray-50">
            <InfiniteScroll
                isLoading={isLoading}
                onLoadMore={loadMore}
                hasMore={messages.length < 100}
                direction="top"
            >
                <InfiniteScroll.Loader />
                <InfiniteScroll.Content className="p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${
                                message.sender === "user"
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >
                            <div
                                className={`
                  max-w-[70%] rounded-lg p-3 
                  ${
                      message.sender === "user"
                          ? "bg-blue-500 text-white ml-auto"
                          : "bg-white text-gray-900"
                  }
                `}
                            >
                                <p>{message.text}</p>
                                <p
                                    className={`text-xs mt-1 ${
                                        message.sender === "user"
                                            ? "text-blue-100"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {message.timestamp}
                                </p>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll.Content>
            </InfiniteScroll>
        </div>
    );
};

export default ChatInfiniteScroll;
