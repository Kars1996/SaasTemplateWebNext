import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Body from "@/modules/Body/Body";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

import Console from "@/modules/Console/Console";
import { newMeta } from "@/modules/meta";
import AOS from "@/lib/Aos/aos";
import Navbar from "@/components/Global/Navbar/Navbar"
import Footer from "@/components/Global/Footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Saas Template",
    description: "Easy Scalable template for your Saas Needs.",
    // keywords: [],
    openGraph: {
        images: [
            {
                url: "https://cdn3.kars.bio/assets/banner.png",
                width: 800,
                height: 800,
                alt: "Banner",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head
                dangerouslySetInnerHTML={{
                    __html: "<!-- Made by Kars 💘 -->",
                }} /* I'd appreciate it if you don't remove credits <3 */
            />
            <Body className={`${inter.className} __kars`}>
                <main className="_kars">
                    <AOS />
                    <Navbar />
                    {children}
                    <Footer />
                </main>
                <Console />
                {/* I'd appreciate it if you don't remove credits <3 */}
            </Body>
        </html>
    );
}
