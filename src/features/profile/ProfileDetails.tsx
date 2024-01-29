import ProfileAvatarName from "./ProfileAvatarName";
import AdminProgress from "../dashboard/AdminProgress";
import { EnvelopIcon, MiniLoader, PhoneIcon } from "@/assets/icons";
import { adminData } from "@/data/adminData";
import { useUser } from "../auth/useUser";

export default function ProfileDetails() {
  const { user, isLoading } = useUser();

  return (
    <div className="flex flex-col rounded-[1.25rem] bg-card px-6 pb-10 pt-5 sm:flex-row md:flex-col lg:pt-7 xl:px-8 xl:pt-9">
      {isLoading || !user ? (
        <span className="flex justify-center">
          <MiniLoader />
        </span>
      ) : (
        <>
          {/* Top */}
          <div className="sm:flex-1 sm:border-r sm:p-7 md:flex-auto md:border-none md:p-0">
            <ProfileAvatarName />
            <div className="flex items-center gap-5">
              <div className="flex flex-1 flex-col items-center gap-1 rounded-[1.25rem] border border-neutral-200 py-3">
                <h3 className="text-xl font-semibold text-dark">228</h3>
                <h5 className="text-base font-normal text-dark">Following</h5>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1 rounded-[1.25rem] border border-neutral-200 py-3">
                <h3 className="text-xl font-semibold text-dark">228</h3>
                <h5 className="text-base font-normal text-dark">Following</h5>
              </div>
            </div>
          </div>

          <hr className="my-9" />

          {/* Bottom */}
          <div className="sm:flex-1 sm:p-7 md:flex-auto md:p-0">
            {/* Contact */}
            <div className="mb-8 flex flex-col gap-5">
              {user.phone && (
                <div>
                  <a
                    href={`tel:${user.phone}`}
                    className="flex items-center gap-5"
                  >
                    <div className="grid h-12 w-12 place-content-center rounded-full border border-solid border-primary-300">
                      <span className="dark:[&_path]:fill-neutral-100/50">
                        <PhoneIcon />
                      </span>
                    </div>
                    <p className="text-base text-dark">{user.phone}</p>
                  </a>
                </div>
              )}

              {user.email && (
                <div>
                  <a
                    href={`mailto:${user.email}`}
                    className="flex items-center gap-5"
                  >
                    <div className="grid h-12 w-12 place-content-center rounded-full border border-solid border-primary-300">
                      <span className="dark:[&_path]:fill-neutral-100/50">
                        <EnvelopIcon />
                      </span>
                    </div>
                    <p className="text-base text-dark">{user.email}</p>
                  </a>
                </div>
              )}
            </div>
            {/* Progress */}
            <AdminProgress progress={adminData.progress} />
          </div>
        </>
      )}
    </div>
  );
}
