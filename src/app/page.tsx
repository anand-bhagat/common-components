import Link from "next/link";

interface ComponentCard {
    title: string;
    description: string;
    href: string;
}

const components: ComponentCard[] = [
    {
        title: "Alert Dialog",
        description: "Animated alert dialogs with GIF icons, customizable actions, and backdrop blur effects",
        href: "/alerts",
    },
    {
        title: "Toast",
        description: "Position-based toasts with progress bars, custom durations, and smooth animations",
        href: "/toasts",
    },
    {
        title: "Modal",
        description: "Flexible modals with header, body, and footer components, featuring backdrop animations",
        href: "/modal",
    },
    {
        title: "Tooltip",
        description: "Multi-directional tooltips with rich content support and customizable arrow positions",
        href: "/tooltip",
    },
    {
        title: "Accordion",
        description: "Feature-rich accordions with animations, nested content, and multiple expansion modes",
        href: "/accordion",
    },
    {
        title: "Tabs",
        description: "Accessible tabs with URL sync, vertical layouts, and animated transitions using Framer Motion",
        href: "/tabs",
    },
    {
        title: "Infinite Scroll",
        description: "An infinite scroll component that loads more items as you scroll down",
        href: "/infinite-scroll",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen p-8 bg-background">
            <main className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">
                        Common Components
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A collection of reusable React components built with
                        Next.js, Tailwind CSS, and TypeScript.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group">
                    {components.map((component) => (
                        <Link
                            key={component.title}
                            href={component.href}
                            className="block transition-all duration-300 rounded-xl 
                                     bg-white p-6 
                                     border border-gray-200
                                     hover:scale-105 hover:shadow-xl
                                     group-hover:blur-[2px] hover:!blur-none"
                        >
                            <h2 className="text-xl font-semibold mb-3 text-gray-900">
                                {component.title}
                            </h2>
                            <p className="text-gray-600 text-sm">
                                {component.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {components.length === 0 && (
                    <div className="text-center text-gray-500 py-20">
                        <p>No components available yet. Check back soon!</p>
                    </div>
                )}
            </main>
        </div>
    );
}

