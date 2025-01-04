import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://common-components.anandbhagat.com"),
    title: {
        default: "React Component Library | Common Components by Anand Bhagat",
        template: "%s | React Components by Anand Bhagat",
    },
    description: "Explore a collection of production-ready React components built with Next.js, Tailwind CSS, and TypeScript. Featuring reusable UI components with modern design patterns and best practices.",
    keywords: [
        "React Components",
        "Next.js Components",
        "UI Component Library",
        "Tailwind Components",
        "TypeScript Components",
        "React UI Library",
        "Frontend Components",
        "Modern UI Components",
        "Anand Bhagat",
        "Web Development",
        "Frontend Development",
        "React Development"
    ],
    authors: [
        { 
            name: "Anand Bhagat",
            url: "https://anandbhagat.com"
        }
    ],
    creator: "Anand Bhagat",
    publisher: "Anand Bhagat",
    formatDetection: {
        email: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://common-components.anandbhagat.com",
        siteName: "Common Components by Anand Bhagat",
        title: "React Component Library | Modern UI Components",
        description: "Production-ready React components built with Next.js and Tailwind CSS. Explore a collection of reusable UI components featuring modern design patterns and development practices.",
        // images: [
        //     {
        //         url: "/og-image.jpg",
        //         width: 1200,
        //         height: 630,
        //         alt: "Common Components Preview - React UI Library by Anand Bhagat"
        //     }
        // ]
    },
    twitter: {
        card: "summary_large_image",
        site: "@anandnbhagat",
        creator: "@anandnbhagat",
        title: "React Component Library | Modern UI Components",
        description: "Discover production-ready React components built with Next.js and Tailwind CSS. Part of Anand Bhagat's professional portfolio.",
        // images: ["/og-image.jpg"]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: "https://common-components.anandbhagat.com",
    },
    referrer: "origin-when-cross-origin",
    category: "Technology"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
