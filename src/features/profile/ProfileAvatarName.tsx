import { adminData } from "@/data/adminData";


export default function ProfileAvatarName() {



  return (
    <div className="flex flex-col items-center">
      {/* Admin Avatar */}
      <div className={`w-[134px] h-[134px] p-4 bg-gradient-to-r from-primary to-fuchsia-600 grid place-content-center rounded-full overflow-hidden`}>
        <div className={`w-[118px] h-[118px] rounded-full overflow-hidden`}>
          <img
            src={adminData.avatar}
            alt="avatar"
            width={118}
            height={118}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Admin Name */}
      <div className="mt-5 mb-14 text-center">
        <h2 className="text-2xl font-medium">{adminData.name}</h2>
        <p className="capitalize text-gray-900">{adminData.possesion}</p>
      </div>
    </div>
  );
}
