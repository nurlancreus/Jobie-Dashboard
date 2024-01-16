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
      <article className="p-[30px] flex flex-col rounded-[20px] h-full bg-white shadow-[0px_4px_0px_0px_rgba(62,73,84,0.04)] transition-shadow duration-200 hover:shadow-[0px_12px_23px_0px_rgba(0,0,0,0.10)]">
        <div className="flex items-center justify-between">
          <div>
            <h5
              className="text-base text-gray-400 font-medium mb-2"
              data-company-id={company.id}
            >
              {company.name}
            </h5>
            <Title>{vacancy.name}</Title>
          </div>
          <Logo src={company.logo ?? ""} w={60} h={60} />
        </div>
        <div className="my-5">
          <p className="text-base text-primary font-medium">
            <span>{formatCurrency(vacancy["min_salary"])}</span> -{" "}
            <span>{formatCurrency(vacancy["max_salary"])}</span>
          </p>
          <p className="text-sm text-gray-900 mt-6">
            {truncate(vacancy.about, 20)}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="px-5 py-[10px] rounded-[48px] bg-primary-300 text-primary font-medium uppercase">
            {vacancy.location}
          </span>
          <p className="text-dark font-medium">{company.location}</p>
        </div>
      </article>
    </Link>
  );
}
