import {
  Fragment,
  InputHTMLAttributes,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../../utils/tailwind.utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  size: number;
}

let activePinIndex: number;
const PinCode = (props: Props) => {
  const [pin, setPin] = useState<Array<string>>(new Array(props.size).fill(""));
  const [activePin, setActivePin] = useState<number>(0);
  const pinRef = useRef<HTMLInputElement>(null);

  const defaultStyle = cn(
    "block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-[5px] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
    props.className
  );

  const handleChangePin = (value: string) => {
    const temp: Array<string> = [...pin];
    temp[activePinIndex] = value.substring(value.length - 1);

    if (!value) setActivePin(activePinIndex - 1);
    else setActivePin(activePinIndex + 1);

    if (pin.length === activePinIndex + 1) {
      pinRef.current?.blur();
    }

    setPin(temp);
  };

  const handleKeydown = (
    { key, currentTarget }: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = currentTarget;
    activePinIndex = index;
    if (key === "Backspace") {
      if (value || activePinIndex === 0) return;
      setActivePin(activePinIndex - 1);
    }
  };

  useEffect(() => {
    if (pinRef.current) {
      pinRef.current.focus();
    }
  }, [activePin]);

  return (
    <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
      {pin.map((_, index) => (
        <Fragment key={index}>
          <input
            ref={index === activePin ? pinRef : null}
            type="text"
            maxLength={1}
            className={defaultStyle}
            onChange={(e) => handleChangePin(e.target.value)}
            onKeyDown={(e) => handleKeydown(e, index)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default PinCode;
