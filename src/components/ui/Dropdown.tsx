import {
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../../utils/tailwind.utils";

interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  as?: "button" | "icon" | "link";
  dir?: "left" | "right" | "top" | "bottom";
  flip?: boolean;
  variant?: "default" | "outline" | "ghost";
  status?: "success" | "error" | "warning" | "info" | "none";
  size?: "default" | "sm" | "lg" | "xl";
  contentClass?: string;
}
interface ItemProps {
  className?: string;
  children?: ReactNode;
}

const variation = {
  button: "h-10 px-5 py-2.5",
  icon: "h-9 w-9",
  link: "bg-transparent shadow-none text-black hover:underline hover:underline-offset-4",
};

const variants = {
  default: "bg-primary text-white shadow hover:bg-primary/90",
  outline: "border border-input hover:bg-primary/90",
  ghost: "bg-transparent hover:bg-accent hover:text-accent",
};

const buttonSize = {
  default: "h-9 px-5 py-2.5",
  sm: "h-8 px-3 py-2 text-xs",
  lg: "h-10 px-5 py-3",
  xl: "h-12 px-6 py-3.5",
};

const iconSize = {
  default: "h-9 w-9",
  sm: "h-8 w-8",
  lg: "h-10 w-10",
  xl: "w-12 h-12",
};

const direction = {
  left: "right-[7rem] top-0 mr-4",
  right: "left-[7rem] top-0 ml-4",
  top: "bottom-[38px] my-2",
  bottom: "top-[38px] my-2",
};

const Dropdown = ({
  as = "button",
  variant,
  size,
  className,
  ...props
}: DropdownProps) => {
  const [active, setActive] = useState(true);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLUListElement | null>(null);

  const buttonStyle = cn(
    ` cursor-default select-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 
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

  const contentStyle = cn(
    ` absolute z-10 w-48 py-2  bg-white rounded-md shadow-md border border-gray-200 p-2 
      ${direction[props.dir || "left"]}
      ${
        props.flip &&
        (props.dir === "bottom" || props.dir === "top") &&
        "right-0"
      }
      `,
    props.contentClass
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        setActive(false);
      }

      if (buttonRef.current && buttonRef?.current.contains(e.target as Node)) {
        setActive(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative w-fit">
      <button
        ref={buttonRef}
        {...props}
        className={buttonStyle}
        onClick={() => setActive(!active)}>
        {props.label}
      </button>

      {active && (
        <ul ref={contentRef} className={contentStyle}>
          {props.children}
        </ul>
      )}
    </div>
  );
};

const Item = (props: ItemProps) => {
  const defaultStyle = cn(
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1 text-sm outline-none transition-colors hover:bg-gray-100 ",
    props.className
  );

  return <li className={defaultStyle}>{props.children}</li>;
};

const Separator = () => {
  return <div className="border-b h-px my-1 border-gray-200"></div>;
};

Dropdown.Item = Item;
Dropdown.Separator = Separator;

export default Dropdown;
