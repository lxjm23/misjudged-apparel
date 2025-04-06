
  import clsx from "clsx";
  import { FunctionComponent, JSX } from "react";
  import parse, { DOMNode, domToReact, Element } from "html-react-parser";

  interface TextProps {
    html: string;
    className?: string;
  }

  const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
    const parsedContent = parse(html, {
      replace: (domNode: DOMNode) => {
        if (
          domNode.type === "tag" &&
          ["h1", "h2", "h3", "h4", "h5", "h6"].includes(domNode.name)
        ) {
          const level = domNode.name;
          const Tag = level as keyof JSX.IntrinsicElements;
  
          const headingStyles: Record<string, string> = {
            h1: "text-3xl font- leading-normal tracking-[2.25px]",
            h2: " text-2xl font-normal leading-normal tracking-[1.8px]",
            h3: "text-1xl mt-6 font-semibold",
            h4: "text-2xl mt-6 font-semibold",
            h5: "text-xl mt-4 font-semibold",
            h6: "text-lg mt-4 font-semibold",
          };
  
          return (
            <Tag className={headingStyles[level]}>
              {domToReact((domNode as Element).children as unknown as DOMNode[])}
            </Tag>
          );
        }
  
        return undefined;
      },
    });
  
    return (
      <div className={clsx("prose font-serif max-w-6xl mx-auto", className)}>
        {parsedContent}
      </div>
    );
  };
  
  export default Prose;