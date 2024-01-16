import { ReactNode } from "react";

type CompaniesBodyProps = {
  children: ReactNode;
};

export default function CompaniesBody({ children }: CompaniesBodyProps) {
  return <div className="mt-16">{children}</div>;
}
