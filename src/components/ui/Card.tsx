import React from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Card = (props: Props) => {
  const defaultStyle = cn(
    "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5",
    props.className
  );

  return <article className={defaultStyle}>{props.children}</article>;
};

const Header = (props: Props) => {
  const defaultStyle = cn("", props.className);

  return <header className={defaultStyle}>{props.children}</header>;
};

const Content = (props: Props) => {
  const defaultStyle = cn("", props.className);

  return <main className={defaultStyle}>{props.children}</main>;
};

const Cover = (props: Props) => {
  const defaultStyle = cn("", props.className);

  return <figure className={defaultStyle}>{props.children}</figure>;
};

Card.Header = Header;
Card.Content = Content;
Card.Cover = Cover;

export default Card;
