import React from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Group = (props: Props) => {
  const defaultStyle = cn("flex items-center ", props.className);

  // customize the class name of childs
  const children = React.Children.toArray(props.children).map(
    (child, index) => {
      if (index === 0) {
        return React.cloneElement(child as React.ReactElement, {
          className: "bg-gray-400 rounded-r-none rounded-l-lg h-full",
        });
      }

      // last child
      if (index === React.Children.count(props.children) - 1) {
        return React.cloneElement(child as React.ReactElement, {
          className: "bg-gray-400 rounded-l-none rounded-r-lg",
        });
      }

      return React.cloneElement(child as React.ReactElement, {
        className: "border-none rounded-none",
      });
    }
  );

  return <div className={defaultStyle}>{children}</div>;
};

export default Group;
