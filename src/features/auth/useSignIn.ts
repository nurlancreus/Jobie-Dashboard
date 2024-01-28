import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userSignIn } from "@/services/apiAuthentication";
import { type TUserSignInParams } from "./authSchema";

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectTo = searchParams.get("redirectTo") ?? null;

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ email, password }: TUserSignInParams) =>
      userSignIn({ email, password }),
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: ["user"] }); // Invalidate query so redirect will also work after being logged out
      queryClient.setQueryData(["user"], user.user); // manually setting data into the cache

      redirectTo
        ? navigate(redirectTo, { replace: true })
        : navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { signIn, isPending };
}
