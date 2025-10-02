import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Paragraph = ({ children, className, ...rest }: ComponentProps<"p">) => {
    return (
        <p className={cn("text-lg font-light", className)} {...rest}>
            {children}
        </p>
    );
};

export default Paragraph;
