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
    <div className="relative w-fit">
      {variant === "sort" && (
        <span className={`absolute ${variant === "sort" ? "left-3 bottom-3" : ""}`}>
          <SortIcon />
        </span>
      )}
      <select
        name={id}
        value={paramsValue}
        onChange={(e) => handleParams(e.target.value, id)}
        id={id}
        className={`border appearance-none bg-transparent border-solid text-gray-700 border-primary-300 py-2 lg:py-3 pr-12 lg:pr-[54px] rounded-[48px] cursor-pointer focus:outline-primary-600 ${
          variant === "sort" ? "pl-12 lg:pl-[52px] font-medium" : "pl-4 lg:pl-6"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        className={`absolute ${
          variant === "sort" ? "[&_path]:stroke-primary" : ""
        } right-5 bottom-5`}
      >
        <Chevron />
      </span>
    </div>
  );
}
