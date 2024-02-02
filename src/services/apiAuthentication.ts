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
    redirectTo: "https://jobbie-dashboard.netlify.app/update-password",
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
    avatar,
  } = updatedData;

  // 1. Update fields
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
  // if (fullname)
  //   updateData = { ...updateData, data: { ...updateData.data, fullname } };
  if (aboutme)
    updateData = { ...updateData, data: { ...updateData.data, aboutme } };
  if (address)
    updateData = { ...updateData, data: { ...updateData.data, address } };
  if (city) updateData = { ...updateData, data: { ...updateData.data, city } };
  if (country)
    updateData = { ...updateData, data: { ...updateData.data, country } };

  // If no fields or avatar to update, return early
  if (Object.keys(updateData).length === 0 && !avatar) return;

  // DELETE IF YOU WANT TO UPDATE USER INFO AND DELETE COMMENTS BELOW
  throw Error("Data mutations are deactivated in this demo app");

  /* 
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2. Upload the avatar image
  const avatarFile = avatar[0];
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  //const fileName = `avatar-${avatarFile.name}-${data.user.id}`;
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatarFile);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: updatedUserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: avatarUrl,
      },
    });

  if (updatedUserError) throw new Error(updatedUserError.message);

  return updatedUser;
  
  */
}

// DELETE USER AVATAR
export async function userDeleteAvatar() {
  // DELETE IF YOU WANT TO UPDATE USER INFO AND DELETE COMMENTS BELOW
  throw Error("Data mutations are deactivated in this demo app");

  /* 
  const userData = await getCurrentUser();

  if (!userData) return;
  const { avatar } = userData.user_metadata as { avatar: string };

  if (!avatar) return;

  const index = avatar.lastIndexOf("avatar");
  const fileName = avatar.slice(index);

  // LOOK
  const { error } = await supabase.storage
    .from("avatars")
    .remove([`folder/${fileName}`]);

  if (error) throw new Error(error.message);

  const { data: updatedUserData, error: userError } =
    await supabase.auth.updateUser({
      data: { avatar: null },
    });

  if (userError) throw new Error(userError.message);

  return updatedUserData;

  */
}
