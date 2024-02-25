import { ReactNode } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Base {
  className?: string;
  children?: ReactNode;
}

interface Props extends Base {
  dir?: "top" | "bottom";
}

const Banner = (props: Props) => {
  const direction = {
    top: "top-0",
    bottom: "bottom-0",
  };

  const defaultStyle = cn(
    `fixed start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 flex justify-center items-center ${
      direction[props.dir || "top"]
    }`
  );

  return <div className={defaultStyle}>{props.children}</div>;
};

export default Banner;
