import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "danger" | "success" | "warning" | "bland";
  border?: boolean;
}

const variants = {
  info: "bg-blue-50 text-sm text-blue-800",
  danger: "bg-red-50 text-sm text-red-800",
  success: "bg-green-50 text-sm text-green-800",
  warning: "bg-yellow-50 text-sm text-yellow-800",
  bland: "bg-transparent text-sm text-black-800",
};

const borderVariants = {
  info: "border border-blue-300",
  danger: "border border-red-300",
  success: "border border-green-300",
  warning: "border border-yellow-300",
  bland: "border border-gray-300",
};

const Alert = forwardRef<HTMLDivElement, Props>(
  ({ variant, className, ...props }, ref) => {
    const defaultStyle = cn(
      `relative w-full rounded-lg px-4 py-3 text-sm 
      ${variants[variant || "bland"]}
      ${borderVariants[variant || "bland"]}
    `,
      className
    );

    return (
      <div ref={ref} {...props} className={defaultStyle}>
        {props.children}
      </div>
    );
  }
);

export default Alert;
