import { Dots } from "@/assets/icons";

type ActionButtonProps = {
  onClick?: () => void;
};

export default function ActionButton({ onClick }: ActionButtonProps) {
  return (
    <button
      className="bg-transparent outline-transparent border-none"
      onClick={() => onClick?.()}
    >
      <Dots />
    </button>
  );
}
