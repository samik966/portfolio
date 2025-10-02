import { SVGProps } from "react";

import { cn } from "@/lib/utils";

export interface IconsProps extends Partial<SVGProps<SVGSVGElement>> {
    size?: string | number;
}

export type IconType = keyof typeof Icons;

const defaultProps: Partial<SVGProps<SVGSVGElement>> = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg",
};

export const Icons = {
    facebook: ({ className, ...props }: IconsProps) => (
        <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} {...defaultProps} {...props}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    ),
    twitter: ({ className, ...props }: IconsProps) => (
        <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} {...defaultProps} {...props}>
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    ),
    linkedin: ({ className, ...props }: IconsProps) => (
        <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} {...defaultProps} {...props}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
    instagram: ({ className, ...props }: IconsProps) => (
        <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} {...defaultProps} {...props}>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    ),
    github: ({ className, ...props }: IconsProps) => (
        <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} {...defaultProps} {...props}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
    ),
    link: ({ className, ...props }: IconsProps) => (
        <svg
            strokeWidth="0"
            viewBox="0 0 512 512"
            className={cn("mt-1 h-4 w-4", className)}
            {...defaultProps}
            stroke="currentColor"
            fill="currentColor"
            {...props}
        >
            <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="36"
                d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64m-140.71-96h187.42"
            ></path>
        </svg>
    ),
    mail: ({ className, ...props }: IconsProps) => (
        <svg
            viewBox="0 0 24 24"
            {...defaultProps}
            strokeWidth="0"
            fill="currentColor"
            className={cn("h-4 w-4", className)}
            {...props}
        >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
        </svg>
    ),
    moon: ({ className, ...props }: IconsProps) => (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-4 w-4", className)}
            {...props}
        >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"></path>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"></path>
        </svg>
    ),
    sun: ({ className, ...props }: IconsProps) => (
        <svg
            strokeWidth="0"
            viewBox="0 0 512 512"
            {...defaultProps}
            fill="currentColor"
            strokeLinecap="inherit"
            strokeLinejoin="inherit"
            className={cn("h-4 w-4", className)}
            {...props}
        >
            <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 48v48m0 320v48m147.08-355.08-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08-33.94-33.94M142.86 142.86l-33.94-33.94"
            ></path>
            <circle
                cx="256"
                cy="256"
                r="80"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
            ></circle>
        </svg>
    ),
};
