import { useSearchParams } from "react-router-dom";

type FilterTabsProps = {
  filterField: string;
  options: Array<{
    label: string;
    value: string;
  }>;
};

export default function FilterTabs({ filterField, options }: FilterTabsProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilterValue =
    searchParams.get(filterField) || options.at(0)?.value;

  const handleParams = (value: string) => {
    searchParams.set(filterField, value);

    if (searchParams.get("page")) searchParams.set("page", (1).toString());

    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      {options.map((opt) => (
        <FilterButton
          key={opt.value}
          opt={opt}
          handleClick={handleParams}
          currentFilterValue={currentFilterValue}
        />
      ))}
    </div>
  );
}

type FilterButtonsProps = {
  opt: {
    label: string;
    value: string;
  };
  handleClick: (v: string) => void;
  currentFilterValue: string | undefined;
};

function FilterButton({
  opt,
  handleClick,
  currentFilterValue,
}: FilterButtonsProps) {
  return (
    <button
      type="button"
      className="whitespace-nowrap rounded-3xl bg-primary-300 px-4 py-2 text-base font-medium capitalize text-primary outline-transparent transition-colors duration-200 hover:bg-primary hover:text-white focus:outline-primary disabled:cursor-not-allowed disabled:bg-primary disabled:text-white lg:px-6 lg:py-2 xl:px-[30px] xl:py-[10px] dark:text-slate-200"
      onClick={() => handleClick(opt.value)}
      disabled={opt.value === currentFilterValue}
    >
      {opt.label}
    </button>
  );
}
