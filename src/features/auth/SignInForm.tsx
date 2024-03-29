import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthFormRow from "./AuthFormRow";
import FormHeader from "./FormHeader";
import SubmitButton from "./SubmitButton";
import FormFooter from "./FormFooter";
import { useSignIn } from "./useSignIn";
import InputError from "@/shared/InputError";
import {
  SignInFormSchema,
  type TUserSignInParams,
  type TSignInFormSchema,
} from "./authSchema";

const email = import.meta.env.VITE_EMAIL;
const password = import.meta.env.VITE_PASSWORD;

export default function SIgnInForm() {
  const [searchParams] = useSearchParams();
  const routeError = searchParams.get("message") ?? null;

  const { signIn, isPending } = useSignIn();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignInFormSchema>({
    resolver: zodResolver(SignInFormSchema),
    values: {
      signInEmail: email,
      signInPassword: password,
    },
  });

  const onSubmit = (data: TSignInFormSchema) => {
    const { signInEmail, signInPassword } = data;

    const userData: TUserSignInParams = {
      email: signInEmail,
      password: signInPassword,
    };

    signIn(userData, {
      onSettled: () => reset(),
    });
  };

  return (
    <>
      <form id="signInForm" name="signInForm" onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>Sign in your account</FormHeader>
        <div className="flex flex-col gap-4">
          <AuthFormRow label="email" error={errors?.signInEmail?.message}>
            <input
              type="email"
              {...register("signInEmail")}
              id="signInEmail"
              disabled={isPending}
              autoComplete="email"
              className="auth-form-input"
            />
          </AuthFormRow>
          <AuthFormRow label="password" error={errors?.signInPassword?.message}>
            <input
              type="password"
              {...register("signInPassword")}
              id="signInPassword"
              disabled={isPending}
              autoComplete="password"
              className="auth-form-input"
            />
          </AuthFormRow>

          <Link to="/forgot-password" className="ml-auto text-base text-white">
            Forgot Password?
          </Link>
        </div>
        <SubmitButton isLoading={isPending}>Sign In</SubmitButton>
      </form>

      <FormFooter path="/sign-up" label="Sign Up">
        Don't have an account?
      </FormFooter>
      {routeError && <InputError variant="light">{routeError}</InputError>}
    </>
  );
}
