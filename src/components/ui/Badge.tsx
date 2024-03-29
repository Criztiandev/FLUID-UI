import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  as?: "default" | "indicator" | "icon";
  variant?: "outline" | "ghost" | "info" | "success" | "warning" | "danger";
  status?: "success" | "error" | "warning" | "info" | "none";
  size?: "default" | "sm" | "lg" | "xl";
}

const styleVariant = {
  default: "cursor-default px-2.5 py-0.5  rounded-[5px] border",
  indicator:
    "absolute -top-2 -end-2 justify-center min-w-6 min-h-6 text-white bg-primary rounded-full",
  icon: "min-w-6 min-h-6 justify-center rounded-full",
};

const variants = {
  outline: "border border-input hover:bg-primary/90",
  ghost: "bg-transparent",
  info: "bg-blue-50 text-blue-800  hover:bg-blue-200/90 hovr:text-blue-900",
  success:
    "bg-green-50 text-green-800 hover:bg-green-200/90 hovr:text-green-900",
  danger: "bg-red-50 text-red-800  hover:bg-red-200/90 hovr:text-red-900",
  warning:
    "bg-yellow-50 text-red-800  hover:bg-yellow-200/90 hovr:text-yellow-900",
};

const borderVariants = {
  outline: "border border-gray-300",
  ghost: "",
  info: "border border-blue-300",
  success: "border border-green-300",
  danger: "border border-red-300",
  warning: "border border-yellow-300",
};

const Badge = forwardRef<HTMLDivElement, Props>(
  ({ variant, className, ...props }, ref) => {
    const defaultStyle = cn(
      `
    inline-flex items-center text-xs font-semibold
    ${styleVariant[props.as || "default"]}
    ${variants[variant || "outline"]}
    ${borderVariants[variant || "outline"]}
    `,
      className
    );

    return (
      <div {...props} ref={ref} className={defaultStyle}>
        {props.children}
      </div>
    );
  }
);

export default Badge;
