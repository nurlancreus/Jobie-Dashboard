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
      className="bg-white rounded-3xl shadow-[0px_12px_15px_0px_rgba(0,0,0,0.03)] py-4 px-[26px]"
      onSubmit={onSubmit}
    >
      <div className="flex items-center justify-between gap-4">
        {/* LEFT */}
        <div className="text-base font-semibold text-gray-700 relative [&>svg]:absolute [&>svg:first-child]:left-0 [&>svg:first-child]:top-3 [&>svg:last-child]:right-5 [&>svg:last-child]:bottom-[22px] after:content-[''] after:bg-gray-200 after:absolute after:w-[1px] after:h-[50px] after:right-[-8px] after:bottom-0 after:top-0">
          <LocationIcon />
          <select className="w-[224px] pl-9 py-4 appearance-none focus:outline-gray-100">
            <option value="around-you">Around You</option>
          </select>
          <Chevron />
        </div>

        {/* CENTER */}
        <input
          type="text"
          placeholder="Search by Title, Company or any jobs keyword..."
          className="pt-5 pb-[14px] placeholder:text-base placeholder:text-gray-200 grow px-4 rounded-[48px] focus:outline-primary"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {/* RIGHT */}
        <div className="flex items-center gap-5">
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
