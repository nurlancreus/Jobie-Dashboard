import { useMutation } from "@tanstack/react-query";
import { userRecoverPw } from "@/services/apiAuthentication";
import { type TUserRecoverPwParams } from "./authSchema";

export function useRecoverPw() {
  const { mutate: recoverPw, isPending } = useMutation({
    mutationFn: (email: TUserRecoverPwParams["email"]) =>
      userRecoverPw({ email }),
    onSuccess: () => {
      // toast.success(
      //   "Password reset link successfully sent, Please check your email",
      // );
    },
    onError: (error) => {
      console.log("ERROR", error);
      //toast.error("Provided email is incorrect. Could not recover your password");
    },
  });
  return { recoverPw, isPending };
}
