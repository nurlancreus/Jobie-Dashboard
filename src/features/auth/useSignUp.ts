import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { userSignUp } from "@/services/apiAuthentication";
import { type TUserSignUpParams } from "./authSchema";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({
      firstname,
      lastname,
      username,
      email,
      password,
    }: Omit<TUserSignUpParams, "confirmpassword">) =>
      userSignUp({ firstname, lastname, username, email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/");
      toast.success(
        "Account successfully created! Please, verify the new account from the user's email address.",
      );
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error("Could not create new account. Please, try again");
    },
  });

  return { signUp, isPending };
}
