import { ArrowIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

export default function ViewMore() {
  return (
    <Link
      to="#"
      className="pl-6 py-[10px] pr-[30px] rounded-[48px] text-base font-medium text-primary border border-solid border-primary flex items-center justify-between gap-4 [&_svg]:-rotate-90 [&_path]:fill-primary transition-colors duration-200 hover:bg-primary hover:text-body [&:hover_path]:fill-body"
    >
      <span className="whitespace-nowrap">View More</span>
      <ArrowIcon />
    </Link>
  );
}
