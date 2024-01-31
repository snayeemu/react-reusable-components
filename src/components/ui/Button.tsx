import cn from "../../utils/cn";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  forwardRef,
} from "react";

// `bg-purple-500 btn ${className} ${
//   variant === "outline"
//     ? "border border-purple-500 bg-opacity-10"
//     : ""
// }`

type TProps = {
  className?: string;
  variant?: string;
  children: ReactNode;
};

type TProps2 = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { variant?: string };

type TRef = HTMLButtonElement;

const Button = forwardRef<TRef, TProps2>(
  ({ className, variant, children, ...rest }, ref) => {
    const getVariant = (variant: string | undefined) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
