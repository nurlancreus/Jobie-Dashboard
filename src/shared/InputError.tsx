import { ReactNode } from "react";

type InputErrorProps = {
  variant?: "default" | "light";
  children: ReactNode;
};

export default function InputError({
  variant = "default",
  children,
}: InputErrorProps) {
  return (
    <p
      className={`mt-2 text-sm ${variant === "light" ? "text-red-500" : "text-red-600"}`}
    >
      {children}
    </p>
  );
}
