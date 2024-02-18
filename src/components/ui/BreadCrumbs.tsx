import React from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  spacer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const BreadCrumbs = (props: Props) => {
  const defaultStyle = cn("flex", props.className);

  // inject the spacer into the children
  const children = React.Children.toArray(props.children).map(
    (child, index) => {
      if (index > 0) {
        return (
          <>
            {props.spacer ? (
              props.spacer
            ) : (
              <span className="text-gray-400 mx-1">/</span>
            )}

            {child}
          </>
        );
      }
      return child;
    }
  );

  return (
    <nav className={defaultStyle}>
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {children}
      </ol>
    </nav>
  );
};

interface ItemsProps {
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  custom?: boolean;
  element?: React.ReactNode;
}

const Items = (props: ItemsProps) => {
  const defaultStyle = cn("inline-flex items-center", props.className);

  return (
    <li className={defaultStyle}>
      {props.custom ? (
        props.element
      ) : (
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <span>{props.icon}</span>
          <span>{props.title}</span>
        </a>
      )}
    </li>
  );
};

BreadCrumbs.Items = Items;

export default BreadCrumbs;
