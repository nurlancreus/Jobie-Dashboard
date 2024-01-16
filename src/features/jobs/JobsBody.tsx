import { ReactNode } from "react";

type JobsBody = {
  children: ReactNode;
};

export default function JobsBody({ children }: JobsBody) {
  return <div className="mt-16">{children}</div>;
}
