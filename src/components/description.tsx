import Paragraph from "@/components/paragraph";
import SafeContent from "@/components/safe-content";

interface DescriptionProps {
    content: string | string[];
}
const Description = ({ content }: DescriptionProps) => {
    if (!content) return null;
    let renderContent;
    if (Array.isArray(content)) {
        renderContent = content.map((c) => {
            const key = c.substring(0, 20).split(" ").join("_").trim();
            return (
                <Paragraph key={key}>
                    <SafeContent html={c} />
                </Paragraph>
            );
        });
    } else {
        renderContent = (
            <Paragraph>
                <SafeContent html={content} />
            </Paragraph>
        );
    }

    return <div className="space-y-4">{renderContent}</div>;
};

export default Description;
