import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
        window.location.hash = `#${id}`;
    }
};

export function decodeHtmlEntities(text: string) {
    const entities = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&apos;": "'",
    };
    return text.replace(
        /&amp;|&lt;|&gt;|&quot;|&#39;|&apos;/g,
        (match) => entities[match as keyof typeof entities],
    );
}
