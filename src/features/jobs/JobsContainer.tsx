import JobsBody from "./JobsBody";
import JobsHeader from "./JobsHeader";
import JobList from "./JobList";
import JobsBodyHeader from "./JobsBodyHeader";
import Job from "./Job";
import { useGetVacancies } from "./useGetVacancies";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { NonNullProps } from "@/models/types";
import HeaderForm from "@/shared/HeaderForm";
import Loader from "@/shared/Loader";
import Pagination from "@/shared/Pagination";
import Footer from "@/shared/Footer";

export default function JobsMain() {
  const { query, handleQueryChange, handleSubmit } = useSearchQuery();
  const { vacancies, count, isLoading } = useGetVacancies(true);

  if (isLoading) return <Loader />;

  return (
    <>
      {/* HEADER */}
      <JobsHeader>
        <HeaderForm
          value={query}
          onChange={handleQueryChange}
          onSubmit={handleSubmit}
        />
      </JobsHeader>

      {/* BODY */}
      <JobsBody>
        {/* BODY HEADER */}
        <JobsBodyHeader dataLength={count!} />
        {/* BODY LIST */}
        <JobList
          data={vacancies as Array<NonNullProps<(typeof vacancies)[number]>>}
          renderProps={(vacancy) => <Job key={vacancy.id} data={vacancy} />}
        />
        <Footer total={count!} variant="vacancies">
          <Pagination />
        </Footer>
      </JobsBody>
    </>
  );
}
