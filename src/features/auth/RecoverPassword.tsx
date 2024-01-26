import AuthFormRow from "./AuthFormRow";
import FormHeader from "./FormHeader";
import SubmitButton from "./SubmitButton";
import FormFooter from "./FormFooter";
import { RecoverPwFormSchema, type TRecoverPwFormSchema } from "./authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useRecoverPw from "./useRecoverPw";

export default function RecoverPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRecoverPwFormSchema>({
    resolver: zodResolver(RecoverPwFormSchema),
    values: {
      recoverPwEmail: "",
    },
  });

  const { recoverPw, isPending } = useRecoverPw();

  const onSubmit = ({ recoverPwEmail }: TRecoverPwFormSchema) => {
    
    recoverPw(recoverPwEmail, { onSuccess: () => reset() });
  };

  return (
    <>
      <form
        id="recoverPwForm"
        name="recoverPwForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormHeader>Forgot Password</FormHeader>

        <div className="flex flex-col gap-4">
          <AuthFormRow label="email" error={errors?.recoverPwEmail?.message}>
            <input
              type="email"
              {...register("recoverPwEmail")}
              id="recoverPwEmail"
              disabled={isPending}
              autoComplete="email"
              className="auth-form-input"
            />
          </AuthFormRow>
        </div>
        <SubmitButton isLoading={isPending}>Submit</SubmitButton>
      </form>
      <FormFooter path="/sign-in" label="Sign In">
        Remember Password?
      </FormFooter>
    </>
  );
}
