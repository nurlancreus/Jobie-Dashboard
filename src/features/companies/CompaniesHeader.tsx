import { ReactNode } from "react";
import CompaniesTabs from "./CompaniesTabs";

type CompaniesHeaderProps = {
  children: ReactNode;
};

export default function CompaniesHeader({ children }: CompaniesHeaderProps) {
  return (
    <header>
      {children}
      <CompaniesTabs />
    </header>
  );
}
