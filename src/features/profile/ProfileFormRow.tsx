import { EnvelopIcon, PhoneIcon, WhatsAppIcon } from "@/assets/icons";
import { ReactNode, isValidElement } from "react";
import InputLabel from "../../shared/InputLabel";
import {
  FieldError,
  Merge,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import InputError from "@/shared/InputError";

// type InputPasswordType = {
//   inputType: "password";
//   showPassword: boolean;
//   disabled: boolean;
//   onTogglePassword: (id: "profilePassword" | "profileConfirmPassword") => void;
// };

// type InputTextType = {
//   inputType: "text";
// };

type ProfileFormRowProps = {
  children: ReactNode;
  label: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
  inputType?: "text" | "password";
  showPassword?: boolean;
  disabled?: boolean;
  onTogglePassword?: (id: "profilePassword" | "profileConfirmPassword") => void;
};

export default function ProfileFormRow({
  children,
  label,
  inputType = "text",
  error,
  showPassword,
  disabled,
  onTogglePassword,
}: ProfileFormRowProps) {
  let icon: JSX.Element;

  if (!isValidElement(children)) return null;

  const id = children?.props.id;

  if (label.toLocaleLowerCase().includes("phone")) icon = <PhoneIcon />;
  if (label.toLocaleLowerCase().includes("email")) icon = <EnvelopIcon />;
  if (label.toLocaleLowerCase().includes("whatsapp")) icon = <WhatsAppIcon />;

  const showIcon = [
    label.toLocaleLowerCase().includes("phone"),
    label.toLocaleLowerCase().includes("email"),
    label.toLocaleLowerCase().includes("whatsapp"),
  ].some(Boolean);

  return (
    <div className="flex flex-col gap-10 relative">
      <InputLabel forId={id}>{label}</InputLabel>

      {showIcon && <span className="absolute left-6 bottom-5">{icon!}</span>}

      {children}

      {inputType === "password" && (
        <button
          type="button"
          disabled={disabled}
          className={`bg-transparent border-none text-lg font-semibold  uppercase absolute bottom-5 right-5 disabled:cursor-not-allowed disabled:text-gray-200 ${
            showPassword ? "text-gray-200" : "text-primary"
          }`}
          onClick={() =>
            onTogglePassword?.(
              id as "profilePassword" | "profileConfirmPassword",
            )
          }
        >
          Show
        </button>
      )}
      {error && <InputError>{error as string}</InputError>}
    </div>
  );
}
