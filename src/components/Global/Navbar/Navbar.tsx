"use client";
import type { navbarProp } from "@/types";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const path = usePathname();

    const navItems: navbarProp[] = [
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
        {
            name: "FAQ",
            link: "/faq",
        },
    ];

    useEffect(() => {
        function update() {
            setIsScrolled(window.scrollY > 30);
        }
        window.addEventListener("scroll", update);
        update();
        return () => {
            window.removeEventListener("scroll", update);
        };
    }, []);

    return (
        <section
            className={`bg-white fixed top-0 w-full z-40 ${
                isScrolled ? "shadow-md border-b border-black/5" : ""
            }`}
        >
            <div className="w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16">
                <div className="relative flex flex-col w-full py-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6">
                    <div className="flex flex-row items-center justify-between lg:justify-start">
                        <Link
                            href="/"
                            className="text-black inline-flex items-center gap-3"
                        >
                            <span className="font-bold font-display">
                                kSaas
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
                        >
                            <svg
                                className="w-6 h-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        isOpen ? "hidden" : "inline-flex"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                                <path
                                    className={
                                        isOpen ? "inline-flex" : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } flex-col items-center jutify-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row`}
                    >   <div className="items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`px-2 lg:px-6 py-2 md:px-3 text-sm font-medium ${
                                    path === item.link
                                        ? `text-accent-200`
                                        : `text-black`
                                } hover:text-accent-400`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        </div>
                        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                            <Link
                                href="/signup"
                                className="block px-4 py-2 mt-2 text-sm font-medium text-black md:mt-0 hover:text-accent-400 focus:outline-none focus:shadow-outline"
                            >
                                Sign up
                            </Link>
                            <Link
                                href="/login"
                                className="inline-flex items-center h-8 justify-center px-4 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-50 active:bg-gray-200 active:text-accent-400 focus-visible:outline-black"
                            >
                                Log in
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}
