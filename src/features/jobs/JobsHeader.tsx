import { ReactNode } from "react";
import JobTabs from "./JobTabs";

type JobsHeaderProps = {
  children: ReactNode;
};

export default function JobsHeader({ children }: JobsHeaderProps) {
  return (
    <header>
      {children}
      <JobTabs />
    </header>
  );
}
