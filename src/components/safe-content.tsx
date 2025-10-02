"use client";

import type { ComponentProps } from "react";

import { decodeHtmlEntities } from "@/lib/utils";

interface SafeContentProps extends Omit<ComponentProps<"span">, "dangerouslySetInnerHTML"> {
    html: string;
    className?: string;
}
const SafeContent = ({ className, html }: SafeContentProps) => {
    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(html) }}
        />
    );
};

export default SafeContent;
