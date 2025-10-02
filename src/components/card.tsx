"use client";

import Image from "next/image";

import Description from "@/components/description";
import ExternalLink from "@/components/external-link";
import Pills from "@/components/pills";

type CardProps = {
    description: string[];
    timestamp: string;
    links?: {
        title: string;
        href: string;
    }[];
    location?: string;
    image?: string;
    pills?: string[];
    title: string;
    subtitle: string;
};

const Card = ({
    description,
    subtitle,
    title,
    timestamp,
    location,
    image,
    links,
    pills,
}: CardProps) => {
    const pillExist = pills && pills.length > 0;
    const linkExist = links && links.length > 0;
    return (
        <div className="grid grid-cols-2 gap-4">
            {image && (
                <div className="max-w-36 self-start overflow-hidden rounded bg-white/90">
                    <Image
                        className="max-w-full object-contain p-2"
                        placeholder="empty"
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                    />
                </div>
            )}

            <div className="col-span-2 flex items-center justify-between max-md:flex-col max-md:items-start">
                <h3 className="text-2xl">{title}</h3>
                {timestamp && (
                    <p
                        className="text-sm max-md:text-xs"
                        dangerouslySetInnerHTML={{ __html: timestamp }}
                    />
                )}
            </div>
            <div className="col-span-2 flex flex-1 flex-col">
                <div className="mb-2 flex items-center justify-between max-md:flex-col max-md:items-start">
                    {subtitle && <span className="text-base">{subtitle}</span>}
                    {location && <p className="text-sm uppercase">{location}</p>}
                    {linkExist && (
                        <div className="flex gap-4">
                            {links.map((link) => (
                                <ExternalLink key={link.title} link={link} />
                            ))}
                        </div>
                    )}
                </div>
                <Description content={description} />

                {pillExist && <Pills className="mt-2" pills={pills} />}
            </div>
        </div>
    );
};

export default Card;
