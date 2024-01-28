import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userUpdatePw } from "@/services/apiAuthentication";
import { type TUserUpdatePwParams } from "./authSchema";
import { useNavigate } from "react-router-dom";

export function useUpdatePw() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: updatePw, isPending } = useMutation({
    mutationFn: (newpassword: TUserUpdatePwParams["newpassword"]) =>
      userUpdatePw({ newpassword }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user); // manually setting cash
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/app");
      // toast.success(
      //   "Password successfully changed",
      // );
    },
    onError: (error) => {
      console.log("ERROR", error);
      //toast.error("Could not change password. Please, try again");
    },
  });
  return { updatePw, isPending };
}
