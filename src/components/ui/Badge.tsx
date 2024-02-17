import React from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  type?: "normal" | "chip" | "indicator";
  as?: "normal" | "outline" | "ghost";
  flag?: "success" | "danger" | "warning" | "info";
  className?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  dir?: "left" | "right";
  icon?: React.ReactNode;
}

const Badge = ({ icon, dir = "left", type = "normal", ...props }: Props) => {
  const variant = {
    normal: "",
    outline: "bg-transparent border border-blue-500 text-blue-500",
    ghost: "bg-transparent text-blue-500",
    link: "cursor-pointer underline",
  };

  const flagColor = {
    success: `bg-green-100 border-green-400 hover:bg-green-200`,
    danger: `bg-red-100 border-red-400 hover:bg-red-200`,
    warning: `bg-yellow-100 border-yellow-400 hover:bg-yellow-200`,
    info: `bg-blue-100 border-blue-400 hover:bg-blue-200`,
  };

  const defaultStyle = cn(
    `
     text-xs text-black font-medium me-2 px-2.5 py-0.5 rounded max-w-[50px] text-center border flex items-center justify-center gap-[5px]
    ${flagColor[props.flag || "info"]}
    ${variant[props.as || "normal"]}
    ${props.rounded && "rounded-full"}
  `,
    props.className
  );

  const Component = {
    normal: (
      <div className={defaultStyle}>
        {icon && dir === "left" && icon}
        {props.children}
        {icon && dir === "right" && icon}
      </div>
    ),

    chip: <Chip {...props} />,
    indicator: <Indicator {...props} />,
  };

  return <>{Component[type || "normal"]}</>;
};

const Chip = (props: Props) => {
  return (
    <Badge {...props}>
      {props.children}
      <span>X</span>
    </Badge>
  );
};

const Indicator = ({ dir = "right", ...props }: Props) => {
  const defaultStyle = cn(
    `absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 ${
      dir === "left" ? "-start-3 " : dir === "right" ? "-end-3 " : ""
    } dark:border-gray-900`,
    props.className
  );

  return (
    <Badge className={defaultStyle} {...props}>
      {props.children}
    </Badge>
  );
};

export default Badge;
