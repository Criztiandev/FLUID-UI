import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  dir?: "left" | "right" | "top-left" | "top-right";
  variant?: "default" | "outline" | "ghost";
  status?: "success" | "error" | "warning" | "info" | "none";
  size?: "default" | "sm" | "lg" | "xl";
}

const variants = {
  default: "bg-primary text-white shadow hover:bg-primary/90",
  outline: "border border-input hover:bg-primary/90",
  ghost: "bg-transparent hover:bg-accent hover:text-accent",
};

const dirVariant = {
  "top-left": "-top-2 -end-2",
  "top-right": "-top-2 -start-2",
  left: "ml-4",
  right: "mr-4",
};

const Indicator = forwardRef<HTMLDivElement, Props>(
  ({ variant, className, dir, ...props }, ref) => {
    const defaultStyle = cn(
      `absolute inline-flex gap-2 items-center justify-center  rounded-full text-xs font-bold
    ${props.children ? "w-6 h-6" : "w-4 h-4"}
    ${variants[variant || "default"]}
    ${dirVariant[dir || "right"]}
    `,
      className
    );

    return (
      <div ref={ref} className={defaultStyle}>
        {props.children}
      </div>
    );
  }
);

export default Indicator;
