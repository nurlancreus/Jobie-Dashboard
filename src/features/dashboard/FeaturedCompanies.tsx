import Company from "../companies/Company";
import { useGetCompanies } from "../companies/useGetCompanies";
import Title from "@/shared/Title";
import ViewMore from "@/shared/ViewMore";
import SharedSwiper from "@/shared/SharedSwiper";
import { NonNullProps } from "@/models/types";

export default function FeaturedCompanies() {
  const { companies } = useGetCompanies();

  return (
    <div className="col-[1/-1] row-[8/9] lg:mt-5 sm:row-[6/7] lg:col-[1/-1] lg:row-[4/-1]">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-2">
        <Title>Featured Companies</Title>
        <div className="flex items-center gap-11">
          <div className="pagination-position pagination-custom hidden space-x-2 lg:block"></div>
          <ViewMore />
        </div>
      </div>
      <SharedSwiper
        dataList={companies as Array<NonNullProps<(typeof companies)[number]>>}
        options={{ gap: 30, slidesCount: 4.7, pagination: true }}
        variant="company"
        Component={Company}
      />
    </div>
  );
}
