import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import cn from "../../utils/cn";

// `bg-purple-500 btn ${className} ${
//   variant === "outline"
//     ? "border border-purple-500 bg-opacity-10"
//     : ""
// }`

const Button = ({
  className,
  outline,
}: {
  className?: string;
  outline?: boolean;
}) => {
  return (
    <button
      className={cn(
        "bg-purple-500 btn",
        outline && "border border-white-500 bg-opacity-70",
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;
