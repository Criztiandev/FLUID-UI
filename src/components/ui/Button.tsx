import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "normal" | "outline" | "ghost" | "link" | "child";
  size?: "sm" | "md" | "normal" | "lg" | "xl";
  dir?: "left" | "right" | "top" | "bottom";
  icon?: React.ReactNode;
  rounded?: boolean;
}

const Button = (props: Props) => {
  const btnStyles = {
    normal:
      "bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-400 focus:outline-none transition-all duration-200 ease-in-out",
    outline: "border border-gray-400",
    ghost: "",
    link: "bg-transparent hover:underline ",
    child: "",
  };

  const sizeStyle = {
    sm: "px-2 py-0.5",
    md: "px-4 py-2",
    normal: "px-5 py-2.5",
    lg: "px-6 py-3",
    xl: "px-8 py-4",
  };

  const iconDir = {
    left: "flex-row",
    right: "flex-row-reverse",
    top: "flex-col items-center",
    bottom: "flex-col-reverse items-center",
  };

  const defaultStyle = cn(
    `relative text-black text-base font-medium rounded-[6px] px-5 py-2.5 text-center  
    ${btnStyles[props.as || "normal"]} 
    ${sizeStyle[props.size || "normal"]}
    ${props.disabled && "cursor-not-allowed opacity-50"}
    ${props.rounded ? "rounded-full" : ""}
    flex gap-2 justify-center ${iconDir[props.dir || "left"]}
    `,
    props.className
  );

  return (
    <button className={defaultStyle} {...props}>
      {props.icon &&
        (props.dir === "left" || props.dir === "top") &&
        props.icon}
      {props.children}
      {props.icon &&
        (props.dir === "right" || props.dir === "bottom") &&
        props.icon}
    </button>
  );
};

export default Button;
