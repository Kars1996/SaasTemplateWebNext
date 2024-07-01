/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    return (
        <>
            <section>
                <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
                    <div>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="sm:flex sm:justify-center">
                                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    <a className="font-semibold text-accent-600 cursor-pointer">
                                        <span className="block lg:inline text-accent-600">
                                            First round of funding compelted{" "}
                                            <span
                                                aria-hidden="true"
                                                className="text-accent-600"
                                            >
                                                &rarr;
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <p className="text-4xl tracking-tight font-medium text-black md:text-5xl font-display mt-8">
                                Lorem Ispum Excepteur occaecat mollit dolore
                                exercitation amet.
                            </p>
                            <p className="text-gray-500 lg:text-xl max-w-2xl mt-4 mx-auto text-base">
                                Consectetur id adipisicing elit cupidatat ut
                                velit velit aliqua proident. Minim non
                                adipisicing mollit in dolor magna eu magna sit.
                            </p>
                        </div>
                        <div className="flex justify-center gap-3 mt-10 flex-col sm:flex-row">
                            <a
                                className="items-center justify-center h-12 font-medium rounded-xl focus-visible:outline-black focus:outline-none inline-flex duration-200 text-black lg:w-auto px-6 py-3 text-center text-black/80 w-full border"
                                href="https://github.com/kars1996"
                            >
                                GitHub
                            </a>
                            <a
                                className="items-center justify-center h-12 font-medium rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black lg:w-auto px-6 py-3 text-center text-white w-full"
                                href="https://kars.bio"
                            >
                                More from me &nbsp; &rarr;
                            </a>
                        </div>
                        <dl className="lg:gap-x-8 lg:grid-cols-3 max-w-4xl mt-8 mx-auto sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-6 text-center text-sm items-start">
                            <div className="text-gray-500">
                                <strong className="text-gray-700">
                                    Lorem Ispum
                                </strong>{" "}
                                ━ Cupidatat adipisicing consequat tempor dolore
                                minim ad.
                            </div>
                            <div className="text-gray-500">
                                <strong className="text-gray-700">
                                    Lorem Ispum
                                </strong>{" "}
                                ━ Cupidatat adipisicing consequat tempor dolore
                                minim ad.
                            </div>
                            <div className="text-gray-500">
                                <strong className="text-gray-700">
                                    Lorem Ispum
                                </strong>{" "}
                                ━ Cupidatat adipisicing consequat tempor dolore
                                minim ad.
                            </div>
                        </dl>
                    </div>
                    <div className="relative w-full mx-auto max-w-7xl items-center py-12 pb-12">
                        <div className="bg-gray-100 p-8 rounded-3xl">
                            <img
                                alt="#_"
                                className="relative w-full border lg:rounded-2xl object-cover rounded shadow-2xl"
                                src="/assets/dashv2.png"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5 lg:mt-8 md:grid-cols-6 mt-6">
                        <div className="flex justify-center col-span-1 ">
                            <img
                                alt="logo"
                                className="h-8"
                                src="/assets/Figma.svg"
                            />
                        </div>
                        <div className="flex justify-center col-span-1 ">
                            <img
                                alt="logo"
                                className="h-8"
                                src="/assets/Canva.svg"
                            />
                        </div>
                        <div className="flex justify-center col-span-1 ">
                            <img
                                alt="logo"
                                className="h-8"
                                src="/assets/Stripe.svg"
                            />
                        </div>
                        <div className="flex justify-center col-span-1 ">
                            <img
                                alt="logo"
                                className="h-8"
                                src="/assets/Gitlab.svg"
                            />
                        </div>
                        <div className="flex justify-center col-span-1 ">
                            <img
                                alt="logo"
                                className="h-8"
                                src="/assets/Linear.svg"
                            />
                        </div>
                        <div className="flex justify-center col-span-1 ">
                            <img
                                alt="logo"
                                className="h-8"
                                src="/assets/Gumroad.svg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
