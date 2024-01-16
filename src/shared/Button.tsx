import { ReactNode } from "react";

type ButtonProps = {
  type: "submit" | "button" | "reset";
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
  type = "submit",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center transition-colors duration-200 gap-4 [&_path]:transition-colors [&_path]:duration-200 h-14 min-w-[148px] font-semibold capitalize whitespace-nowrap px-[30px] text-lg rounded-[62px] ${
        type === "submit"
          ? "bg-primary text-white [&_path]:fill-white hover:bg-primary-hover"
          : "bg-gray-100 text-primary [&_path]:fill-primary hover:bg-gray-300 hover:text-white [&:hover_path]:fill-white"
      }`}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
}
