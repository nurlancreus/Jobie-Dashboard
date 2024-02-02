import { ReactNode } from "react";

type ApplicationsTableProps<AppType> = {
  data: Array<AppType>;
  checked: boolean;
  children: ReactNode;
  onChange: () => void;
  renderProps: (app: AppType) => JSX.Element;
};

export default function ApplicationsTable<AppType>({
  data,
  checked,
  children,
  onChange,
  renderProps,
}: ApplicationsTableProps<AppType>) {
  return (
    <div className="grid">
      <div className="mt-6 h-fit overflow-auto rounded-[1.25rem] bg-card px-3 lg:mt-8 xl:mt-10">
        <table className="w-full min-w-[75rem] border-collapse border-spacing-0 [&_td]:px-3 [&_td]:py-3 sm:[&_td]:py-4 xl:[&_td]:py-5 [&_th]:px-3 [&_th]:py-5 sm:[&_th]:py-6 xl:[&_th]:py-8 [&_tr]:border-b [&_tr]:border-b-gray-100">
          <thead className="text-left text-lg">
            <tr className="[&>th]:font-medium">
              <th className="pl-10">
                <input
                  type="checkbox"
                  name="checkAll"
                  id="checkAll"
                  checked={checked}
                  onChange={onChange}
                  className="h-4 w-4 cursor-pointer accent-primary lg:h-5 lg:w-5 xl:h-6 xl:w-6"
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
  );
}
