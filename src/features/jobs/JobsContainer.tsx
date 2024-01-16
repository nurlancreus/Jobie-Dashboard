import HeaderForm from "@/shared/HeaderForm";
import JobsBody from "./JobsBody";
import JobsHeader from "./JobsHeader";
import useSearchQuery from "@/hooks/useSearchQuery";
import { useGetVacancies } from "./useGetVacancies";
import Loader from "@/shared/Loader";
import { NonNullProps } from "@/models/types";
import JobList from "./JobList";
import JobsBodyHeader from "./JobsBodyHeader";
import Job from "./Job";
import Pagination from "@/shared/Pagination";

export default function JobsMain() {
  const { query, handleQueryChange, handleSubmit } = useSearchQuery();
  const { vacancies, count, isLoading } = useGetVacancies();

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
        <footer className="mt-12">
          <Pagination total={count!} variant="vacancies" />
        </footer>
      </JobsBody>
    </>
  );
}
