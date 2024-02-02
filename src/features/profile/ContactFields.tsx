import { useFormContext } from "react-hook-form";
import { Chevron } from "@/assets/icons";
import ProfileFormField from "./ProfileFormField";
import ProfileFormRow from "./ProfileFormRow";
import { type TUserUpdateSchema } from "./profileSchema";

type ContactFieldsProps = {
  isUpdating: boolean;
};

export default function ContactFields({
  isUpdating = false,
}: ContactFieldsProps) {
  
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<TUserUpdateSchema>();

  const watchSelectCountry = watch("selectCountry");

  return (
    <ProfileFormField title="contact">
      <ProfileFormRow
        label="Mobile Phone"
        error={errors?.profileMobilePhone?.message}
      >
        <input
          type="text"
          id="profileMobilePhone"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input pl-16"
          {...register("profileMobilePhone")}
        />
      </ProfileFormRow>
      <ProfileFormRow label="Whatsapp" error={errors?.profileWhatsapp?.message}>
        <input
          type="text"
          id="profileWhatsapp"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input pl-16"
          {...register("profileWhatsapp")}
        />
      </ProfileFormRow>
      <ProfileFormRow label="Email" error={errors?.profileEmail?.message}>
        <input
          type="text"
          id="profileEmail"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input pl-16"
          {...register("profileEmail")}
        />
      </ProfileFormRow>
      <ProfileFormRow label="Address" error={errors?.profileAddress?.message}>
        <input
          type="text"
          id="profileAddress"
          placeholder="Type here"
          disabled={isUpdating}
          className="form-input"
          {...register("profileAddress")}
        />
      </ProfileFormRow>
      <ProfileFormRow label="City" error={errors?.selectCity?.message}>
        <div className="relative">
          <select
            id="selectCity"
            disabled={!watchSelectCountry || isUpdating}
            className="form-input w-full appearance-none"
            {...register("selectCity")}
          >
            <option value="select-city" className="bg-card">
              Select City
            </option>
          </select>
          <span className="absolute bottom-4 right-6 lg:bottom-6 lg:right-8 [&_path]:stroke-primary dark:[&_path]:stroke-neutral-100/50">
            <Chevron />
          </span>
        </div>
      </ProfileFormRow>
      <ProfileFormRow label="Country" error={errors?.selectCountry?.message}>
        <div className="relative">
          <select
            id="selectCountry"
            disabled={isUpdating}
            className="form-input w-full appearance-none"
            {...register("selectCountry")}
          >
            <option value="select-country" className="bg-card">
              Select Country
            </option>
          </select>
          <span className="absolute bottom-4 right-6 lg:bottom-6 lg:right-8 [&_path]:stroke-primary dark:[&_path]:stroke-neutral-100/50">
            <Chevron />
          </span>
        </div>
      </ProfileFormRow>
    </ProfileFormField>
  );
}
