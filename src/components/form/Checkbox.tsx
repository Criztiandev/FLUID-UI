import { ReactNode, useRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface BaseProps {
  className?: string;
  children?: ReactNode;
}

interface CheckboxProps extends BaseProps {
  label?: string;
  dir?: "left" | "right";
  disabled?: boolean;
}

const Checkbox = ({ dir = "right", ...props }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const defaultStyle = cn(
    `
    w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600
    ${props.disabled ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""} 
    `,
    props.className
  );

  return (
    <label className="flex items-center gap-2 ">
      {props.label && dir === "left" && (
        <span className="block  text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </span>
      )}

      <input
        type={"checkbox"}
        ref={checkboxRef}
        className={defaultStyle}
        placeholder="Placeholder"
        {...props}
      />

      {props.label && dir === "right" && (
        <span className="block  text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
