import { useState } from "react";
import { useFormContext } from "react-hook-form";
import ProfileFormField from "./ProfileFormField";
import ProfileFormRow from "./ProfileFormRow";
import { type TUserUpdateSchema } from "./profileSchema";

type GeneralFieldsProps = {
  isUpdating: boolean;
};

export default function GeneralFields({
  isUpdating = false,
}: GeneralFieldsProps) {
  const [showPasswords, setShowPasswords] = useState<
    Array<"profilePassword" | "profileConfirmPassword">
  >([]);

  const handleTogglePasswords = (
    id: "profilePassword" | "profileConfirmPassword",
  ) => {
    setShowPasswords((prev) =>
      prev.includes(id) ? prev.filter((field) => field !== id) : [...prev, id],
    );
  };

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<TUserUpdateSchema>();

  const [watchPasswordField, watchConfirmPasswordField] = watch([
    "profilePassword",
    "profileConfirmPassword",
  ]);

  return (
    <ProfileFormField title="generals">
      <ProfileFormRow
        label="First Name"
        error={errors?.profileFirstName?.message}
      >
        <input
          type="text"
          id="profileFirstName"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input"
          {...register("profileFirstName")}
        />
      </ProfileFormRow>
      <ProfileFormRow
        label="Middle Name"
        error={errors?.profileMiddleName?.message}
      >
        <input
          type="text"
          id="profileMiddleName"
          autoComplete="on"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input"
          {...register("profileMiddleName")}
        />
      </ProfileFormRow>
      <ProfileFormRow
        label="Last Name"
        error={errors?.profileLastName?.message}
      >
        <input
          type="text"
          id="profileLastName"
          autoComplete="on"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input"
          {...register("profileLastName")}
        />
      </ProfileFormRow>
      <ProfileFormRow label="Username" error={errors?.username?.message}>
        <input
          type="text"
          id="username"
          autoComplete="on"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input"
          {...register("username")}
        />
      </ProfileFormRow>
      <ProfileFormRow
        label="Password"
        inputType="password"
        disabled={watchPasswordField === ""}
        onTogglePassword={handleTogglePasswords}
        showPassword={showPasswords.includes("profilePassword")}
        error={errors?.profilePassword?.message}
      >
        <input
          type={showPasswords.includes("profilePassword") ? "text" : "password"}
          id="profilePassword"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input"
          autoComplete="off"
          {...register("profilePassword")}
        />
      </ProfileFormRow>
      <ProfileFormRow
        label="Re-Type Password"
        inputType="password"
        disabled={watchConfirmPasswordField === ""}
        onTogglePassword={handleTogglePasswords}
        showPassword={showPasswords.includes("profileConfirmPassword")}
        error={errors?.profileConfirmPassword?.message}
      >
        <input
          type={
            showPasswords.includes("profileConfirmPassword")
              ? "text"
              : "password"
          }
          id="profileConfirmPassword"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input"
          autoComplete="off"
          {...register("profileConfirmPassword")}
        />
      </ProfileFormRow>
    </ProfileFormField>
  );
}
