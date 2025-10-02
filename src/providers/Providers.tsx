"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { ContentProvider } from "./ContentProvider";

interface ProvidersProps {
    children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
    return (
        <ContentProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </ContentProvider>
    );
};

export default Providers;
