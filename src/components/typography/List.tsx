import { ReactNode } from "react";

interface Base {
  className?: string;
  children?: ReactNode;
}

interface Props extends Base {}

const List = (props: Props) => {
  return (
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      {props.children}
    </ul>
  );
};

interface ListItemProps extends Base {
  as?: "link" | "button" | "li";
}
const ListItem = (props: ListItemProps) => {
  return <li className="">{props.children}</li>;
};

List.Item = ListItem;

export default List;
