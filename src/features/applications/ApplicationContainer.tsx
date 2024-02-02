import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationsTable from "./ApplicationsTable";
import { useGetApplications } from "./useGetApplications";
import ApplicationsTableRow from "./ApplicationsTableRow";
import Titles from "@/shared/Titles";
import Footer from "@/shared/Footer";
import Pagination from "@/shared/Pagination";
import Loader from "@/shared/Loader";
import { NonNullProps } from "@/models/types";
import { useCheckRows } from "./useCheckRows";

export default function ApplicationContainer() {
  const { applications, isLoading, count } = useGetApplications();
  const {
    headerChecked,
    rowCheckboxes,
    handleHeaderCheckboxChange,
    handleRowCheckboxChange,
  } = useCheckRows(applications);

  if (isLoading) return <Loader />;

  return (
    <>
      <ApplicationsHeader>
        <Titles title={`Showing ${count} Applicants`} />
      </ApplicationsHeader>
      <ApplicationsTable
        data={applications}
        checked={headerChecked}
        onChange={handleHeaderCheckboxChange}
        renderProps={(app) => {
          const company = app.vacancies?.companies;

          return (
            <ApplicationsTableRow
              key={app.id}
              checked={rowCheckboxes[app.id] ?? false}
              onChange={() => handleRowCheckboxChange(app.id)}
              app={{
                ...app,
                status: app.status as "pending" | "on-hold" | "candidate",
              }}
              company={company as NonNullProps<NonNullable<typeof company>>}
            />
          );
        }}
      >
        <Footer total={count!} variant="applications">
          <Pagination />
        </Footer>
      </ApplicationsTable>
    </>
  );
}
