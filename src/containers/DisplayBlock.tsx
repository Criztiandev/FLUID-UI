import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const DisplayBlock = (props: Props) => {
  return (
    <div className="border rounded-md border-black h-full w-full p-4 m-4 max-w-[300px] mx-auto">
      <h1 className="text-xl font-bold text-center mb-4">{props.title}</h1>
      <div className="grid grid-cols-2 gap-4">{props.children}</div>
    </div>
  );
};

export default DisplayBlock;
