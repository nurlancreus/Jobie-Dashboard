import { ReactNode } from "react";
import { MiniLoader } from "@/assets/icons";

type SubmitButtonProps = {
  children: ReactNode;
  isLoading: boolean;
};

export default function SubmitButton({
  children,
  isLoading,
}: SubmitButtonProps) {
  return (
    <button
      disabled={isLoading}
      className="mt-6 flex h-12 w-full place-content-center items-center justify-center gap-2 whitespace-nowrap rounded-lg border-none bg-body text-base font-semibold text-primary outline-transparent disabled:cursor-not-allowed dark:text-slate-200"
    >
      {isLoading && (
        <span className="[&_svg]:h-6 [&_svg]:w-6">
          <MiniLoader />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
