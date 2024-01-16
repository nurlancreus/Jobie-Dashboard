import { ReactNode } from "react";
import FormFieldHeader from "./FormFieldHeader";

type ProfileFormFieldProps = {
  children: ReactNode;
  title: "generals" | "contact";
};

export default function ProfileFormField({
  children,
  title,
}: ProfileFormFieldProps) {
  return (
    <div>
      {/* Form Group Header */}
      <FormFieldHeader>{title}</FormFieldHeader>

      {/* Form Group Inputs */}
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-[40px]">{children}</div>
    </div>
  );
}
