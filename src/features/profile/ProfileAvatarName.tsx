import { adminData } from "@/data/adminData";

export default function ProfileAvatarName() {
  return (
    <div className="flex flex-col items-center">
      {/* Admin Avatar */}
      <div
        className={`grid h-[8.375rem] w-[8.375rem] place-content-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-fuchsia-600 p-4`}
      >
        <div className={`h-[7.375rem] w-[7.375rem] overflow-hidden rounded-full`}>
          <img
            src={adminData.avatar}
            alt="avatar"
            width={118}
            height={118}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Admin Name */}
      <div className="mb-14 mt-5 text-center">
        <h2 className="text-2xl font-medium">{adminData.name}</h2>
        <p className="capitalize text-gray-900">{adminData.possesion}</p>
      </div>
    </div>
  );
}
