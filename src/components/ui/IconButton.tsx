import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "normal" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "normal" | "lg" | "xl";
  rounded?: boolean;
}

const IconButton = (props: Props) => {
  const btnStyles = {
    normal: "bg-gray-400",
    outline: "border border-gray-400",
    ghost: "",
    link: "bg-transparent hover:underline ",
  };

  const defaultStyle = cn(
    `text-white min-w-[48px] min-h-[48px]  rounded-[8px] font-medium  
    ${btnStyles[props.as || "normal"]} 
    ${props.rounded ? "rounded-full" : ""}
    ${props.rounded ? "rounded-full" : ""}
    ${props.disabled && "cursor-not-allowed opacity-50"}
    `,
    props.className
  );

  return (
    <button className={defaultStyle} {...props}>
      {props.children}
    </button>
  );
};

export default IconButton;
