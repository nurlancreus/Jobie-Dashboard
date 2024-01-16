import { ReactNode, isValidElement } from "react";
import {
  FieldError,
  Merge,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import InputLabel from "../../shared/InputLabel";
import InputError from "@/shared/InputError";

type FormTextAreaProps = {
  children: ReactNode;
  label: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
};

export default function FormTextArea({
  children,
  label,
  error,
}: FormTextAreaProps) {
  if (!isValidElement(children)) return null;

  return (
    <div className="flex flex-col gap-4 relative">
      <InputLabel forId={children?.props.id}>{label}</InputLabel>
      {children}
      {error && <InputError>{error as string}</InputError>}
    </div>
  );
}
