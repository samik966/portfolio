"use client";

import portfolio from "@/data/portfolio.json";
import { type ReactNode, createContext, useContext } from "react";

interface ContentProviderProps {
    children: ReactNode;
}
export type TPortfolio = typeof portfolio;

const ContentContext = createContext<TPortfolio | null>(null);

export function ContentProvider({ children }: ContentProviderProps) {
    return <ContentContext.Provider value={portfolio}>{children}</ContentContext.Provider>;
}

export const useContent = () => {
    const values = useContext(ContentContext);
    if (!values) {
        throw new Error("Please use ContentProvider.");
    }
    return values;
};
