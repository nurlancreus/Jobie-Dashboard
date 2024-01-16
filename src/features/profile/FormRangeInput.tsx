import { ReactNode, isValidElement } from "react";
import InputLabel from "../../shared/InputLabel";
import {
  FieldError,
  Merge,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import InputError from "@/shared/InputError";

type FormRangeInputProps = {
  children: ReactNode;
  label: string;
  value: number
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
};

export default function FormRangeInput({
  children,
  label,
  value,
  error,
}: FormRangeInputProps) {
  if (!isValidElement(children)) return null;

  return (
    <div className="flex items-center gap-7 relative">
      <div className="w-16 h-16 rounded-full grid place-content-center text-base text-primary font-semibold border border-solid border-gray-100">
        {value}%
      </div>
      <div className="flex flex-col gap-4 grow">
        <InputLabel forId={children?.props.id}>{label}</InputLabel>

        {children}
        {error && <InputError>{error as string}</InputError>}
      </div>
    </div>
  );
}
