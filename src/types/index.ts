/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export type navbarProp = {
    name: string;
    link: string;
};

export interface featureProp {
    icon: JSX.Element;
    title: string;
    description: string;
}

export type testimonialsProp = {
    rating: number;
    text: string;
    author: string;
    brandImg?: string;
};

type Link = {
    href: string;
    label: string;
};

export type footerProp = {
    title: string;
    links: Link[];
};
