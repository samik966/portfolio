import { ComponentProps } from "react";

const Title = ({ children, className }: ComponentProps<"h4">) => {
    return (
        <h4 className="flex text-base font-bold uppercase tracking-wide">
            <div className="mr-3 h-5 w-[2px] -skew-x-12 bg-primary"></div>
            <span className={className}>{children}</span>
        </h4>
    );
};

export default Title;
