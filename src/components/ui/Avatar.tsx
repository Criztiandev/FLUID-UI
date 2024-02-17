import { cn } from "../../utils/tailwind.utils";

interface Props {
  src?: string;
  className?: string;
  rounded?: boolean;
  indicator?: boolean;
  dir?: "left" | "right";
  color?: string;
}

const Avatar = (props: Props) => {
  const defaultStyle = cn(
    `relative w-10 h-10 overflow-hidden bg-gray-100  dark:bg-gray-600 
     ${props.rounded ? "rounded-full" : "rounded-[8px]"}`,
    props.className
  );

  const dotDefaultStyle = cn(
    `top-0 left-7 absolute  w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full
        ${
          props.dir === "left"
            ? "-left-2 "
            : props.dir === "right"
            ? "-right-2 "
            : ""
        }
        ${props.color ? `bg-[${props.color}]` : "bg-red-500"}
    `
  );

  return (
    <div className={defaultStyle}>
      {props.indicator && <span className={dotDefaultStyle}></span>}
      {props.src ? (
        <img
          className="w-10 h-10 rounded-full"
          src="/docs/images/people/profile-picture-5.jpg"
          alt="Rounded avatar"
        />
      ) : (
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"></path>
        </svg>
      )}
    </div>
  );
};

export default Avatar;
