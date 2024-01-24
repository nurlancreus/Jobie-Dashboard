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
      className={`flex h-10 items-center justify-center gap-4 whitespace-nowrap rounded-[62px] px-4 text-lg font-medium capitalize transition-colors duration-200 lg:px-5 lg:font-semibold xl:h-12 xl:px-7 xxl:h-14 xxl:min-w-[148px] xxl:px-[30px] [&_path]:transition-colors [&_path]:duration-200 ${
        type === "submit"
          ? "bg-primary text-white hover:bg-primary-hover [&_path]:fill-white"
          : "[&:hover_path]:fill-white bg-gray-100 text-primary hover:bg-gray-300 hover:text-white dark:text-slate-200 dark:hover:bg-transparent [&_path]:fill-primary dark:[&_path]:fill-slate-200"
      }`}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
}
