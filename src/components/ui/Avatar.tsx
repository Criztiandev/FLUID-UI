import { ImgHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  rounded?: boolean;
  border?: boolean;
  fallback?: string;
}

const Avatar = forwardRef<HTMLImageElement, Props>(
  ({ className, ...props }, ref) => {
    const defaultStyle = cn(
      `relative flex h-10 w-10 shrink-0 overflow-hidden
      ${props.rounded ? "rounded-full" : "rounded-[5px]"}
    `,
      className
    );

    return (
      <div ref={ref} className={defaultStyle}>
        {props.src ? (
          <img {...props} />
        ) : (
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {props.fallback}
          </span>
        )}
      </div>
    );
  }
);

export default Avatar;
