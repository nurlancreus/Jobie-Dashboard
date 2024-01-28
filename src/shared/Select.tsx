import { Chevron, SortIcon } from "@/assets/icons";
import { useSortParams } from "@/hooks/useSortParams";

type SelectProps = {
  variant?: "sort" | "default";
  id: string;
  options: Array<{ value: string; label: string }>;
  value: string;
};

export default function Select({
  variant = "default",
  id,
  options,
  value,
}: SelectProps) {
  const { paramsValue, handleParams } = useSortParams(id, value);

  return (
    <div className="relative w-fit">
      {variant === "sort" && (
        <span
          className={`absolute dark:[&_path]:fill-stone-200 [&_svg]:h-5 [&_svg]:w-5 xl:[&_svg]:h-auto xl:[&_svg]:w-auto ${variant === "sort" ? "bottom-3 left-3" : ""}`}
        >
          <SortIcon />
        </span>
      )}
      <select
        name={id}
        value={paramsValue}
        onChange={(e) => handleParams(e.target.value, id)}
        id={id}
        className={`cursor-pointer appearance-none rounded-[3rem] border border-solid border-primary-300 bg-transparent py-2 pr-12 text-base text-gray-700 focus:outline-primary-600 lg:py-3 lg:pr-[3.375rem] dark:border-stone-200 dark:focus:outline-neutral-200 ${
          variant === "sort"
            ? "pl-10 font-medium md:pl-12 lg:pl-[3.25rem]"
            : "pl-4 lg:pl-6"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-card">
            {option.label}
          </option>
        ))}
      </select>
      <span
        className={`absolute dark:[&_path]:stroke-stone-200 [&_svg]:h-4 [&_svg]:w-4 xl:[&_svg]:h-auto xl:[&_svg]:w-auto ${
          variant === "sort" ? "[&_path]:stroke-primary" : ""
        } bottom-1/2 right-5 translate-y-1/3`}
      >
        <Chevron />
      </span>
    </div>
  );
}
