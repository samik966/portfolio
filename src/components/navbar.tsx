"use client";

import Link from "next/link";
import { ComponentProps, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useContent } from "@/providers/ContentProvider";

const Navbar = ({ ...rest }: ComponentProps<"nav">) => {
    const { sections } = useContent();
    const [activeSection, setActiveSection] = useState("");
    const observers = useRef({} as Record<string, IntersectionObserver>);
    useEffect(() => {
        const sectionElements = Array.from(document.querySelectorAll("section"));
        const observerMap: Record<string, IntersectionObserver> = {};

        const handleIntersect = (key: string) => (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(key);
                }
            });
        };

        sectionElements.forEach((element) => {
            const key = element.id;
            if (!key) return;

            // Disconnect previous observer if exists
            observers.current[key]?.disconnect();

            const threshold = Math.min(1, (window.innerHeight / element.clientHeight) * 0.5);
            const observer = new IntersectionObserver(handleIntersect(key), { threshold });
            observer.observe(element);
            observerMap[key] = observer;
        });

        // Cleanup observers on unmount
        return () => {
            Object.values(observerMap).forEach((observer) => observer.disconnect());
        };
    }, []);
    return (
        <nav {...rest}>
            {Object.keys(sections).map((objKey) => {
                const isActive = objKey === activeSection;
                const { heading } = sections[objKey as keyof typeof sections];
                return (
                    <div
                        key={heading.title}
                        className="flex flex-col items-center transition-all md:flex-row md:gap-4"
                    >
                        <div
                            className={cn(
                                "bg-primary hidden h-px w-10 rounded-full transition-[height,width] md:block",
                                isActive ? "h-[2px] w-20" : "",
                            )}
                        />
                        <Link
                            href={`#${objKey}`}
                            className={cn(
                                "hover:text-primary uppercase transition-[border]",
                                isActive
                                    ? "max-md:border-primary border-transparent font-bold max-md:border-b-2"
                                    : "",
                            )}
                        >
                            {heading.title}
                        </Link>
                    </div>
                );
            })}
        </nav>
    );
};

export default Navbar;
