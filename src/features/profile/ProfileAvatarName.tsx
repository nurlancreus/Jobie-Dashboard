import { adminData } from "@/data/adminData";
import { useUser } from "../auth/useUser";
import { MiniLoader, ProfileIcon } from "@/assets/icons";

export default function ProfileAvatarName() {
  const { user, isLoading } = useUser();

  if (isLoading || !user) return <MiniLoader />;
  const { fullname, avatar } = user.user_metadata;

  return (
    <div className="flex flex-col items-center">
      {/* Admin Avatar */}
      <div
        className={`grid h-[8.375rem] w-[8.375rem] place-content-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-fuchsia-600 p-4`}
      >
        <div
          className={`h-[7.375rem] w-[7.375rem] overflow-hidden rounded-full`}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              width={118}
              height={118}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="[&_svg]:h-[7.375rem] [&_svg]:w-[7.375rem] [&_svg]:stroke-white">
              <ProfileIcon />
            </span>
          )}
        </div>
      </div>

      {/* Admin Name */}
      <div className="mb-14 mt-5 text-center">
        <h2 className="text-2xl font-medium">{fullname}</h2>
        <p className="capitalize text-gray-900">{adminData.possesion}</p>
      </div>
    </div>
  );
}
