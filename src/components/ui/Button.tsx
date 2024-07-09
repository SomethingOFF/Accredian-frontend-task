import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const ButtonVariants = cva("px-4 py-2 rounded-md", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-black",
      link: "text-primary underline underline-offset-4 font-medium",
      default: "bg-gray-500 hover:bg-gray-600 text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ButtonProps = VariantProps<typeof ButtonVariants> &
  ComponentProps<"button">;
const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(ButtonVariants({ variant }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
