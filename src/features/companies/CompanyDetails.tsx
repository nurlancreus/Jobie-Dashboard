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
    <aside className="bg-white rounded-[20px] p-[60px_24px_30px] relative">
      {isLoading || !company ? (
        <LoaderMini />
      ) : (
        <div>
          {/* Close Button */}
          <button
            className="bg-transparent outline-transparent border-none absolute top-6 right-7"
            onClick={() => setSelectedId(null)}
          >
            <CloseIcon />
          </button>

          {/* Details */}
          <div className="flex flex-col items-center">
            <Logo src={company.logo} h={134} w={134} />
            <div className="mt-[30px]">
              <h3 className="text-2xl font-medium">{company.name}</h3>
              <p className="text-gray-900">Creative Design Agency</p>
            </div>
          </div>

          {/* Follow Button */}
          <button className="rounded-[48px] border border-solid border-primary text-primary text-lg font-semibold transition-colors duration-200 grid place-content-center w-full py-4 hover:bg-primary hover:text-white mt-7 mb-10">
            <span>+ Follow</span>
          </button>

          {/* Numbers */}
          <div className="flex items-center flex-wrap gap-x-12 gap-y-9">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full grid place-content-center bg-primary [&_path]:fill-white [&_svg]:w-4 [&_svg]:h-4">
                <UserIcon />
              </div>
              <div>
                <p className="text-xl font-semibold">
                  {company.employee_count}
                </p>
                <span className="text-gray-200 text-sm">Employee</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full grid place-content-center bg-secondary [&_path]:fill-white [&_svg]:w-4 [&_svg]:h-4">
                <StarIcon />
              </div>
              <div>
                <p className="text-xl font-semibold">{company.reviews}</p>
                <span className="text-gray-200 text-sm">Reviews</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full grid place-content-center bg-gray-100 [&_path]:fill-gray-700 [&_svg]:w-4 [&_svg]:h-4">
                <LocationIcon />
              </div>
              <div>
                <p className="text-xl font-semibold">{company.location}</p>
                <span className="text-gray-200 text-sm">Location</span>
              </div>
            </div>
          </div>

          <hr className="h-[1px] my-9 bg-gray-200" />

          {/* About Company */}
          <div>
            <h4 className="text-base font-semibold">About Company</h4>
            <p className="text-sm text-gray-700 mt-7">{company.about}</p>
            <div className="flex items-center gap-5 mt-9">
              <button className="bg-primary flex-1 py-4 grid place-content-center capitalize rounded-[70px] text-white text-lg font-semibold transition-opacity duration-200 hover:opacity-90">
                {company.vacancies.length} Vacancy
              </button>
              <button
                disabled={true}
                className="bg-gray-100 flex-1 py-4 grid place-content-center capitalize rounded-[70px] text-gray-500 text-lg font-semibold transition-opacity duration-200 disabled:cursor-not-allowed"
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
