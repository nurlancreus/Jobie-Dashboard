import { userDeleteAvatar } from "@/services/apiAuthentication";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteAvatar() {
  const queryClient = useQueryClient();

  const { mutate: deleteAvatar, isPending: isDeleting } = useMutation({
    mutationFn: userDeleteAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User avatar successfully deleted.");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteAvatar, isDeleting };
}
