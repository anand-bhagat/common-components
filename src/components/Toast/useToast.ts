import { useState, useEffect } from "react";

export type ToastPosition =
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastOptions {
    type?: ToastType;
    title?: string;
    message: string;
    duration?: number;
    position?: ToastPosition;
    showProgressBar?: boolean;
    showCloseButton?: boolean;
    onClose?: () => void;
}

interface ToastInterface extends ToastOptions {
    id: string;
    createdAt: number;
}

// Create a singleton store
class ToastStore {
    private static instance: ToastStore;
    private listeners: ((toasts: ToastInterface[]) => void)[] = [];
    private toasts: ToastInterface[] = [];

    private constructor() { }

    static getInstance(): ToastStore {
        if (!ToastStore.instance) {
            ToastStore.instance = new ToastStore();
        }
        return ToastStore.instance;
    }

    subscribe(listener: (toasts: ToastInterface[]) => void) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    getToasts() {
        return this.toasts;
    }

    addToast(toast: ToastInterface) {
        this.toasts = [...this.toasts, toast];
        this.emit();
    }

    removeToast(id: string) {
        this.toasts = this.toasts.filter(t => t.id !== id);
        this.emit();
    }

    private emit() {
        this.listeners.forEach(listener => listener(this.toasts));
    }
}

const toastStore = ToastStore.getInstance();

export function useToast() {
    const [toasts, setToasts] = useState<ToastInterface[]>(toastStore.getToasts());

    useEffect(() => {
        return toastStore.subscribe(setToasts);
    }, []);

    const showToast = (options: ToastOptions) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast: ToastInterface = {
            id,
            createdAt: Date.now(),
            duration: 5000,
            position: "top-right",
            showProgressBar: true,
            showCloseButton: true,
            type: "info",
            ...options,
        };

        toastStore.addToast(newToast);

        if (newToast.duration !== Infinity) {
            setTimeout(() => {
                hideToast(id);
            }, newToast.duration);
        }
    };

    const hideToast = (id: string) => {
        toastStore.removeToast(id);
    };

    return { showToast, hideToast, toasts };
}