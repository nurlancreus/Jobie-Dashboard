import { ListIcon, GridIcon } from "@/assets/icons";
import useLayoutParams from "@/hooks/useLayoutParams";

export default function LayoutButtons() {
  return (
    <div className="flex items-center gap-4">
      <LayoutButton key="listButton" type="list" />
      <LayoutButton key="gridButton" type="grid" />
    </div>
  );
}

type LayoutButtonProps = {
  type: "grid" | "list";
};

function LayoutButton({ type }: LayoutButtonProps) {
  const { layoutParamsValue, handleLayoutParams } = useLayoutParams();

  return (
    <button
      type="button"
      onClick={() => handleLayoutParams(type)}
      disabled={layoutParamsValue === type}
      className="rounded-full w-12 h-12 grid place-content-center transition-colors duration-200 [&_path]:transition-colors [&_path]:duration-200 border border-solid outline-transparent border-primary-500 focus:outline-primary-600 
       bg-transparent [&:hover_path]:fill-white hover:bg-primary [&_path]:fill-primary 
       [&:disabled_path]:fill-white disabled:bg-primary disabled:cursor-not-allowed"
    >
      {type === "list" ? <ListIcon /> : <GridIcon />}
    </button>
  );
}
