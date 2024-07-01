import { FaShieldAlt, FaKeyboard, FaPaintBrush, FaRocket } from 'react-icons/fa';

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    return (
        <section>
            <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12">
                <div className="grid grid-cols-1 gap-4 mt-6 items-center list-none lg:grid-cols-2 lg:gap-24">
                    <div className="text-center lg:text-left">
                        <div>
                            <p className="text-4xl tracking-tight font-medium text-black md:text-5xl font-display">
                                Multilayered security
                            </p>
                            <p className="text-base mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                                pulvinar facilisis justo mollis, auctor consequat urna.
                            </p>
                        </div>
                    </div>
                    <div className="lg:mt-0 mt-12 h-full hidden lg:block rounded-3xl overflow-hidden border">
                        <div className="bg-gray-100 p-8 rounded-2xl overflow-hidden">
                            <img
                                alt="Lexingtøn thumbnail"
                                className="border lg:rounded-3xl object-cover rounded shadow-2xl"
                                src="/assets/dashv2.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-24 w-full gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-3">
                    <div>
                        <div className="gap-3 lg:inline-flex lg:items-center">
                            <div className="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10">
                                <FaKeyboard className="h-5 w-5 bg-transparent" />
                            </div>
                            <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                                Developer experience
                            </p>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                            pulvinar facilisis justo mollis, auctor consequat urna.
                        </p>
                    </div>
                    <div>
                        <div className="gap-3 lg:inline-flex lg:items-center">
                            <div className="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10">
                                <FaPaintBrush className="h-5 w-5 bg-transparent" />
                            </div>
                            <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                                Designers go-to app
                            </p>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                            pulvinar facilisis justo mollis, auctor consequat urna.
                        </p>
                    </div>
                    <div>
                        <div className="gap-3 lg:inline-flex lg:items-center">
                            <div className="items-center justify-center text-accent-500 bg-gray-100 rounded-xl flex h-10 w-10">
                                <FaRocket className="h-5 w-5 bg-transparent" />
                            </div>
                            <p className="mt-4 text-lg font-semibold leading-6 text-black font-display lg:mt-0">
                                Easy onboarding
                            </p>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                            pulvinar facilisis justo mollis, auctor consequat urna.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}