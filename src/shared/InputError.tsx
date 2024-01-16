import { ReactNode } from "react";

type InputErrorProps = {
  children: ReactNode;
};

export default function InputError({ children }: InputErrorProps) {
  return (
    <p className="absolute bottom-[-24px] text-sm text-red-600">{children}</p>
  );
}
