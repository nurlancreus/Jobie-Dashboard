import { updateCurrentUser } from "@/services/apiAuthentication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TUserUpdateParams } from "./profileSchema";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: (data: Partial<TUserUpdateParams>) => updateCurrentUser(data),
    onSuccess: () => {
      // queryClient.setQueryData(["user"], user); // manually setting cash
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User account successfully updated.");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
