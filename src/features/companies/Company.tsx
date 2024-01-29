import Logo from "@/shared/Logo";

type CompanyProps<T> = {
  variant?: "default" | "featured";
  data: T;
  onSelectId?: (id: number) => void;
};

export default function Company<
  T extends { id: number; name: string; logo: string; vacancies: unknown[] },
>({ variant = "featured", data: company, onSelectId }: CompanyProps<T>) {
  return (
    <article
      className={`cursor-pointer rounded-[20px] bg-card ${
        variant === "featured"
          ? "p-[30px]"
          : "px-8 pb-6 pt-9 transition-shadow duration-200 hover:shadow-[0px_12px_23px_0px_rgba(0,0,0,0.10)]"
      }`}
      onClick={() => onSelectId?.(company.id)}
    >
      <div
        className={`flex gap-5 ${
          variant === "featured" ? "" : "flex-col items-center"
        }`}
      >
        <Logo src={company.logo} w={80} h={80} />
        <div className={variant === "featured" ? "" : "text-center"}>
          <h5
            className={`text-base font-semibold ${
              variant === "featured" ? "mb-2 text-dark" : "mb-1 text-gray-800"
            }`}
          >
            {company.name}
          </h5>
          {variant === "featured" ? (
            <p className="text-base font-medium text-primary dark:text-slate-200">
              {company.vacancies.length} Vacancy
            </p>
          ) : (
            <p className="text-sm text-gray-900">Internet Service Porvider</p>
          )}
        </div>
      </div>
    </article>
  );
}
