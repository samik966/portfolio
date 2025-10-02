import config from "@/data/portfolio.json";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

import Providers from "@/providers/Providers";

import "./globals.css";

const font = Montserrat({
    subsets: ["latin"],
    fallback: ["sans"],
    variable: "--font-geist-sans",
});

export const viewport: Viewport = {
    themeColor: [
        {
            media: "(prefers-color-scheme: dark)",
            color: "var(hsl(--background))",
        },
        {
            media: "(prefers-color-scheme: light)",
            color: "var(hsl(--background))",
        },
    ],
};
export async function generateMetadata(): Promise<Metadata> {
    const meta = config.meta;
    return {
        ...meta,
        metadataBase: new URL("http://localhost:3000"),
        openGraph: {
            title: "Architect Website",
            type: "website",
            countryName: "India",
            description: "A futuristic architect portfolio website",
            determiner: "auto",
            siteName: "Architect Website",
            url: "/",
            images: [
                {
                    url: "/favicon.ico",
                },
            ],
        },
        icons: "",
        manifest: "",
    };
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "from-gradient1 to-gradient2 min-h-screen bg-gradient-to-br to-60% font-serif antialiased",
                    "selection:bg-primary selection:text-primary-foreground leading-relaxed",
                    font.variable,
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
