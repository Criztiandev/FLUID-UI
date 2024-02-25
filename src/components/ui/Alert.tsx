import { ReactNode, useState } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Base {
  className?: string;
  children?: ReactNode;
}

interface Props extends Base {
  status?: "info" | "success" | "warning" | "error";
  icon?: ReactNode;
  bordered?: boolean;
}

const Alert = (props: Props) => {
  const [active, setActive] = useState(true);

  const statusStyle = {
    info: `text-blue-80 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 ${
      props.bordered && " border border-blue-400 dark:border-blue-400"
    }`,
    success: `text-green-80 bg-green-50 dark:bg-gray-800 dark:text-green-400 ${
      props.bordered && "border border-green-400 dark:border-green-400"
    }`,
    warning: `text-yellow-80 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400 ${
      props.bordered && " border border-yellow-400 dark:border-yellow-400"
    }`,
    error: `text-red-80 bg-red-50 dark:bg-gray-800 dark:text-red-400 ${
      props.bordered && "border border-red-400 dark:border-red-400"
    }`,
  };

  const defaultStyle = cn(
    `relative p-4 mb-4 text-sm 0 rounded-lg flex gap-4 ${
      statusStyle[props.status || "info"]
    }`,
    props.className
  );

  return (
    <>
      {active && (
        <div className={defaultStyle} role="alert">
          <button
            className="absolute right-0 mr-4 cursor-pointer rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
            onClick={() => setActive(!active)}>
            <svg
              className="w-3 h-3"
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
          {props.icon && <div className="flex-shrink-0">{props.icon}</div>}
          {props.children}
        </div>
      )}
    </>
  );
};

export default Alert;
