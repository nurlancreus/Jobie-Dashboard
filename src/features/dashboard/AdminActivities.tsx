import AdminProgress from "./AdminProgress";
import RecentActivites from "./RecentActivities";
import ProfileAvatarName from "../profile/ProfileAvatarName";
import { adminData } from "@/data/adminData";

export default function UserActivities() {
  return (
    <div className="rounded-[20px] bg-white col-[1/2] row-[2/4] h-min">
      {/* Admin */}
      <div className="p-[36px_42px_26px]">
        {/* Admin Avatar */}
        <ProfileAvatarName />

        {/* Circular Progress Bars */}
        <AdminProgress progress={adminData.progress} />
      </div>

      <hr className="my-[26px]" />

      {/* Recent Activities */}
      <RecentActivites />
    </div>
  );
}
