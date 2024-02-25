import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  as?: "button" | "icon" | "link";
  variant?: "outline" | "ghost" | "info" | "success" | "warning" | "danger";
  status?: "success" | "error" | "warning" | "info" | "none";
  size?: "default" | "sm" | "lg" | "xl";
}

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
      `cursor-default px-2.5 py-0.5  inline-flex items-center rounded-[5px] border text-xs font-semibold
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
