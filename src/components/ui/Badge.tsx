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
  onToggle?: () => void;
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
     text-xs text-black font-medium me-2 px-2.5 py-0.5 rounded w-[50px] text-center border flex items-center justify-center gap-[5px]
    ${flagColor[props.flag || "info"]}
    ${variant[props.as || "normal"]}
    ${props.rounded && "rounded-full"}
  `,
    props.className
  );

  const Component = {
    normal: (
      <div className={defaultStyle} onClick={props.onToggle}>
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
  const defaultStyle = cn(
    `inline-flex items-center justify-between px-2 py-1 me-2 text-sm font-medium w-[70px] text-blue-800 bg-blue-100 rounded `,
    props.className
  );

  return (
    <Badge {...props} className={defaultStyle}>
      {props.children}
      <button onClick={props.onToggle} className="cursor-pointer">
        <svg
          className="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
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
