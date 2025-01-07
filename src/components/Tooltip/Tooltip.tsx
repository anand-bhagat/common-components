import React, { createContext, useContext } from "react";
import { twMerge } from "tailwind-merge";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipContextValue {
    position: TooltipPosition;
}

const TooltipContext = createContext<TooltipContextValue>({
    position: "top",
});

interface TooltipRootProps {
    children: React.ReactNode;
    className?: string;
    position?: TooltipPosition;
    as?: React.ElementType;
    props?: React.ComponentProps<React.ElementType>;
}

const positionStyles: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
};

const arrowStyles: Record<TooltipPosition, string> = {
    top: "bottom-[-8px] left-1/2 -translate-x-1/2 border-t-8 border-x-8 border-b-0 border-t-gray-700 border-x-transparent",
    bottom: "top-[-8px] left-1/2 -translate-x-1/2 border-b-8 border-x-8 border-t-0 border-b-gray-700 border-x-transparent",
    left: "right-[-8px] top-1/2 -translate-y-1/2 border-l-8 border-y-8 border-r-0 border-l-gray-700 border-y-transparent",
    right: "left-[-8px] top-1/2 -translate-y-1/2 border-r-8 border-y-8 border-l-0 border-r-gray-700 border-y-transparent",
};

const Tooltip = ({
    children,
    className,
    as: Component = "button",
    position = "top",
    props = {},

}: TooltipRootProps) => {
    return (
        <TooltipContext.Provider value={{ position }}>
            <Component className={twMerge("relative inline-block group", className)} {...props}>
                {children}
            </Component>
        </TooltipContext.Provider>
    );
};

const Content = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
    position?: TooltipPosition;
}) => {
    const { position } = useContext(TooltipContext);

    return (
        <div
            className={twMerge(
                "absolute z-50 px-3 py-2 text-sm text-white bg-gray-700 rounded-lg",
                "invisible opacity-0 group-hover:visible group-hover:opacity-100",
                "transition-all duration-200",
                positionStyles[position],
                className
            )}
        >
            {children}
        </div>
    );
};

const Arrow = ({
    className,
    color,
}: {
    className?: string;
    position?: TooltipPosition;
    color?: string;
}) => {
    const { position } = useContext(TooltipContext);

    return (
        <div
            className={twMerge(
                "absolute w-0 h-0",
                "border-solid",
                arrowStyles?.[position] || "",
                color,
                className
            )}
        />
    );
};

Tooltip.Content = Content;
Tooltip.Arrow = Arrow;

export default Tooltip;
