import { EnvelopIcon, PhoneIcon, WhatsAppIcon } from "@/assets/icons";
import { ReactNode, isValidElement } from "react";
import InputLabel from "@/shared/InputLabel";
import type {
  FieldError,
  Merge,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import InputError from "@/shared/InputError";

type InputPasswordTypeProps = {
  inputType?: "password";
  showPassword: boolean;
  disabled: boolean;
  onTogglePassword: (id: "profilePassword" | "profileConfirmPassword") => void;
};

type InputTextTypeProps = {
  inputType?: "text";
  showPassword?: null;
  disabled?: false;
  onTogglePassword?: null;
};

type ProfileFormRowProps = {
  children: ReactNode;
  label: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<FieldValues>>
    | undefined;
} & (InputTextTypeProps | InputPasswordTypeProps);

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

  const id = children.props.id ?? children.props.children[0].props.id;

  if (label.toLocaleLowerCase().includes("phone")) icon = <PhoneIcon />;
  if (label.toLocaleLowerCase().includes("email")) icon = <EnvelopIcon />;
  if (label.toLocaleLowerCase().includes("whatsapp")) icon = <WhatsAppIcon />;

  const showIcon = [
    label.toLocaleLowerCase().includes("phone"),
    label.toLocaleLowerCase().includes("email"),
    label.toLocaleLowerCase().includes("whatsapp"),
  ].some(Boolean);

  return (
    <div>
      <div className="relative flex flex-col gap-6 lg:gap-8 xl:gap-10">
        <InputLabel forId={id}>{label}</InputLabel>

        {showIcon && (
          <span className="absolute bottom-4 left-4 lg:bottom-5 lg:left-6 dark:[&_path]:fill-neutral-100/50">
            {icon!}
          </span>
        )}

        {children}

        {inputType === "password" && (
          <button
            type="button"
            disabled={disabled}
            className={`absolute bottom-4 right-3 border-none bg-transparent text-base font-semibold uppercase disabled:cursor-not-allowed disabled:text-gray-200 lg:bottom-5 lg:right-5 xl:text-lg dark:disabled:text-neutral-600 ${
              showPassword
                ? "text-gray-200 dark:text-neutral-200"
                : "text-primary dark:text-neutral-400"
            }`}
            onClick={() =>
              onTogglePassword?.(
                id as "profilePassword" | "profileConfirmPassword",
              )
            }
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <InputError>{error as string}</InputError>}
    </div>
  );
}
