import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "ghost" | "info" | "success" | "warning" | "danger";
  status?: "success" | "error" | "warning" | "info" | "none";
  size?: "default" | "sm" | "lg" | "xl";
  value?: string | number;
  onClick?: () => void;
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

const Chips = forwardRef<HTMLDivElement, Props>(
  ({ variant, className, ...props }, ref) => {
    const defaultStyle = cn(
      `
    inline-flex items-center text-xs font-semibold cursor-default px-2.5 py-0.5  rounded-[5px] border
    ${variants[variant || "outline"]}
    ${borderVariants[variant || "outline"]}
    `,
      className
    );

    return (
      <div ref={ref} className={defaultStyle} {...props}>
        <span>{props.children}</span>
        <button
          className="inline-flex items-center ms-2 text-sm "
          value={props.value}
          onClick={props.onClick}>
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Remove badge</span>
        </button>
      </div>
    );
  }
);

export default Chips;
