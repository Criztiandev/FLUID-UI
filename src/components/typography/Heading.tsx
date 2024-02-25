import { createElement, ReactNode } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children?: ReactNode;
}

const Heading = (props: Props) => {
  const headingStyles = {
    h1: "text-5xl font-extrabold dark:text-white",
    h2: "text-4xl font-extrabold dark:text-white",
    h3: "text-3xl font-extrabold dark:text-white",
    h4: "text-2xl font-extrabold dark:text-white",
    h5: "text-xl font-extrabold dark:text-white",
    h6: "text-lg font-extrabold dark:text-white",
  };

  const defaultStyle = cn(
    `text-5xl font-extrabold dark:text-white ${headingStyles[props.as]}`,
    props.className
  );

  return createElement(props.as, { className: defaultStyle }, props.children);
};

export default Heading;
