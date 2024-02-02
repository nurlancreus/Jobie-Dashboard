import { CloseIcon } from "@/assets/icons";

type CloseButton = {
  close: () => void;
};

export default function CloseButton({ close }: CloseButton) {
  return (
    <button
      type="button"
      className="absolute right-6 top-4 border-none bg-transparent outline-transparent xl:right-7 xl:top-6"
      onClick={close}
    >
      <CloseIcon />
    </button>
  );
}
