import { useState } from "react";
import HeaderForm from "@/shared/HeaderForm";
import useSearchQuery from "@/hooks/useSearchQuery";
import CompaniesHeader from "./CompaniesHeader";
import CompaniesBody from "./CompaniesBody";
import CompanyDetails from "./CompanyDetails";
import CompaniesBodyHeader from "./CompaniesBodyHeader";
import CompanyList from "./CompanyList";
import Company from "./Company";
import { useGetCompanies } from "./useGetCompanies";
import { NonNullProps } from "@/models/types";
import Loader from "@/shared/Loader";
import Pagination from "@/shared/Pagination";
import Footer from "@/shared/Footer";

export default function CompaniesContainer() {
  const { query, handleQueryChange, handleSubmit } = useSearchQuery();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelectId = (id: number) => {
    setSelectedId(id);
  };

  const { companies, isLoading, count } = useGetCompanies();

  if (isLoading) return <Loader />;

  return (
    <>
      <div>
        {/* Header */}
        <CompaniesHeader>
          <HeaderForm
            value={query}
            onChange={handleQueryChange}
            onSubmit={handleSubmit}
          />
        </CompaniesHeader>

        {/* Body */}
        <CompaniesBody>
          <CompaniesBodyHeader dataLength={count!} />
          <CompanyList
            data={companies as Array<NonNullProps<(typeof companies)[number]>>}
            renderProps={(company) => (
              <Company
                variant="default"
                key={company.id}
                onSelectId={handleSelectId}
                data={company}
              />
            )}
          />

          <Footer total={count!} variant="companies">
            <Pagination />
          </Footer>
        </CompaniesBody>
      </div>
      {selectedId && (
        <CompanyDetails selectedId={selectedId} setSelectedId={setSelectedId} />
      )}
    </>
  );
}
