import Loader from "@/shared/Loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useUser } from "../auth/useUser";
import Portfolios from "./Portfolios";
import ProfileDetails from "./ProfileDetails";
import ProfileFormFields from "./ProfileFormFields";
import ProfileLayout from "./ProfileLayout";
import ProfileFormHeader from "./ProfileFormHeader";
import {
  TUserUpdateSchema,
  userUpdateSchema,
  TUserUpdateParams,
} from "./profileSchema";
import { useUpdateUser } from "./useUpdateUser";

export default function ProfileForm() {
  const { user, isLoading } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const {
    firstname,
    lastname,
    username,
    middlename,
    address,
    city,
    country,
    aboutme,
  } = user?.user_metadata ?? {};

  const methods = useForm<TUserUpdateSchema>({
    resolver: zodResolver(userUpdateSchema),
    values: {
      profileFirstName: firstname ?? "",
      profileMiddleName: middlename ?? "",
      profileLastName: lastname ?? "",
      username: username ?? "",
      profilePassword: "",
      profileConfirmPassword: "",
      profileMobilePhone: user?.phone ?? "",
      profileWhatsapp: user?.phone ?? "",
      profileEmail: user?.email ?? "",
      profileAddress: address ?? "",
      selectCity: city ?? "select-city",
      selectCountry: country ?? "select-country",
      aboutMe: aboutme ?? "",
      programming: 88,
      prototyping: 60,
      uiDesign: 80,
      researching: 90,
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { dirtyFields },
  } = methods;

  // Check if field is modified
  const isFieldDirty = (fieldName: keyof TUserUpdateSchema) =>
    dirtyFields[fieldName];

  const isFieldsModified = Object.keys(dirtyFields).length !== 0;

  const onSubmit = (data: TUserUpdateSchema) => {
    const modifiedFields: Partial<TUserUpdateParams> = {};
    if (!isFieldsModified) return;

    const {
      profileEmail: email,
      profileFirstName: firstname,
      username,
      profileAvatar: avatar,
      profileLastName: lastname,
      profileMiddleName: middlename,
      aboutMe: aboutme,
      profileMobilePhone: mobilephone,
      profilePassword: password,
      profileAddress: address,
      selectCity: selectcity,
      selectCountry: selectcountry,
    } = data;

    // Check each field and add to modifiedFields if it is modified
    if (isFieldDirty("profileFirstName")) modifiedFields.firstname = firstname;
    if (isFieldDirty("profileLastName")) modifiedFields.lastname = lastname;
    if (isFieldDirty("username")) modifiedFields.username = username;
    if (isFieldDirty("profileAvatar")) modifiedFields.avatar = avatar;
    if (isFieldDirty("aboutMe")) modifiedFields.aboutme = aboutme;
    if (isFieldDirty("profileAddress")) modifiedFields.address = address;
    if (isFieldDirty("profileEmail")) modifiedFields.email = email;
    if (isFieldDirty("profileMiddleName"))
      modifiedFields.middlename = middlename;
    if (isFieldDirty("profileMobilePhone"))
      modifiedFields.mobilephone = mobilephone;
    if (isFieldDirty("profilePassword")) modifiedFields.password = password;
    if (isFieldDirty("selectCity")) modifiedFields.selectcity = selectcity;
    if (isFieldDirty("selectCountry"))
      modifiedFields.selectcountry = selectcountry;

    // Call updateUser with the modified fields
    updateUser(modifiedFields, { onSuccess: () => reset() });
  };

  if (isLoading || !user) return <Loader />;
  return (
    <FormProvider {...methods}>
      <form
        id="profileForm"
        name="profileForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProfileLayout>
          <div className="col-[1/-1] row-[1/2] lg:col-[1/2] lg:row-[1/-1]">
            <ProfileFormFields isUpdating={isUpdating}>
              <ProfileFormHeader
                isFieldsModified={isFieldsModified}
                isUpdating={isUpdating}
              />
            </ProfileFormFields>
          </div>
          <div className="col-[1/-1] row-[2/3] sm:col-[1/2] lg:col-[2/-1] lg:row-[1/2]">
            <ProfileDetails />
          </div>
          <div className="col-[1/-1] row-[3/4] md:col-[2/-1] md:row-[2/3] lg:row-[2/-1]">
            <Portfolios />
          </div>
        </ProfileLayout>
      </form>
    </FormProvider>
  );
}
