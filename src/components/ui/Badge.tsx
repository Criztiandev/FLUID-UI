import React, { useEffect, useRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  as?: "normal" | "outline" | "ghost" | "link" | "child";
  flag?: "success" | "danger" | "warning" | "info";
  className?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  dir?: "left" | "right";
  icon?: React.ReactNode;
}

const Badge = ({ icon, dir = "left", ...props }: Props) => {
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const variant = {
    normal: "",
    outline: "bg-transparent border border-blue-500 text-blue-500",
    ghost: "bg-transparent text-blue-500",
    link: "cursor-pointer underline",
    child:
      "absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-3 dark:border-gray-900",
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

  useEffect(() => {
    console.log(badgeRef.current);
  }, []);

  return (
    <div ref={badgeRef} className={defaultStyle}>
      {icon && dir === "left" && icon}
      {props.children}
      {icon && dir === "right" && icon}
    </div>
  );
};

export default Badge;
