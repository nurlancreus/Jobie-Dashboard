import { appsData } from "@/data/appsData";
import { companiesData } from "@/data/jobsData";
import { useSearchParams } from "react-router-dom";
import ApplicationsTableRow from "./ApplicationsTableRow";

export default function ApplicationsTable() {
  const [searchParams] = useSearchParams();

  const filterStatusValue = searchParams.get("status") ?? "all";
  const filterSortValue = searchParams.get("sortAppsBy") ?? "newest";

  let filteredData;

  if (filterStatusValue === "pending") {
    filteredData = appsData.filter((app) => app.status === "pending");
  } else if (filterStatusValue === "on-hold") {
    filteredData = appsData.filter((app) => app.status === "on-hold");
  } else if (filterStatusValue === "candidate") {
    filteredData = appsData.filter((app) => app.status === "candidate");
  } else filteredData = appsData;

  const modifier = filterSortValue === "newest" ? -1 : 1;

  filteredData = filteredData
    .slice()
    .sort((a, b) => (Number(a.date) - Number(b.date)) * modifier);

  return (
    <div className="bg-white rounded-[20px] h-[650px] pb-5">
      <table
        className="w-full   mt-10  
      border-collapse [&_th]:py-8 [&_td]:py-5 [&_tr]:border-b [&_tr]:border-b-gray-100"
      >
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
          {filteredData.map((app) => {
            const company = companiesData.find(
              (company) => company.id === app.companyKey,
            )!;

            return (
              <ApplicationsTableRow key={app.id} app={app} company={company} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
