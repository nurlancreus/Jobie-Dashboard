import Portfolios from "./Portfolios";
import ProfileDetails from "./ProfileDetails";
import ProfileForm from "./ProfileForm";

export default function ProfileLayout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3.5fr_1fr] lg:grid-rows-[auto_1fr] gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-8 lg:gap-y-6 xl:gap-x-10 xl:gap-y-[1.875rem]">
      <div className="col-[1/-1] row-[1/2] lg:col-[1/2] lg:row-[1/-1]">
        <ProfileForm />
      </div>
      <div className="col-[1/-1] row-[2/3] sm:col-[1/2] lg:col-[2/-1] lg:row-[1/2]">
        <ProfileDetails />
      </div>
      <div className="col-[1/-1] row-[3/4] sm:col-[2/-1] sm:row-[2/3] lg:col-[2/-1] lg:row-[2/-1]">
        <Portfolios />
      </div>
    </div>
  );
}
