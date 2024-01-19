import { EnvelopIcon, PhoneIcon } from "@/assets/icons";
import ProfileAvatarName from "./ProfileAvatarName";
import { adminData } from "@/data/adminData";
import AdminProgress from "../dashboard/AdminProgress";

export default function ProfileDetails() {
  return (
    <div className="rounded-[1.25rem] bg-white px-6 pb-10 pt-5 lg:pt-7 xl:px-8 xl:pt-9">
      {/* Top */}
      <div>
        <ProfileAvatarName />
        <div className="flex items-center gap-5">
          <div className="flex flex-1 flex-col items-center gap-1 rounded-[1.25rem] border border-solid border-gray-100 py-3">
            <h3 className="text-xl font-semibold text-black">228</h3>
            <h5 className="text-base font-normal text-black">Following</h5>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 rounded-[1.25rem] border border-solid border-gray-100 py-3">
            <h3 className="text-xl font-semibold text-black">228</h3>
            <h5 className="text-base font-normal text-black">Following</h5>
          </div>
        </div>
      </div>

      <hr className="my-9" />

      {/* Bottom */}
      <div>
        {/* Contact */}
        <div className="mb-8 flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div className="grid h-12 w-12 place-content-center rounded-full border border-solid border-primary-300">
              <a href={`tel:${adminData.phone}`}>
                <PhoneIcon />
              </a>
            </div>
            <p className="text-base text-black">{adminData.phone}</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="grid h-12 w-12 place-content-center rounded-full border border-solid border-primary-300">
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
