import { ReactNode } from "react";

type FormLabelProps = {
  children: ReactNode;
  forId: string;
};

export default function FormLabel({ children, forId }: FormLabelProps) {
  return (
    <label htmlFor={forId} className="text-base font-medium text-gray-700">
      {children}
    </label>
  );
}
