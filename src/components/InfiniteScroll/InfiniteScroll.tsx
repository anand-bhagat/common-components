"use client";

import React, {
    useCallback,
    useEffect,
    useRef,
    createContext,
    useContext,
} from "react";

interface InfiniteScrollContextType {
    isLoading: boolean;
    hasMore: boolean;
    onLoadMore: () => void;
    direction: "top" | "bottom";
}

const InfiniteScrollContext = createContext<
    InfiniteScrollContextType | undefined
>(undefined);

interface InfiniteScrollProps {
    children: React.ReactNode;
    onLoadMore: () => void;
    hasMore: boolean;
    isLoading: boolean;
    threshold?: number;
    className?: string;
    direction?: "top" | "bottom";
    debounceMs?: number;
}

interface InfiniteScrollContentProps {
    children: React.ReactNode;
    className?: string;
}

interface InfiniteScrollLoaderProps {
    children?: React.ReactNode;
    className?: string;
}

const DefaultLoader = () => (
    <div className="flex justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
    </div>
);

const InfiniteScroll = ({
    children,
    onLoadMore,
    hasMore,
    isLoading,
    threshold = 300,
    className,
    direction = "bottom",
    debounceMs = 200,
}: InfiniteScrollProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const prevScrollHeightRef = useRef<number>(0);
    const lastScrollTimeRef = useRef<number>(0);

    const handleScroll = useCallback(() => {
        const now = Date.now();
        if (now - lastScrollTimeRef.current < debounceMs) return;
        lastScrollTimeRef.current = now;

        const container = containerRef.current;
        if (!container || isLoading || !hasMore) return;

        const { scrollTop, scrollHeight, clientHeight } = container;
        const scrolledPosition = direction === "bottom"
            ? scrollHeight - scrollTop - clientHeight
            : scrollTop;
        
        const shouldLoadMore = direction === "bottom"
            ? scrolledPosition <= threshold
            : scrolledPosition <= threshold;

        if (shouldLoadMore) {
            onLoadMore();
        }
    }, [direction, hasMore, isLoading, onLoadMore, threshold, debounceMs]);

    // Maintain scroll position when loading more items at the top
    useEffect(() => {
        if (direction === "top" && containerRef.current) {
            const container = containerRef.current;
            const scrollHeightDiff = container.scrollHeight - prevScrollHeightRef.current;
            if (scrollHeightDiff > 0) {
                container.scrollTop = scrollHeightDiff;
            }
            prevScrollHeightRef.current = container.scrollHeight;
        }
    }, [hasMore, direction]);

    // Set up scroll listener and initial check
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initialize prevScrollHeight for top loading
        if (direction === "top") {
            prevScrollHeightRef.current = container.scrollHeight;
        }

        // Add scroll listener
        container.addEventListener("scroll", handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll, direction]);

    // Scroll to bottom initially if direction is top (chat-like behavior)
    useEffect(() => {
        if (direction === "top" && containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [direction]);

    return (
        <InfiniteScrollContext.Provider
            value={{ isLoading, hasMore, onLoadMore, direction }}
        >
            <div
                ref={containerRef}
                className={`overflow-auto h-full ${className || ""}`}
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {children}
            </div>
        </InfiniteScrollContext.Provider>
    );
};

const Content = ({ children, className }: InfiniteScrollContentProps) => {
    return <div className={className}>{children}</div>;
};

const Loader = ({ children, className }: InfiniteScrollLoaderProps) => {
    const context = useContext(InfiniteScrollContext);

    if (!context) {
        throw new Error("Loader must be used within InfiniteScroll");
    }

    if (!context.isLoading || !context.hasMore) return null;

    return (
        <div className={`w-full ${className || ""}`}>
            {children || <DefaultLoader />}
        </div>
    );
};

InfiniteScroll.Content = Content;
InfiniteScroll.Loader = Loader;

export default InfiniteScroll;
