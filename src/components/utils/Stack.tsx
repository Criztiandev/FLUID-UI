import React from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

const Stack = (props: Props) => {
  const size = props.size || 3;
  const defaultStyle = cn(
    "flex -space-x-4 rtl:space-x-reverse",
    props.className
  );

  const render = React.Children.toArray(props.children).slice(0, size);

  return (
    <>
      <div className={defaultStyle}>
        {render.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}

        {size >= 3 && (
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800 z-10"
            href="#">
            {size}
          </a>
        )}
      </div>
    </>
  );
};

export default Stack;
