import { FaStar } from "react-icons/fa";
import type { testimonialsProp } from "@/types";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    const testimonials: testimonialsProp[] = [
        {
            rating: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Lorem Ipsum",
            brandImg: "/assets/brands/Attentive.svg",
        },
        {
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Lorem Ipsum",
            brandImg: "/assets/brands/Coinbase.svg",
        },
        {
            rating: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Lorem Ipsum",
            brandImg: "/assets/brands/Figma.svg",
        },
    ];
    return (
        <section>
            <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
                <div>
                    <p className="text-4xl tracking-tight font-medium text-black md:text-5xl font-display">
                        Discover the experiences and{" "}
                        <span className="sm:block">
                            feedback from satisfied customers
                        </span>
                    </p>
                </div>
                <ul className="mt-12 lg:mt-24 grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <li key={index}>
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-x-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar
                                                key={i}
                                                className={
                                                    i < testimonial.rating
                                                        ? "text-accent-500"
                                                        : "text-gray-300"
                                                }
                                            />
                                        ))}
                                    </div>
                                    <p className="lg:text-sm text-gray-500 mt-4">
                                        {testimonial.text}
                                    </p>
                                </div>
                                <footer className="mt-8">
                                    <p className="lg:text-sm text-gray-500 font-display">
                                        {testimonial.author}
                                    </p>
                                </footer>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
