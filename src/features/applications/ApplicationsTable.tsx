import { ReactNode } from "react";

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

  // filteredData = filteredData
  //   .slice()
  //   .sort((a, b) => (Number(a.created_at) - Number(b.created_at)) * modifier);

  return (
    <>
      <div className="grid">
        <div className="mt-6 h-fit overflow-auto rounded-[20px] bg-white px-3 lg:mt-8 xl:mt-10">
          <table className="w-full min-w-[1200px] border-collapse border-spacing-0 [&_td]:px-2 [&_td]:py-3 sm:[&_td]:py-4 xl:[&_td]:py-5 [&_th]:px-3 [&_th]:py-5 sm:[&_th]:py-6 xl:[&_th]:py-8 [&_tr]:border-b [&_tr]:border-b-gray-100">
            <thead className="text-left text-lg">
              <tr className="[&>th]:font-medium">
                <th className="pl-10">
                  <input
                    type="checkbox"
                    name={`selectAll`}
                    id={`selectAll`}
                    className="cursor-pointer"
                  />
                </th>
                <th>ID</th>
                <th>Date Applied</th>
                <th>Company</th>
                <th>Type</th>
                <th>Postition</th>
                <th>Contact</th>
                <th className="pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="text-base">{data.map(renderProps)}</tbody>
          </table>
        </div>
        {children}
      </div>
    </>
  );
}
