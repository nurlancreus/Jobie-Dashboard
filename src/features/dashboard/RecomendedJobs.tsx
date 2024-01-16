import Job from "../jobs/Job";
import SharedSwiper from "@/shared/SharedSwiper";
import Title from "@/shared/Title";
import { useGetVacancies } from "../jobs/useGetVacancies";
import Loader from "@/shared/Loader";
import { NonNullProps } from "@/models/types";

export default function RecomendedJobs() {
  const { vacancies, isLoading } = useGetVacancies();

  if (isLoading) return <Loader />;

  return (
    <div className="row-[3/4] col-[2/-1] pt-2">
      <div className="mb-[30px]">
        <Title>Recomended Jobs</Title>
      </div>
      <SharedSwiper
        dataList={vacancies as Array<NonNullProps<(typeof vacancies)[number]>>}
        Component={Job}
        options={{ gap: 30, slidesCount: 2.8, pagination: false }}
      />
    </div>
  );
}
