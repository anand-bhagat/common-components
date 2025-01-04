import { useState, useEffect } from "react";

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertOptions {
    type?: AlertType;
    title?: string;
    children?: React.ReactNode | string;
    confirmText?: string;
    cancelText?: string;
    showCancelButton?: boolean;
    onConfirm?: () => void | Promise<void>;
    onCancel?: () => void | Promise<void>;
}

interface AlertInterface extends AlertOptions {
    id: string;
    isOpen: boolean;
}

// Create a singleton store
class AlertStore {
    private static instance: AlertStore;
    private listeners: ((alert: AlertInterface | null) => void)[] = [];
    private currentAlert: AlertInterface | null = null;
    private resolvePromise: ((value: boolean) => void) | null = null;

    private constructor() {}

    static getInstance(): AlertStore {
        if (!AlertStore.instance) {
            AlertStore.instance = new AlertStore();
        }
        return AlertStore.instance;
    }

    subscribe(listener: (alert: AlertInterface | null) => void) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    getCurrentAlert() {
        return this.currentAlert;
    }

    showAlert(options: AlertOptions): Promise<boolean> {
        const id = Math.random().toString(36).substring(2, 9);
        this.currentAlert = {
            id,
            isOpen: true,
            confirmText: "Confirm",
            cancelText: "Cancel",
            showCancelButton: true,
            type: "info",
            ...options,
        };
        this.emit();

        return new Promise((resolve) => {
            this.resolvePromise = resolve;
        });
    }

    hideAlert(result: boolean) {
        if (this.currentAlert?.onConfirm && result) {
            Promise.resolve(this.currentAlert.onConfirm());
        }
        if (this.currentAlert?.onCancel && !result) {
            Promise.resolve(this.currentAlert.onCancel());
        }
        
        this.resolvePromise?.(result);
        this.currentAlert = null;
        this.emit();
    }

    private emit() {
        this.listeners.forEach(listener => listener(this.currentAlert));
    }
}

const alertStore = AlertStore.getInstance();

export function useAlert() {
    const [currentAlert, setCurrentAlert] = useState<AlertInterface | null>(alertStore.getCurrentAlert());

    useEffect(() => {
        return alertStore.subscribe(setCurrentAlert);
    }, []);

    const showAlert = (options: AlertOptions) => {
        return alertStore.showAlert(options);
    };

    const hideAlert = (result: boolean) => {
        alertStore.hideAlert(result);
    };

    return { showAlert, hideAlert, currentAlert };
} 