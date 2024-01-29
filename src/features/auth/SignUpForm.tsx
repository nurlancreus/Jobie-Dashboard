import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthFormRow from "./AuthFormRow";
import FormHeader from "./FormHeader";
import SubmitButton from "./SubmitButton";
import FormFooter from "./FormFooter";
import { useSignUp } from "./useSignUp";
import {
  SignUpFormSchema,
  type TUserSignUpParams,
  type TSignUpFormSchema,
} from "./authSchema";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TSignUpFormSchema>({
    resolver: zodResolver(SignUpFormSchema),
    values: {
      signUpFirstName: "",
      signUpLastName: "",
      signUpUsername: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpConfirmPassword: "",
    },
  });

  const watchPassword = watch("signUpPassword");

  const { signUp, isPending } = useSignUp();

  const onSubmit = (data: TSignUpFormSchema) => {
    const {
      signUpFirstName,
      signUpLastName,
      signUpUsername,
      signUpEmail,
      signUpPassword,
    } = data;

    const userData: Omit<TUserSignUpParams, "confirmpassword"> = {
      firstname: signUpFirstName,
      lastname: signUpLastName,
      username: signUpUsername,
      email: signUpEmail,
      password: signUpPassword,
    };

    signUp(userData, { onSettled: () => reset() });
  };

  return (
    <>
      <form id="signUpForm" name="signUpForm" onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>Sign up your account</FormHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <AuthFormRow label="first name" error={errors?.signUpFirstName?.message}>
              <input
                type="text"
                {...register("signUpFirstName")}
                id="signUpFirstName"
                disabled={isPending}
                autoComplete="name"
                className="auth-form-input"
              />
            </AuthFormRow>
            <AuthFormRow
              label="last name"
              error={errors?.signUpLastName?.message}
            >
              <input
                type="text"
                {...register("signUpLastName")}
                id="signUpLastName"
                disabled={isPending}
                autoComplete="lastname"
                className="auth-form-input"
              />
            </AuthFormRow>
          </div>
          <AuthFormRow label="username" error={errors?.signUpUsername?.message}>
            <input
              type="text"
              {...register("signUpUsername")}
              id="signUpUsername"
              disabled={isPending}
              autoComplete="username"
              className="auth-form-input"
            />
          </AuthFormRow>
          <AuthFormRow label="email" error={errors?.signUpEmail?.message}>
            <input
              type="email"
              {...register("signUpEmail")}
              id="signUpEmail"
              disabled={isPending}
              autoComplete="email"
              className="auth-form-input"
            />
          </AuthFormRow>
          <AuthFormRow label="password" error={errors?.signUpPassword?.message}>
            <input
              type="password"
              {...register("signUpPassword")}
              id="signUpPassword"
              disabled={isPending}
              autoComplete="password"
              className="auth-form-input"
            />
          </AuthFormRow>
          {watchPassword && (
            <AuthFormRow
              label="Confirm Password"
              error={errors?.signUpConfirmPassword?.message}
            >
              <input
                type="password"
                {...register("signUpConfirmPassword")}
                id="signUpConfirmPassword"
                disabled={isPending}
                autoComplete="confirm-password"
                className="auth-form-input"
              />
            </AuthFormRow>
          )}
        </div>
        <SubmitButton isLoading={isPending}>Sign Up</SubmitButton>
      </form>
      <FormFooter path="/sign-in" label="Sign In">
        Already have an account?
      </FormFooter>
    </>
  );
}
