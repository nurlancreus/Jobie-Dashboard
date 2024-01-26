import logo from "@/assets/images/logo.svg";
import { ReactNode } from "react";

type FormHeaderProps = {
  children: ReactNode;
};

export default function FormHeader({ children }: FormHeaderProps) {
  return (
    <header className="mb-6 flex flex-col items-center gap-4">
      <img src={logo} alt="Logo" width={140} height={52} />
      <h1 className="text-lg font-medium text-white">{children}</h1>
    </header>
  );
}
