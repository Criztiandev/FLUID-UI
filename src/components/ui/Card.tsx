import React, { forwardRef, HTMLProps } from "react";
import { cn } from "../../utils/tailwind.utils";

interface CardProps extends HTMLProps<HTMLDivElement> {}

interface CardComponent
  extends React.ForwardRefExoticComponent<
    CardProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: React.FC<CardProps>;
  Content: React.FC<CardProps>;
  Section: React.FC<CardProps>;
  Cover: React.FC<CardProps>;
  Footer: React.FC<CardProps>;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, ...rest } = props;

  const cardClassName = cn("rounded-[5px] shadow border p-4", className);

  return <article ref={ref} className={cardClassName} {...rest}></article>;
}) as CardComponent;

Card.Cover = ({ children, className }) => (
  <figure className={cn("mb-4", className)}>{children}</figure>
);

Card.Header = ({ children, className }) => (
  <header className={cn("text-lg font-semibold mb-2", className)}>
    {children}
  </header>
);

Card.Section = ({ children, className }) => (
  <section className={cn("text-lg font-semibold mb-2", className)}>
    {children}
  </section>
);

Card.Content = ({ children, className }) => (
  <main className={cn("text-sm text-gray-700", className)}>{children}</main>
);
Card.Footer = ({ children, className }) => (
  <footer className={cn("text-sm text-gray-700", className)}>{children}</footer>
);

export default Card;
