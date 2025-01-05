import { useCallback, useRef, useState } from "react";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const resolveRef = useRef<() => void>(undefined);

    const showModal = useCallback(() => {
        setIsOpen(true);
        return new Promise<void>((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);

    const hideModal = useCallback(() => {
        setIsOpen(false);
        resolveRef.current?.();
        return Promise.resolve();
    }, []);

    return {
        isOpen,
        showModal,
        hideModal
    };
} 