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
            className="flex items-center gap-2 rounded-full p-2 capitalize text-foreground shadow-sm outline-none hover:text-primary focus-visible:text-primary focus-visible:ring-1 focus-visible:ring-primary"
            onClick={handleTheme}
        >
            <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    );
};

export default ThemeToggle;
