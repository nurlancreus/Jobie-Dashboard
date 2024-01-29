import { ReactNode, isValidElement } from "react";
import {
  FieldError,
  Merge,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import InputLabel from "@/shared/InputLabel";
import InputError from "@/shared/InputError";

type FormRangeInputProps = {
  children: ReactNode;
  label: string;
  value?: number;
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
    <div className="relative flex items-center gap-7">
      <div className="grid h-12 w-12 place-content-center rounded-full border border-solid border-gray-100 text-base font-semibold text-primary lg:h-14 lg:w-14 xl:h-16 xl:w-16 dark:border-neutral-200/80 dark:text-slate-200">
        {value ?? 0}%
      </div>
      <div className="flex grow flex-col gap-4">
        <InputLabel forId={children?.props.id}>{label}</InputLabel>

        {children}
        {error && <InputError>{error as string}</InputError>}
      </div>
    </div>
  );
}
