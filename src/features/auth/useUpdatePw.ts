import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userUpdatePw } from "@/services/apiAuthentication";
import { type TUserUpdatePwParams } from "./authSchema";

export function useUpdatePw() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: updatePw, isPending } = useMutation({
    mutationFn: (newpassword: TUserUpdatePwParams["newpassword"]) =>
      userUpdatePw({ newpassword }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user); // manually setting cache
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/app");
      toast.success("Password successfully updated");
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(`Could not change password. ${error.message}`);
    },
  });
  return { updatePw, isPending };
}
