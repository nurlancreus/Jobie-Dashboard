import { CloseIcon, LocationIcon, StarIcon, UserIcon } from "@/assets/icons";
import Logo from "@/shared/Logo";
import { useGetCompany } from "./useGetCompany";
import LoaderMini from "@/shared/LoaderMini";

type CompanyDetailsProps = {
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function CompanyDetails({
  selectedId,
  setSelectedId,
}: CompanyDetailsProps) {
  const { company, isLoading } = useGetCompany(selectedId);

  // if (isLoading || !company) return <LoaderMini />;

  return (
    <aside className="relative mt-8 rounded-[20px] bg- p-[60px_24px_30px] lg:mt-0">
      {isLoading || !company ? (
        <LoaderMini />
      ) : (
        <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
          {/* Close Button */}
          <button
            className="absolute right-7 top-6 border-none bg-transparent outline-transparent"
            onClick={() => setSelectedId(null)}
          >
            <CloseIcon />
          </button>
          <div className="flex-1">
            {/* Details */}
            <div className="flex flex-col items-center">
              <Logo src={company.logo} h={134} w={134} />
              <div className="mt-[30px]">
                <h3 className="text-2xl font-medium">{company.name}</h3>
                <p className="text-gray-900">Creative Design Agency</p>
              </div>
            </div>

            {/* Follow Button */}
            <button className="mb-10 mt-7 grid w-full place-content-center rounded-[48px] border border-primary py-4 text-lg font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white dark:text-slate-200 dark:border-slate-200">
              <span>+ Follow</span>
            </button>

            {/* Numbers */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-9">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-content-center rounded-full bg-primary [&_path]:fill-white [&_svg]:h-4 [&_svg]:w-4">
                  <UserIcon />
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    {company.employee_count}
                  </p>
                  <span className="text-sm text-gray-200">Employee</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-content-center rounded-full bg-yellow-400 [&_path]:fill-white [&_svg]:h-4 [&_svg]:w-4">
                  <StarIcon />
                </div>
                <div>
                  <p className="text-xl font-semibold">{company.reviews}</p>
                  <span className="text-sm text-gray-200">Reviews</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-content-center rounded-full bg-gray-100 [&_path]:fill-gray-700 [&_svg]:h-4 [&_svg]:w-4">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xl font-semibold">{company.location}</p>
                  <span className="text-sm text-gray-200">Location</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-9 h-[1px] bg-gray-200" />

          {/* About Company */}
          <div className="flex-1">
            <h4 className="text-base font-semibold">About Company</h4>
            <p className="mt-7 text-sm text-gray-700">{company.about}</p>
            <div className="mt-9 flex items-center gap-5">
              <button className="grid flex-1 place-content-center rounded-[70px] bg-primary py-4 text-lg font-semibold capitalize text-white transition-opacity duration-200 hover:opacity-90">
                {company.vacancies.length} Vacancy
              </button>
              <button
                disabled={true}
                className="grid flex-1 place-content-center rounded-[70px] bg-gray-100 py-4 text-lg font-semibold capitalize text-gray-500 transition-opacity duration-200 disabled:cursor-not-allowed"
              >
                More Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
