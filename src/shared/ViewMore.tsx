import { ArrowIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

export default function ViewMore() {
  return (
    <Link
      to="#"
      className="flex items-center justify-between gap-4 rounded-[48px] border border-solid border-primary py-[10px] pl-6 pr-[30px] text-base font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-body dark:border-none dark:bg-primary-300 dark:text-slate-200"
    >
      <span className="whitespace-nowrap">View More</span>
      <span className="[&:hover_path]:fill-body [&_path]:fill-primary dark:[&_path]:fill-slate-200">
        <ArrowIcon />
      </span>
    </Link>
  );
}
