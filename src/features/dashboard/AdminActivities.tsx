import AdminProgress from "./AdminProgress";
import RecentActivites from "./RecentActivities";
import ProfileAvatarName from "../profile/ProfileAvatarName";
import { adminData } from "@/data/adminData";

export default function UserActivities() {
  return (
    <div className="col-[1/-1] row-[5/6] flex h-min flex-col rounded-[20px] bg-white sm:row-[3/4] sm:flex-row lg:col-[1/2] lg:row-[2/4] lg:flex-col">
      {/* Admin */}
      <div className="lg:p[32px_38px_22px] basis-5/12 p-6 xl:p-[36px_42px_26px]">
        {/* Admin Avatar */}
        <ProfileAvatarName />

        {/* Circular Progress Bars */}
        <AdminProgress progress={adminData.progress} />
      </div>

      <hr className="hidden lg:my-4 lg:block" />

      {/* Recent Activities */}
      <RecentActivites />
    </div>
  );
}
