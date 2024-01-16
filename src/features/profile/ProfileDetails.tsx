import { EnvelopIcon, PhoneIcon } from "@/assets/icons";
import ProfileAvatarName from "./ProfileAvatarName";
import { adminData } from "@/data/adminData";
import AdminProgress from "../dashboard/AdminProgress";

export default function ProfileDetails() {
  return (
    <div className="bg-white rounded-[20px] pt-9 px-8 pb-10">
      {/* Top */}
      <div>
        <ProfileAvatarName />
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-1 py-3 flex-1 border border-solid border-gray-100 rounded-[20px]">
            <h3 className="text-black text-xl font-semibold">228</h3>
            <h5 className="text-black text-base font-normal">Following</h5>
          </div>
          <div className="flex flex-col items-center gap-1 py-3 flex-1 border border-solid border-gray-100 rounded-[20px]">
            <h3 className="text-black text-xl font-semibold">228</h3>
            <h5 className="text-black text-base font-normal">Following</h5>
          </div>
        </div>
      </div>

      <hr className="my-9" />

      {/* Bottom */}
      <div>
        {/* Contact */}
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex items-center gap-5">
            <div className="grid place-content-center w-12 h-12 rounded-full border border-solid border-primary-300">
              <a href={`tel:${adminData.phone}`}>
                <PhoneIcon />
              </a>
            </div>
            <p className="text-base text-black">{adminData.phone}</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="grid place-content-center w-12 h-12 rounded-full border border-solid border-primary-300">
              <a href={`tel:${adminData.email}`}>
                <EnvelopIcon />
              </a>
            </div>
            <p className="text-base text-black">{adminData.email}</p>
          </div>
        </div>
        {/* Progress */}
        <AdminProgress progress={adminData.progress} />
      </div>
    </div>
  );
}
