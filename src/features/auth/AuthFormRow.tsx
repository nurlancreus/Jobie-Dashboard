import InputError from "@/shared/InputError";
import { ReactNode, isValidElement } from "react";
import type {
  FieldError,
  Merge,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";

type AuthFormRowProps = {
  children: ReactNode;
  label: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
};
export default function AuthFormRow({
  children,
  label,
  error,
}: AuthFormRowProps) {
  const id = isValidElement(children) && children.props.id;

  return (
    <div className="relative flex-1">
      <label
        htmlFor={id}
        className="mb-2 block text-base font-semibold capitalize text-white"
      >
        {label}
      </label>
      {children}
      {error && <InputError variant="light">{error as string}</InputError>}
    </div>
  );
}
