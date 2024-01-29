import { type TUserUpdateParams } from "@/features/profile/profileSchema";
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
        firstname,
        lastname,
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
export async function userUpdatePw({
  newpassword,
}: Omit<TUserUpdatePwParams, "confirmnewpassword">) {
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

// UPDATE CURRENT USER
export async function updateCurrentUser(
  updatedData: Partial<TUserUpdateParams>,
) {
  const {
    firstname,
    lastname,
    middlename,
    username,
    email,
    password,
    mobilephone: phone,
    aboutme,
    address,
    selectcity: city,
    selectcountry: country,
  } = updatedData;

  let fullname;

  if ([firstname, lastname].every(Boolean))
    fullname = `${firstname} ${lastname}`;

  // 1. Update fullname OR password
  type TUpdateData = {
    [key: string]: string | (Record<string, string> | undefined);

    data?: Record<string, string>;
  };

  let updateData: TUpdateData = {};

  if (email) updateData = { ...updateData, email };
  if (phone) updateData = { ...updateData, phone };
  if (password) updateData = { ...updateData, password };
  if (username)
    updateData = { ...updateData, data: { ...updateData.data, username } };
  if (firstname)
    updateData = { ...updateData, data: { ...updateData.data, firstname } };
  if (lastname)
    updateData = { ...updateData, data: { ...updateData.data, lastname } };
  if (middlename)
    updateData = { ...updateData, data: { ...updateData.data, middlename } };
  if (fullname)
    updateData = { ...updateData, data: { ...updateData.data, fullname } };
  if (aboutme)
    updateData = { ...updateData, data: { ...updateData.data, aboutme } };
  if (address)
    updateData = { ...updateData, data: { ...updateData.data, address } };
  if (city) updateData = { ...updateData, data: { ...updateData.data, city } };
  if (country)
    updateData = { ...updateData, data: { ...updateData.data, country } };

  
  // If no fields to update, return early
  if (Object.keys(updateData).length === 0) return;
  
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  return data;
}
