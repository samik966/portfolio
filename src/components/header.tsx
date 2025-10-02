"use client";

import Image from "next/image";
import { ComponentProps } from "react";

import { useContent } from "@/providers/ContentProvider";

const Header = (prop: ComponentProps<"header">) => {
    const { header, logo } = useContent();
    return (
        <header {...prop}>
            <div className="space-y-3">
                <div className="w-full max-w-72">
                    <Image
                        priority
                        src={logo}
                        width={1024}
                        height={1024}
                        alt="logo"
                        className="max-w-full object-contain dark:invert"
                    />
                </div>
                <h1 className="mt-3 text-xl font-medium text-foreground">{header.role}</h1>
                <p className="max-w-[320px] text-muted-foreground">{header.tagline}</p>
            </div>
        </header>
    );
};

export default Header;
