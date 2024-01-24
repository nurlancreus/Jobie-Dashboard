import { LocationIcon, Chevron, FilterIcon, SearchIcon } from "@/assets/icons";
import Button from "./Button";

type HeaderFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (v: string) => void;
};

export default function HeaderForm({
  onSubmit,
  value,
  onChange,
}: HeaderFormProps) {
  return (
    <form
      className="rounded-3xl bg-card px-4 md:px-5 lg:px-6 xl:px-7 py-4 shadow-[0px_12px_15px_0px_rgba(0,0,0,0.03)]"
      onSubmit={onSubmit}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* LEFT */}
        <div className="relative w-full text-base font-semibold text-gray-700 after:absolute after:bottom-0 after:right-[-8px] after:top-0 after:hidden after:h-[50px] after:w-[1px] after:bg-gray-200 after:content-[''] sm:w-auto sm:after:block">
          <span className="[&>svg]:absolute [&>svg]:left-0 [&>svg]:top-3">
            <LocationIcon />
          </span>
          <select className="w-full min-w-[224px] appearance-none bg-transparent py-4 pl-9 focus:outline-gray-100">
            <option value="around-you">Around You</option>
          </select>
          <span className="[&>svg]:absolute [&>svg]:bottom-[22px] [&>svg]:right-5">
            <Chevron />
          </span>
        </div>

        {/* CENTER */}
        <input
          type="text"
          placeholder="Search by Title, Company or any jobs keyword..."
          className="grow rounded-[48px] bg-transparent px-4 py-4 placeholder:text-base placeholder:text-gray-200 focus:outline-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {/* RIGHT */}
        <div className="flex items-center gap-5 [&_svg]:h-5 [&_svg]:w-5 lg:[&_svg]:h-6 lg:[&_svg]:w-6 xl:[&_svg]:h-auto xl:[&_svg]:w-auto">
          <Button type="button">
            <FilterIcon />
            <span>Filter</span>
          </Button>
          <Button type="submit">
            <SearchIcon />
            <span>Find</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
