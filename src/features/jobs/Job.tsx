import Logo from "@/shared/Logo";
import Title from "@/shared/Title";
import { formatCurrency, truncate } from "@/utils/helpers";
import { Link } from "react-router-dom";

type JobProps<T> = {
  data: T;
};

export default function Job<
  T extends {
    id: number;
    companies: {
      id: number;
      name: string | null;
      logo: string | null;
      location: string | null;
    };
    about: string;
    name: string;
    location: string;
    max_salary: number;
    min_salary: number;
  },
>({ data: vacancy }: JobProps<T>) {
  const company = vacancy.companies;

  return (
    <Link to="#">
      <article className="flex h-full min-w-[430px] flex-col rounded-[20px] bg-white p-[30px] shadow-[0px_4px_0px_0px_rgba(62,73,84,0.04)] transition-shadow duration-200 hover:shadow-[0px_12px_23px_0px_rgba(0,0,0,0.10)]">
        <div className="flex items-center justify-between">
          <div>
            <h5
              className="mb-2 text-base font-medium text-gray-400"
              data-company-id={company.id}
            >
              {company.name}
            </h5>
            <Title>{vacancy.name}</Title>
          </div>
          <Logo src={company.logo ?? ""} w={60} h={60} />
        </div>
        <div className="my-5">
          <p className="text-base font-medium text-primary">
            <span>{formatCurrency(vacancy["min_salary"])}</span> -{" "}
            <span>{formatCurrency(vacancy["max_salary"])}</span>
          </p>
          <p className="mt-6 text-sm text-gray-900">
            {truncate(vacancy.about, 20)}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="rounded-[48px] bg-primary-300 px-5 py-[10px] font-medium uppercase text-primary">
            {vacancy.location}
          </span>
          <p className="font-medium text-dark">{company.location}</p>
        </div>
      </article>
    </Link>
  );
}
