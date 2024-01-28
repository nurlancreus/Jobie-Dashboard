import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "@/services/apiAuthentication";
import { type TUserSignUpParams } from "./authSchema";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({
      username,
      email,
      password,
    }: Omit<TUserSignUpParams, "confirmpassword">) =>
      userSignUp({ username, email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/");
      // toast.success(
      //   "Account successfully created! Please, verify the new account from the user's email address.",
      // );
    },
  });

  return { signUp, isPending };
}
