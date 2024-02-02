import { ReactNode } from "react";
type ProfileLayoutProps = {
  children: ReactNode;
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-4 md:grid-cols-2 lg:grid-cols-[3.5fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:gap-y-6 xl:gap-x-10 xl:gap-y-[1.875rem]">
      {children}
    </div>
  );
}
