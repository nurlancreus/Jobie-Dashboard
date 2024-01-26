import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userSignOut } from "@/services/apiAuthentication";

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signOut, isPending } = useMutation({
    mutationFn: userSignOut,
    onSuccess: () => {
      queryClient.removeQueries(); // remove all the query cache
      navigate("/sign-in", { replace: true });
    },
  });
  return { signOut, isPending };
}
