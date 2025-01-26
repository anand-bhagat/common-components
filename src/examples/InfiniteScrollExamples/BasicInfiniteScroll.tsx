"use client";

import React, { useState, useCallback, useRef } from "react";
import { InfiniteScroll } from "@/components/InfiniteScroll";

const generateItems = (start: number, end: number) => {
    return Array.from({ length: end - start }, (_, index) => ({
        id: start + index,
        title: `Item ${start + index}`,
    }));
};

const ITEMS_PER_PAGE = 20;
const MAX_ITEMS = 100;

const BasicInfiniteScroll = () => {
    const [items, setItems] = useState(() => generateItems(0, ITEMS_PER_PAGE));
    const [isLoading, setIsLoading] = useState(false);
    const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const loadMore = useCallback(() => {
        if (isLoading || items.length >= MAX_ITEMS) return;
        
        setIsLoading(true);

        // Clear any existing timeout
        if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
        }

        loadingTimeoutRef.current = setTimeout(() => {
            const nextItems = generateItems(items.length, items.length + ITEMS_PER_PAGE);
            setItems(prev => [...prev, ...nextItems]);
            setIsLoading(false);
            loadingTimeoutRef.current = null;
        }, 1000); // Simulate network delay
    }, [isLoading, items.length]);

    // Cleanup on unmount
    React.useEffect(() => {
        return () => {
            if (loadingTimeoutRef.current) {
                clearTimeout(loadingTimeoutRef.current);
            }
        };
    }, []);

    const hasMore = items.length < MAX_ITEMS;

    return (
        <div className="h-[400px] border border-gray-200 rounded-lg">
            <InfiniteScroll 
                onLoadMore={loadMore} 
                hasMore={hasMore}
                isLoading={isLoading}
                debounceMs={300}
            >
                <InfiniteScroll.Content>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 border-b border-gray-200 hover:bg-gray-50"
                        >
                            {item.title}
                        </div>
                    ))}
                </InfiniteScroll.Content>
                <InfiniteScroll.Loader>
                    <div className="flex justify-center p-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
                    </div>
                </InfiniteScroll.Loader>
            </InfiniteScroll>
        </div>
    );
};

export default BasicInfiniteScroll;
