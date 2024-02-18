import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

interface ModalProps extends Props {
  name: string;
}

interface ButtonProps extends Props {
  target?: string;
  as?: "normal" | "outline" | "ghost" | "link" | "child";
  size?: "sm" | "md" | "normal" | "lg" | "xl";
  dir?: "left" | "right" | "top" | "bottom";
  icon?: React.ReactNode;
  rounded?: boolean;
  disabled?: boolean;
}

const Modal = (props: ModalProps) => {
  const [active, setActive] = useState(false);
  const backDropRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const defaultStyle = cn("bg-white rounded-lg p-5 w-[400px]", props.className);

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
        <div
          className={
            "absolute top-0 left-0 bg-black/50 w-screen h-screen grid place-items-center z-50"
          }
          ref={backDropRef}>
          <div className={defaultStyle}>{props.children}</div>
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

Modal.Button = Button;

export default Modal;
