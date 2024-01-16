import Portofolios from "./Portofolios";
import ProfileDetails from "./ProfileDetails";
import ProfileForm from "./ProfileForm";

export default function ProfileLayout() {
  return (
    <div className="grid grid-cols-[3.5fr_1fr] grid-rows-[auto_1fr] gap-x-10 gap-y-[30px]">
      <div className="col-[1/2] row-[1/-1]">
        <ProfileForm />
      </div>
      <div className="col-[2/-1] row-[1/2]">
        <ProfileDetails />
      </div>
      <div className="col-[2/-1] row-[2/-1]">
        <Portofolios />
      </div>
    </div>
  );
}
