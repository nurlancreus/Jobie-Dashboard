import Title from "@/shared/Title";
import ViewMore from "@/shared/ViewMore";
import Company from "../companies/Company";
import SharedSwiper from "@/shared/SharedSwiper";
import { NonNullProps } from "@/models/types";
import { useGetCompanies } from "../companies/useGetCompanies";

export default function FeaturedCompanies() {
  const { companies } = useGetCompanies();
  
  return (
    <div className="col-[1/-1] row-[4/-1] mt-5">
      <div className="flex items-center justify-between mb-7">
        <Title>Featured Companies</Title>
        <div className="flex items-center gap-11">
          <div className="pagination-position space-x-2 pagination-custom"></div>
          <ViewMore />
        </div>
      </div>
      <SharedSwiper
        dataList={companies as Array<NonNullProps<(typeof companies)[number]>>}
        Component={Company}
        options={{ gap: 30, slidesCount: 4.7, pagination: true }}
      />
    </div>
  );
}
