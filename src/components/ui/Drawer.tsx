import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/tailwind.utils";

interface SizeOptions {
  width?: string;
  height?: string;
}

interface Props {
  className?: string;
  children?: React.ReactNode;
}

interface DrawerProps extends Props {
  name: string;
  size?: SizeOptions | string;
  dir?: "left" | "right" | "top" | "down";
}

interface ButtonProps extends Props {
  target: string;
  as?: "normal" | "outline" | "ghost" | "link" | "child";
  size?: "sm" | "md" | "normal" | "lg" | "xl";
  dir?: "left" | "right" | "top" | "bottom";
  icon?: React.ReactNode;
  rounded?: boolean;
  disabled?: boolean;
}

const Drawer = ({ size = "300px", dir = "right", ...props }: DrawerProps) => {
  const [active, setActive] = useState(false);
  const backDropRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dirStyle = {
    left: "justify-start",
    right: "justify-end",
    top: "flex-col justify-start items-start",
    down: "flex-col justify-end items-start",
  };

  const roundedStyle = {
    left: "rounded-r-lg",
    right: "rounded-lg",
    top: "rounded-b-lg",
    down: "rounded-lg",
  };

  const backdropStyle = cn(
    `absolute top-0 left-0 bg-black/50 w-screen h-screen flex ${
      dirStyle[dir || "right"]
    }`
  );

  const defaultStyle = cn(
    `bg-white p-5 
    ${roundedStyle[dir || "right"]}
    ${dir === "left" || dir === "right" ? `h-full` : "w-full"}
    `,
    props.className
  );

  let contentWidth = "";
  let contentHeight = "";

  if (typeof size === "string") {
    contentWidth = dir === "left" || dir === "right" ? size : "";
    contentHeight = dir === "top" || dir === "down" ? size : "";
  } else {
    contentWidth = dir === "left" || dir === "right" ? size?.width || "" : "";
    contentHeight = dir === "top" || dir === "down" ? size?.height || "" : "";
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (backDropRef.current === e.target) {
        setActive(false);
        inputRef.current?.click();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="checkbox"
        id={props.name}
        name={props.name}
        value={active.toString()}
        onChange={() => setActive(!active)}
        hidden
      />
      {active && (
        <div ref={backDropRef} className={backdropStyle}>
          <div
            className={defaultStyle}
            style={{ width: contentWidth, height: contentHeight }}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};

const Button = (props: ButtonProps) => {
  const btnStyles = {
    normal:
      "bg-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-400 focus:outline-none transition-all duration-200 ease-in-out",
    outline: "border border-gray-400",
    ghost: "",
    link: "bg-transparent hover:underline ",
    child: "",
  };

  const sizeStyle = {
    sm: "px-2 py-0.5",
    md: "px-4 py-2",
    normal: "px-5 py-2.5",
    lg: "px-6 py-3",
    xl: "px-8 py-4",
  };

  const iconDir = {
    left: "flex-row",
    right: "flex-row-reverse",
    top: "flex-col items-center",
    bottom: "flex-col-reverse items-center",
  };

  const defaultStyle = cn(
    `relative text-black text-base font-medium rounded-[6px] px-5 py-2.5 text-center w-[75px]
      ${btnStyles[props.as || "normal"]} 
      ${sizeStyle[props.size || "normal"]}
      ${props.disabled && "cursor-not-allowed opacity-50"}
      ${props.rounded ? "rounded-full" : ""}
      flex gap-2 justify-center ${iconDir[props.dir || "left"]}
      `,
    props.className
  );

  return (
    <label htmlFor={props.target} className={defaultStyle}>
      {props.icon &&
        (props.dir === "left" || props.dir === "top") &&
        props.icon}
      {props.children}
      {props.icon &&
        (props.dir === "right" || props.dir === "bottom") &&
        props.icon}
    </label>
  );
};

Drawer.Button = Button;

export default Drawer;
