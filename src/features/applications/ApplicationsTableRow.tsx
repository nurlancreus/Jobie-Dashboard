import { PhoneIcon, EnvelopIcon } from "@/assets/icons";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/shared/Logo";
import Titles from "@/shared/Titles";
import { timeAgo } from "@/utils/helpers";

type ApplicationsTableRowProps<AppType, CompanyType> = {
  app: AppType;
  company: CompanyType;
};

export default function ApplicationsTableRow<
  AppType extends {
    id: number;
    created_at: string;
    phone: string | null;
    email: string | null;
    position: string;
    position_type: string;
    status: "pending" | "on-hold" | "candidate";
  },
  CompanyType extends { id: number; logo: string; name: string },
>({ app, company }: ApplicationsTableRowProps<AppType, CompanyType>) {
  return (
    <tr className="py-8">
      <td className="pl-10">
        <input
          type="checkbox"
          name={`select${company.id}`}
          id={`select${company.id}`}
          className="cursor-pointer"
        />
      </td>
      <td data-type="id" className="font-medium uppercase">
        #APL-{app.id.toString().padStart(4, "0")}
      </td>
      <td data-type="date">{timeAgo(app.created_at)}</td>
      <td data-type="company">
        <div className="flex items-center gap-4 pr-4">
          <Logo src={company.logo} w={50} h={50} />
          <Titles title={company.name} subtitle="Creative Design Agency" />
        </div>
      </td>
      <td data-type="type" className="uppercase">
        {app.position_type}
      </td>
      <td data-type="position" className="capitalize">
        {app.position}
      </td>
      <td data-type="contact">
        <div className="flex items-center gap-4 dark:[&_path]:fill-neutral-100/50">
          {app.phone && (
            <div className="grid h-12 w-12 place-content-center rounded-full border border-solid border-primary-300">
              <a href={`tel:${app.phone}`}>
                <PhoneIcon />
              </a>
            </div>
          )}

          {app.email && (
            <div className="grid h-12 w-12 place-content-center rounded-full border border-solid border-primary-300">
              <a href={`mailto:${app.email}`}>
                <EnvelopIcon />
              </a>
            </div>
          )}
        </div>
      </td>
      <td data-type="status">
        <div
          className={`grid w-[130px] place-content-center rounded-[62px] border border-solid p-2 text-base font-medium xl:px-4 xl:py-3 status-${app.status} capitalize`}
        >
          {app.status}
        </div>
      </td>
      <td data-type="actions" className="pr-5">
        <ActionButton />
      </td>
    </tr>
  );
}
