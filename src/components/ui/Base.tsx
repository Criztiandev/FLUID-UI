import React from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Badge = (props: Props) => {
  const defaultStyle = cn("", props.className);

  return <div className={defaultStyle}>{props.children}</div>;
};

export default Badge;
