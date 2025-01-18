"use client";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const BackToHomeButton = () => {
    const pathname = usePathname();

    if (pathname === "/") return null;

    return (
        <Link
            href="/"
            className="fixed top-4 left-4 inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 z-50"
        >
            <HomeIcon className="w-4 h-4" />
            Back to Home
        </Link>
    );
};

export default BackToHomeButton;
