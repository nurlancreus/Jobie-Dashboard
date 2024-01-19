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
      <div className="grid-auto-fit-[14rem] grid gap-x-[1.875rem] gap-y-[2.5rem] lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
