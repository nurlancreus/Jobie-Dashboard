import Title from "@/shared/Title";
import { ReactNode } from "react";

type FormFieldHeaderProps = {
  children: ReactNode;
  button?: JSX.Element;
};

export default function FormFieldHeader({ children, button}: FormFieldHeaderProps) {
  return (
    <div className="flex items-center gap-8 mb-[30px]">
      <Title fs={18} fw="semibold" caseForm="uppercase">
        {children}
      </Title>
      <hr className="grow bg-gray-200" />
      {button && button}
    </div>
  );
}
