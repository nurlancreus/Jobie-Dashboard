import { useSearchParams } from "react-router-dom";
import ApplicationsTableRow from "./ApplicationsTableRow";
import { useGetApplications } from "./useGetApplication";
import Footer from "@/shared/Footer";
import Pagination from "@/shared/Pagination";
import { NonNullProps } from "@/models/types";
import Loader from "@/shared/Loader";

export default function ApplicationsTable() {
  const [searchParams] = useSearchParams();

  const filterStatusValue = searchParams.get("status") ?? "all";
  const filterSortValue = searchParams.get("sortAppsBy") ?? "newest";

  const { applications, isLoading, count } = useGetApplications();
  console.log(applications)

  let filteredData;

  // switch (filterStatusValue) {
  //   case "pending":
  //     filteredData = applications.filter((app) => app.status === "pending");
  //     break;
  //   case "on-hold":
  //     filteredData = applications.filter((app) => app.status === "on-hold");
  //     break;
  //   case "candidate":
  //     filteredData = applications.filter((app) => app.status === "candidate");
  //     break;
  //   default:
  //     filteredData = applications;
  //     break;
  // }

  const modifier = filterSortValue === "newest" ? -1 : 1;

  // filteredData = filteredData
  //   .slice()
  //   .sort((a, b) => (Number(a.created_at) - Number(b.created_at)) * modifier);

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="bg-white rounded-[20px] h-fit pb-5">
        <table className="w-full mt-10 relative border-collapse [&_th]:py-8 [&_td]:py-5 [&_tr]:border-b [&_tr]:border-b-gray-100">
          <thead className="text-lg text-left">
            <tr className="[&>th]:font-medium">
              <td className="pl-10">
                <input
                  type="checkbox"
                  name={`selectAll`}
                  id={`selectAll`}
                  className="cursor-pointer"
                />
              </td>
              <th>ID</th>
              <th>Date Applied</th>
              <th>Company</th>
              <th>Type</th>
              <th>Postition</th>
              <th>Contact</th>
              <th className="pr-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => {
              const company = app.vacancies?.companies;

              return (
                <ApplicationsTableRow
                  key={app.id}
                  app={{
                    ...app,
                    status: app.status as "pending" | "on-hold" | "candidate",
                  }}
                  company={company as NonNullProps<NonNullable<typeof company>>}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer total={count!} variant="applications">
        <Pagination />
      </Footer>
    </>
  );
}
