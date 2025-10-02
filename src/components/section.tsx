"use client";

import { ElementType } from "react";

import { type TPortfolio, useContent } from "@/providers/ContentProvider";

import Card from "@/components/card";
import Description from "@/components/description";
import Pills from "@/components/pills";
import Title from "@/components/title";

type SectionType = TPortfolio["sections"];

const renderMapper: Record<string, ElementType> = {
    heading: Title,
    description: Description,
    card: Card,
    pills: Pills,
};
const Section = () => {
    const { sections } = useContent();
    return Object.keys(sections).map((section) => {
        const { heading, childrens, ...rest } = sections[section as keyof SectionType];
        const { title, type: headingType, ...headingProps } = heading;
        const HeadingComponent = renderMapper[headingType];

        return (
            <section
                id={section}
                key={section}
                style={{ textJustify: "inter-character", wordWrap: "break-word" }}
                className="mb-16 scroll-mt-16 space-y-4 text-justify hyphens-auto md:mb-24 lg:mb-36 lg:scroll-mt-24"
                {...rest}
            >
                <HeadingComponent {...headingProps}>{title}</HeadingComponent>
                <div className="flex flex-col gap-8">
                    {childrens.map((c, idx) => {
                        const { type, ...sectionProps } = c;
                        const Component = renderMapper[type];
                        if (Component) {
                            return (
                                <Component key={`${section}-${type}-${idx}`} {...sectionProps} />
                            );
                        }
                    })}
                </div>
            </section>
        );
    });
};

export default Section;
