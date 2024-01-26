import validator from "validator";
import { z } from "zod";

export type TSignUpFormSchema = z.infer<typeof SignUpFormSchema>;
export type TSignInFormSchema = z.infer<typeof SignInFormSchema>;
export type TRecoverPwFormSchema = z.infer<typeof RecoverPwFormSchema>;

export const SignUpFormSchema = z
  .object({
    signUpUsername: z.string().min(1, "This field is required, make changes"),
    signUpEmail: z
      .string()
      .min(1, "This field is required, make changes")
      .email("This is not a valid email.")
      .refine(validator.isEmail),
    signUpPassword: z
      .string()
      .min(1, "This field is required, make changes")
      .min(8, "Password needs a minimum of 8 characters")
      .regex(/[0-9]/g, "Need a digit")
      .regex(/[!,@,#,$,%,^,&,*]/g, "Need a special character !@#$%^&*"),
    signUpConfirmPassword: z
      .string()
      .min(1, "This field is required, make changes"),
  })
  .refine((data) => data.signUpConfirmPassword === data.signUpPassword, {
    message: "Passwords need to match",
    path: ["signUpConfirmPassword"],
  });

export const SignInFormSchema = z.object({
  signInEmail: z
    .string()
    .min(1, "This field is required, make changes")
    .email("This is not a valid email.")
    .refine(validator.isEmail),
  signInPassword: z
    .string()
    .min(1, "This field is required, make changes")
    .min(8, "Password needs a minimum of 8 characters")
    .regex(/[0-9]/g, "Need a digit")
    .regex(/[!,@,#,$,%,^,&,*]/g, "Need a special character !@#$%^&*"),
});

export const RecoverPwFormSchema = z.object({
  recoverPwEmail: z
    .string()
    .min(1, "This field is required, make changes")
    .email("This is not a valid email.")
    .refine(validator.isEmail),
});

// TYPES
type RemoveAuthPrefix<T> = {
  [K in keyof T as K extends `signup${infer U}`
    ? U
    : K extends `signin${infer V}`
      ? V
      : K extends `recoverpw${infer Z}`
        ? Z
        : K]: T[K];
};

type GetAuthParams<T> = {
  [Property in keyof T as `${Lowercase<string & Property>}`]: T[Property];
};

// SIGN UP
export type TUserSignUpParams = RemoveAuthPrefix<
  GetAuthParams<TSignUpFormSchema>
>;

// SIGN IN
export type TUserSignInParams = RemoveAuthPrefix<
  GetAuthParams<TSignInFormSchema>
>;

// RECOVER PASSWORD
export type TUserRecoverPwParams = RemoveAuthPrefix<
  GetAuthParams<TRecoverPwFormSchema>
>;
