import type { footerProp } from "@/types";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    const Footer: footerProp[] = [
        {
            title: "All pages",
            links: [
                { href: "/", label: "Home" },
                { href: "/faq", label: "FAQ" },
                { href: "/terms", label: "Terms" },
                { href: "/privacy", label: "Privacy" },
                { href: "/signup", label: "Sign up" },
                { href: "/signin", label: "Sign In" },
            ],
        },
        {
            title: "Resources",
            links: [
                {
                    href: "https://github.com/kars1996",
                    label: "GitHub repo",
                },
            ],
        },
        {
            title: "More",
            links: [{ href: "https://kars.bio/", label: "Kars Developer" }],
        },
    ];
    return (
        <>
            <footer className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-x-8 gap-y-24 pt-4 border-t border-black/5">
                    <a
                        href="/"
                        className="xl:col-span-1 text-black inline-flex items-center gap-3"
                    >
                        <span className="font-bold font-display">kSaas</span>
                    </a>
                    <div className="md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8 text-sm text-gray-400 lg:col-span-3">
                        {Footer.map((section, index) => (
                            <div
                                key={index}
                                className={index > 0 ? "mt-12 md:mt-0" : ""}
                            >
                                <h3 className="text-lg text-black font-medium tracking-tight">
                                    {section.title}
                                </h3>
                                <ul role="list" className="mt-4 space-y-1">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="hover:text-black"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
            <footer className="bg-white">
                <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-6">
                    <div className="border-t pt-6">
                        <p className="text-sm text-neutral-600 lg:col-span-2">
                            © 2024 Kars This website was built with Nextjs &amp;
                            Tailwind. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
