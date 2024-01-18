import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

type ApplicationsTableProps<AppType> = {
  data: Array<AppType>;
  children: ReactNode;
  renderProps: (app: AppType) => JSX.Element;
};

export default function ApplicationsTable<AppType>({
  data,
  children,
  renderProps,
}: ApplicationsTableProps<AppType>) {
  const [searchParams] = useSearchParams();

  const filterSortValue = searchParams.get("sortAppsBy") ?? "newest";

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

  return (
    <>
      <div className="h-fit overflow-auto ">
        <table className="relative mt-10 w-full min-w-[1300px] border-collapse border-spacing-0 rounded-[20px] bg-white pb-5 [&_td]:py-5 [&_th]:py-8 [&_tr]:border-b [&_tr]:border-b-gray-100">
          <thead className="text-left text-lg">
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
          <tbody>{data.map(renderProps)}</tbody>
        </table>
        {children}
      </div>
    </>
  );
}
