import { useForm } from "react-hook-form";
import { UpdatePwFormSchema, type TUpdatePwFormSchema } from "./authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthFormRow from "./AuthFormRow";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import SubmitButton from "./SubmitButton";
import { useUpdatePw } from "./useUpdatePw";

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TUpdatePwFormSchema>({
    resolver: zodResolver(UpdatePwFormSchema),
    values: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const watchPassword = watch("newPassword");

  const { updatePw, isPending } = useUpdatePw();

  const onSubmit = ({ newPassword }: TUpdatePwFormSchema) => {
    updatePw(newPassword, {onSuccess: () => reset()})
  };

  return (
    <>
      <form
        id="recoverPwForm"
        name="recoverPwForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormHeader>Update Password</FormHeader>

        <div className="flex flex-col gap-4">
          <AuthFormRow label="new password" error={errors?.newPassword?.message}>
            <input
              type="password"
              {...register("newPassword")}
              id="newPassword"
              disabled={isPending}
              autoComplete="newPassword"
              className="auth-form-input"
            />
          </AuthFormRow>
          {watchPassword && (
            <AuthFormRow
              label="confirm new password"
              error={errors?.confirmNewPassword?.message}
            >
              <input
                type="password"
                {...register("confirmNewPassword")}
                id="confirmNewPassword"
                disabled={isPending}
                autoComplete="confirm-password"
                className="auth-form-input"
              />
            </AuthFormRow>
          )}
        </div>
        <SubmitButton isLoading={isPending}>Submit</SubmitButton>
      </form>
      <FormFooter path="/sign-in" label="Sign In">
        Remember Password?
      </FormFooter>
    </>
  );
}
