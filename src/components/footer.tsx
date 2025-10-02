"use client";

import { ComponentProps } from "react";

import { useContent } from "@/providers/ContentProvider";

import Description from "@/components/description";

const Footer = (props: ComponentProps<"footer">) => {
    const { footer } = useContent();
    return (
        <footer className="flex items-center gap-1 max-md:flex-col" {...props}>
            &copy; 2024 {footer.title}.
            <Description content={footer.description} />
        </footer>
    );
};

export default Footer;
