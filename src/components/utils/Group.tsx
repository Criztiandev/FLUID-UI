import React from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Group = (props: Props) => {
  const defaultStyle = cn(
    "flex justify-evenly items-center text-center rounded-md shadow-sm border",
    props.className
  );

  // customize the class name of childs
  const children = React.Children.toArray(props.children).map((child) => {
    return React.cloneElement(child as React.ReactElement, {
      className:
        "pr-4 text-sm border-s px-4 py-2 w-full text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white dark:border-gray-800 inline-flex items-center justify-center gap-2",
    });
  });

  return <div className={defaultStyle}>{children}</div>;
};

export default Group;
