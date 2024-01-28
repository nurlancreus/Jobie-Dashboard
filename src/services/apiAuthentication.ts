import { supabase } from "./supabase";
import type {
  TUserRecoverPwParams,
  TUserSignInParams,
  TUserSignUpParams,
  TUserUpdatePwParams,
} from "@/features/auth/authSchema";

// SIGN UP
export async function userSignUp({
  firstname,
  lastname,
  username,
  email,
  password,
}: Omit<TUserSignUpParams, "confirmpassword">) {
  const fullname = `${firstname} ${lastname}`;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        username,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

// SIGN IN
export async function userSignIn({ email, password }: TUserSignInParams) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// RECOVER PASSWORD
export async function userRecoverPw({ email }: TUserRecoverPwParams) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/update-password",
  });

  if (error) throw new Error(error.message);

  return data;
}

// UPDATE PASSWORD
export async function userUpdatePw({ newpassword }: Omit<TUserUpdatePwParams, "confirmnewpassword">) {
  const { data, error } = await supabase.auth.updateUser({
    password: newpassword,
  });

  if (error) throw new Error(error.message);

  return data;
}
// GET CURRENT USER
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}

// SIGN OUT
export async function userSignOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
