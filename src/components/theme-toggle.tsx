"use client";

import { useTheme } from "next-themes";

import { Icons } from "@/components/icons";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const isLight = theme === "light";
    const newTheme = isLight ? "dark" : "light";

    function handleTheme() {
        setTheme(newTheme);
    }

    return (
        <button
            aria-label="Toggle Theme"
            className="bg-background text-foreground hover:text-primary focus-visible:text-primary focus-visible:ring-primary flex items-center gap-2 rounded-full p-2 capitalize shadow-sm outline-none focus-visible:ring-1"
            onClick={handleTheme}
        >
            <Icons.sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Icons.moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </button>
    );
};

export default ThemeToggle;
