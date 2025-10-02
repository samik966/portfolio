"use client";

import Link from "next/link";
import { ComponentProps } from "react";

import { useContent } from "@/providers/ContentProvider";

import { IconType, Icons } from "@/components/icons";

type SocialProps = {
    social: {
        url: string;
        text: string;
        icon: string;
        show: boolean;
    };
};

const Social = ({ social }: SocialProps) => {
    const icon = social.icon as IconType;
    const Icon = Icons[icon];
    return (
        <Link
            href={social.url}
            target="_blank"
            title={social.text}
            className="hover:bg-primary/30 hover:text-primary rounded-full p-2 transition hover:opacity-80"
        >
            <Icon className="size-6" />
        </Link>
    );
};

const Socials = ({ className, ...rest }: ComponentProps<"section">) => {
    const { socials } = useContent();
    return (
        <section className={className} {...rest}>
            {socials.map((social) => {
                return social.show && <Social key={social.text} social={social} />;
            })}
        </section>
    );
};

export default Socials;
