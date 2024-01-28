import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { userRecoverPw } from "@/services/apiAuthentication";
import { type TUserRecoverPwParams } from "./authSchema";

export function useRecoverPw() {
  const navigate = useNavigate();
  const { mutate: recoverPw, isPending } = useMutation({
    mutationFn: (email: TUserRecoverPwParams["email"]) =>
      userRecoverPw({ email }),
    onSuccess: (user) => {
      console.log(user);
      // toast.success(
      //   "Password recovery link successfully sent, Please check your email and change your password",
      // );
      navigate("/app");
    },
    onError: (error) => {
      console.log("ERROR", error);
      //toast.error("Provided email is incorrect. Could not recover your password");
    },
  });
  return { recoverPw, isPending };
}
