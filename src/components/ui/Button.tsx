import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "icon" | "link";
  dir?: "left" | "right" | "top" | "bottom";
  variant?: "default" | "outline" | "ghost";
  status?: "success" | "error" | "warning" | "info" | "none";
  size?: "default" | "sm" | "lg" | "xl";
  icon?: React.ReactNode;
}

const variation = {
  button: "h-10 px-5 py-2.5",
  icon: "h-9 w-9",
  link: "bg-transparent shadow-none text-black hover:underline hover:underline-offset-4",
};

const variants = {
  default: "bg-primary text-white shadow hover:bg-primary/90",
  outline: "border border-input hover:bg-primary/90",
  ghost: "bg-transparent hover:bg-accent hover:text-accent",
};

const sizeStyle = {
  default: "h-10 px-5 py-2.5",
  sm: "h-8 px-3 py-2 text-xs",
  lg: "h-10 px-5 py-3",
  xl: "h-12 px-6 py-3.5",
};

const Button = (props: Props) => {
  const defaultStyle = cn(
    `relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
    ${variants[props.variant || "default"]}
    ${sizeStyle[props.size || "default"]}
    ${variation[props.as || "button"]}
    `,
    props.className
  );

  return (
    <button {...props} className={defaultStyle}>
      {props.children}
    </button>
  );
};

export default Button;
