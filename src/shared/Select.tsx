import { Chevron, SortIcon } from "@/assets/icons";
import useSortParams from "@/hooks/useSortParams";

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
    <div
      className={`relative w-fit [&>svg]:absolute ${
        variant === "sort"
          ? "[&>svg:first-child]:left-3 [&>svg:first-child]:bottom-3 [&>svg:last-child>path]:stroke-primary"
          : ""
      } [&>svg:last-child]:right-5 [&>svg:last-child]:bottom-5`}
    >
      {variant === "sort" && <SortIcon />}
      <select
        name={id}
        value={paramsValue}
        onChange={(e) => handleParams(e.target.value, id)}
        id={id}
        className={`border appearance-none bg-transparent border-solid text-gray-700 border-primary-300 py-3 pr-[54px] rounded-[48px] cursor-pointer focus:outline-primary-600 ${
          variant === "sort" ? "pl-[52px] font-medium" : "pl-[24px]"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Chevron />
    </div>
  );
}
