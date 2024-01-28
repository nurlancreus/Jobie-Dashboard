import Job from "../jobs/Job";
import { useGetVacancies } from "../jobs/useGetVacancies";
import SharedSwiper from "@/shared/SharedSwiper";
import Title from "@/shared/Title";
import Loader from "@/shared/Loader";
import { NonNullProps } from "@/models/types";

export default function RecomendedJobs() {
  const { vacancies, isLoading } = useGetVacancies();

  if (isLoading) return <Loader />;

  return (
    <div className="col-[1/-1] row-[7/8] pt-2 sm:row-[5/6] lg:col-[2/-1] lg:row-[3/4]">
      <div className="mb-[30px]">
        <Title>Recomended Jobs</Title>
      </div>
      <SharedSwiper
        dataList={vacancies as Array<NonNullProps<(typeof vacancies)[number]>>}
        options={{ gap: 30, slidesCount: 2.8, pagination: false }}
        variant="job"
        Component={Job}
      />
    </div>
  );
}
