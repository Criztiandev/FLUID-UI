import React, { createContext, useContext, useState } from "react";
import { cn } from "../../utils/tailwind.utils";

interface AccordionContextProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  options?: IconOptions;
}

interface IconOptions {
  activeIcon: React.ReactNode;
  defaultIcon: React.ReactNode;
  deactiveIcon: React.ReactNode;
}

interface Props {
  className?: string;
  children?: React.ReactNode;
  options?: IconOptions;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within AccordionProvider");
  }
  return context;
};

const Accordion = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contextValue = {
    activeIndex,
    setActiveIndex,
    options: props.options,
  };

  const defaultStyle = cn("rounded-xl border", props.className);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={defaultStyle}>{props.children}</div>
    </AccordionContext.Provider>
  );
};

interface ItemProps extends Props {
  title: string;
  labelStyle?: string;
  contentStyle?: string;
}

const Item = (props: ItemProps) => {
  const { options } = useAccordion();
  const [open, setOpen] = React.useState(false);

  const defaultStyle = cn("", props.className);
  const labelStyle = cn(
    "flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3",
    props.labelStyle
  );
  const contentStyle = cn(
    "p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900",
    props.contentStyle
  );
  const rotateStyle = open ? "" : "rotate-180";

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={defaultStyle}>
      <button className={labelStyle} onClick={handleToggle}>
        <span>{props.title}</span>

        {options ? (
          open ? (
            options.activeIcon
          ) : (
            options.deactiveIcon
          )
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${rotateStyle}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className={contentStyle}>
          <p>{props.children}</p>
        </div>
      )}
    </div>
  );
};

Accordion.Item = Item;

export default Accordion;
