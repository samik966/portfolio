import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type PillProps = ComponentProps<"div"> & {
    pills: string[];
};
const Pills = ({ pills, className, ...rest }: PillProps) => {
    return (
        <div className={cn("flex flex-wrap gap-2", className)} {...rest}>
            {pills.map((pill) => (
                <div
                    key={pill}
                    className="bg-primary/5 text-primary dark:bg-primary/20 w-auto rounded-full px-4 py-1 text-xs font-bold tracking-wide uppercase"
                >
                    {pill}
                </div>
            ))}
        </div>
    );
};

export default Pills;
