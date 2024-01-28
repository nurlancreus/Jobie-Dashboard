import { ReactNode } from "react";
import Title from "@/shared/Title";

type FormFieldHeaderProps = {
  children: ReactNode;
  button?: JSX.Element;
};

export default function FormFieldHeader({ children, button}: FormFieldHeaderProps) {
  return (
    <div className="flex items-center gap-8 mb-[1.875rem]">
      <Title fs={18} fw="semibold" caseForm="uppercase">
        {children}
      </Title>
      <hr className="grow bg-gray-200" />
      {button && button}
    </div>
  );
}
