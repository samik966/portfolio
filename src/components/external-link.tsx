import { Icons } from "@/components/icons";

type ExternalLinkProps = {
    link: {
        title: string;
        href: string;
    };
};

const ExternalLink = ({ link }: ExternalLinkProps) => {
    return (
        <a
            href={link.href}
            className="flex items-center gap-2 text-primary hover:text-primary hover:underline hover:underline-offset-8"
        >
            <span>{link.title}</span>
            <Icons.link />
        </a>
    );
};

export default ExternalLink;
