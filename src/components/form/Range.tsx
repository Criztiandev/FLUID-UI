import { ReactNode } from "react";
import { cn } from "../../utils/tailwind.utils";

interface BaseProps {
  className?: string;
  children?: ReactNode;
}

interface Props extends BaseProps {
  label?: string;
  min?: string;
  max?: string;
  value?: string;
}

const Range = (props: Props) => {
  const defaultStyle = cn(
    "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
    props.className
  );

  return (
    <div className="relative mb-6">
      {props.label && (
        <span className="block  text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </span>
      )}
      <input type="range" className={defaultStyle} {...props} />
    </div>
  );
};

export default Range;
