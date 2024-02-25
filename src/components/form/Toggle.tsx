import { ReactNode } from "react";
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

const Toggle = ({ dir = "right", ...props }: CheckboxProps) => {
  const defaultStyle = cn(
    `
    relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600
    ${props.disabled ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""} 
    `,
    props.className
  );

  return (
    <label className="inline-flex items-center cursor-pointer gap-2">
      {props.label && dir === "left" && (
        <span className="block  text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </span>
      )}

      <input type="checkbox" value="" className="sr-only peer" {...props} />
      <div className={defaultStyle}></div>
      {props.label && dir === "right" && (
        <span className="block  text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </span>
      )}
    </label>
  );
};

export default Toggle;
