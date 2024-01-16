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

    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-4">
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
      className="bg-primary-300 transition-colors duration-200 whitespace-nowrap text-primary py-[10px] px-[30px] text-base capitalize font-medium rounded-3xl hover:text-white hover:bg-primary disabled:text-white disabled:bg-primary disabled:cursor-not-allowed focus:outline-primary outline-transparent"
      onClick={() => handleClick(opt.value)}
      disabled={opt.value === currentFilterValue}
    >
      {opt.label}
    </button>
  );
}
