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
      className="grid h-fit w-fit place-content-center rounded-full border border-solid border-primary-500 bg-transparent p-2 outline-transparent transition-colors duration-200 hover:bg-primary 
       focus:outline-primary-600 disabled:cursor-not-allowed disabled:bg-primary xl:p-3 
       dark:border-none dark:disabled:border-none [&:disabled_path]:fill-white [&:hover_path]:fill-white [&_path]:fill-primary [&_path]:transition-colors [&_path]:duration-200 [&_svg]:h-4 [&_svg]:w-4 lg:[&_svg]:h-5 lg:[&_svg]:w-5 xl:[&_svg]:h-auto xl:[&_svg]:w-auto"
    >
      {type === "list" ? <ListIcon /> : <GridIcon />}
    </button>
  );
}
