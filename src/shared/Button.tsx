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
      className={`flex items-center justify-center gap-4 whitespace-nowrap font-medium rounded-[62px] px-4 text-lg lg:font-semibold capitalize transition-colors duration-200 h-10 lg:px-5 xl:h-12 xl:px-7 xxl:h-14 xxl:min-w-[148px] xxl:px-[30px] [&_path]:transition-colors [&_path]:duration-200 ${
        type === "submit"
          ? "bg-primary text-white hover:bg-primary-hover [&_path]:fill-white"
          : "bg-gray-100 text-primary hover:bg-gray-300 hover:text-white [&:hover_path]:fill-white [&_path]:fill-primary"
      }`}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
}
