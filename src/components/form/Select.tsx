import { ReactNode, SelectHTMLAttributes, useRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface BaseProps {
  className?: string;
  children?: ReactNode;
}

interface FieldProps
  extends BaseProps,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  as?: "normal" | "outline" | "ghost";
  size?: "sm" | "md" | "normal" | "lg" | "xl";
  flag?: "success" | "error" | "warning" | "info" | "none";
  label?: string;
  dir?: "left" | "right";
  icon?: ReactNode;
  status?: "success" | "error" | "warning" | "info";
  description?: string;
}

// Styles
const flagStyles = {
  success:
    "border-green-400 focus:ring-green-300 dark:focus:ring-green-400 bg-green-50",
  error: "border-red-400 focus:ring-red-300 dark:focus:ring-red-400 bg-red-50",
  warning:
    "border-yellow-400 focus:ring-yellow-300 dark:focus:ring-yellow-400 bg-yellow-50",
  info: "border-blue-400 focus:ring-blue-300 dark:focus:ring-blue-400 bg-blue-50",
  none: "",
};

const inputStyles = {
  normal: "bg-gray-50 border border-gray-300",
  outline: "border border-gray-400",
  ghost: "",
};

const sizeStyle = {
  sm: "px-2 py-0.5",
  md: "px-4 py-2",
  normal: "px-4 py-2.5",
  lg: "px-6 py-3",
  xl: "px-8 py-4",
};

const Select = ({ as, size, ...props }: FieldProps) => {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const defaultStyle = cn(
    `text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
    ${inputStyles[as || "normal"]}
    ${sizeStyle[size || "normal"]}
    ${flagStyles[props.flag || "none"]}
    ${props.status && statusStyle[props.status]}
    ${props.disabled ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""} 
    ${props.icon && props.dir && "px-[3rem]"}
    `,
    props.className
  );

  return (
    <div>
      <label className=" text-gray-900 dark:text-white flex flex-col gap-2">
        {props.label && (
          <span className="block  text-sm font-medium text-gray-900 dark:text-white">
            {props.label}
          </span>
        )}
        <div className="relative">
          {props.icon && props.dir === "left" && (
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              {props.icon}
            </div>
          )}

          <select ref={selectRef} className={defaultStyle} {...props}>
            {props.children}
          </select>
          {props.icon && props.dir === "right" && props.icon}
        </div>
      </label>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {props.description}
      </div>
    </div>
  );
};

// Components

interface OptionProps extends BaseProps {
  value: string;
}

const Options = (props: OptionProps) => {
  return (
    <option value={props.value} className={"bg-blacks"}>
      {props.children}
    </option>
  );
};

const statusStyle = {
  success: "bg-green-50 border border-green-500 text-green-900",
  error: "bg-red-50 border-red-500 focus:ring-red-300 dark:focus:ring-red-400",
  warning:
    "bg-yellow-50 border-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-400",
  info: "bg-blue-50 border-blue-500 focus:ring-blue-300 dark:focus:ring-blue-400",
  none: "",
};

Select.Option = Options;

export default Select;
