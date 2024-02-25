import React, {
  LabelHTMLAttributes,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

interface DrawerProps extends Props {
  name: string;
  dir?: "left" | "right" | "top" | "bottom";
  width?: string;
  height?: string;
}

interface ButtonProps extends LabelHTMLAttributes<HTMLLabelElement> {
  target: string;
  as?: "button" | "icon" | "link";
  dir?: "left" | "right" | "top" | "bottom";
  variant?: "default" | "outline" | "ghost";
  status?: "success" | "error" | "warning" | "info" | "none";
  size?: "default" | "sm" | "lg" | "xl";
}

const Drawer = ({ dir = "right", ...props }: DrawerProps) => {
  const [active, setActive] = useState(false);
  const backDropRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dirStyle = {
    left: "justify-start",
    right: "justify-end",
    top: "flex-col justify-start items-start",
    bottom: "flex-col justify-end items-start",
  };

  const roundedStyle = {
    left: "rounded-r-lg",
    right: "rounded-lg",
    top: "rounded-b-lg",
    bottom: "rounded-lg",
  };

  const backdropStyle = cn(
    `absolute top-0 left-0 bg-black/50 w-screen h-screen flex ${
      dirStyle[dir || "right"]
    }`
  );

  const defaultStyle = cn(
    `bg-white p-5
    ${roundedStyle[dir || "right"]}
    `,
    props.className
  );

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
            style={{
              width: dir === "left" || dir === "right" ? props.width : "100%",
              height: dir === "top" || dir === "bottom" ? props.height : "100%",
            }}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};

const Button = forwardRef<HTMLLabelElement, ButtonProps>(
  ({ as = "button", variant, size, className, ...props }, ref) => {
    // Variation Style
    const variation = {
      button: "h-10 px-5 py-2.5",
      icon: "h-9 w-9",
      link: "bg-transparent shadow-none text-black hover:underline hover:underline-offset-4",
    };

    // Variant Style
    const variants = {
      default: "bg-primary text-white shadow hover:bg-primary/90",
      outline: "border border-input hover:bg-primary/90",
      ghost: "bg-transparent hover:bg-accent hover:text-accent",
    };

    // Size Style
    const buttonSize = {
      default: "h-10 px-5 py-2.5",
      sm: "h-8 px-3 py-2 text-xs",
      lg: "h-10 px-5 py-3",
      xl: "h-12 px-6 py-3.5",
    };

    // Icon Size
    const iconSize = {
      default: "h-9 w-9",
      sm: "h-8 w-8",
      lg: "h-10 w-10",
      xl: "w-12 h-12",
    };

    const defaultStyle = cn(
      `cursor-pointer relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
    ${variants[variant || "default"]}
    ${variation[as || "button"]}
    ${
      as === "button"
        ? buttonSize[size || "default"]
        : iconSize[size || "default"]
    }
    `,
      className
    );

    return (
      <label
        {...props}
        ref={ref}
        htmlFor={props.target}
        className={defaultStyle}>
        {props.children}
      </label>
    );
  }
);

Drawer.Button = Button;
export default Drawer;
