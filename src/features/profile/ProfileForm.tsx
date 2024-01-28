import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import ProfileFormRow from "./ProfileFormRow";
import ProfileFormField from "./ProfileFormField";
import FormFieldHeader from "./FormFieldHeader";
import FormRangeInput from "./FormRangeInput";
import FormTextArea from "./FormTextArea";

import Button from "@/shared/Button";
import SwitchBtn from "@/shared/SwitchBtn";
import Title from "@/shared/Title";
import { Chevron } from "@/assets/icons";
import { type TEditProfileSchema, editProfileSchema } from "./profileSchema";

export default function ProfileForm() {
  const [showPasswords, setShowPasswords] = useState<
    Array<"profilePassword" | "profileConfirmPassword">
  >([]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TEditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    values: {
      profileFirstName: "",
      profileMiddleName: "",
      profileLastName: "",
      username: "",
      profilePassword: "",
      profileConfirmPassword: "",
      profileMobilePhone: "+50 444 5511 11",
      profileWhatsapp: "+50 444 5511 11",
      profileEmail: "davidheree@mail.com",
      profileAddress: "Franklin Avenue St. Corner",
      selectCity: "london",
      selectCountry: "england",
      aboutMe:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora exercitationem omnis alias voluptatibus ex. Doloremque, a totam distinctio sapiente natus, nulla rerum facilis quos libero fugiat impedit odit, magni temporibus. Iusto sint ipsam doloribus quis inventore, suscipit magnam, cupiditate sequi quos asperiores placeat reprehenderit fuga, pariatur omnis magni voluptas. Tempore explicabo delectus totam cupiditate cum? Ipsam deleniti neque numquam nihil? Molestiae iste, cumque harum ipsa cupiditate provident, porro veritatis voluptates odio enim sunt quos quaerat commodi adipisci! Iusto nobis molestias illum nam repudiandae cumque. Vero, dicta quae! Consequatur, natus consequuntur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora exercitationem omnis alias voluptatibus ex. Doloremque, a totam distinctio sapiente natus, nulla rerum facilis quos libero fugiat impedit odit, magni temporibus. Iusto sint ipsam doloribus quis inventore, suscipit magnam, cupiditate sequi quos asperiores placeat reprehenderit fuga, pariatur omnis magni voluptas. Tempore explicabo delectus totam cupiditate cum? Ipsam deleniti neque numquam nihil? Molestiae iste, cumque harum ipsa cupiditate provident, porro veritatis voluptates odio enim sunt quos quaerat commodi adipisci! Iusto nobis molestias illum nam repudiandae cumque. Vero, dicta quae! Consequatur, natus consequuntur?",
      programming: 20,
      prototyping: 30,
      uiDesign: 60,
      researching: 80,
    },
  });

  const [
    watchPasswordField,
    watchConfirmPasswordField,
    watchProgramming,
    watchPrototyping,
    watchUiDesign,
    watchResearching,
  ] = watch([
    "profilePassword",
    "profileConfirmPassword",
    "programming",
    "prototyping",
    "uiDesign",
    "researching",
  ]);

  const onSubmit = (data: TEditProfileSchema) => {
    console.log(data);
  };

  const handleTogglePasswords = (
    id: "profilePassword" | "profileConfirmPassword",
  ) => {
    setShowPasswords((prev) =>
      prev.includes(id) ? prev.filter((field) => field !== id) : [...prev, id],
    );
  };

  return (
    <form
      id="profileForm"
      name="profileForm"
      className="bg-card rounded-[1.25rem] px-6 pb-8 pt-5 md:pb-10 lg:pb-12 xl:px-[1.875rem] xl:pb-14 xl:pt-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-8 flex flex-wrap items-center justify-between lg:mb-10 xl:mb-14">
        <Title fs={24} fw="semibold">
          Edit Profile
        </Title>
        <div className="flex flex-wrap items-center gap-5">
          <SwitchBtn
            label="Available for hire?"
            id="forHire"
            key="forHire"
            checked={true}
          />
          <div className="flex items-center gap-5">
            <Button type="reset" onClick={() => reset()}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {/* General Forms */}
        <ProfileFormField title="generals">
          <ProfileFormRow
            label="First Name"
            error={errors?.profileFirstName?.message}
          >
            <input
              type="text"
              id="profileFirstName"
              placeholder="Type here"
              className="form-input"
              {...register("profileFirstName")}
            />
          </ProfileFormRow>
          <ProfileFormRow
            label="Middle Name"
            error={errors?.profileMiddleName?.message}
          >
            <input
              type="text"
              id="profileMiddleName"
              autoComplete="on"
              placeholder="Type here"
              className="form-input"
              {...register("profileMiddleName")}
            />
          </ProfileFormRow>
          <ProfileFormRow
            label="Last Name"
            error={errors?.profileLastName?.message}
          >
            <input
              type="text"
              id="profileLastName"
              autoComplete="on"
              placeholder="Type here"
              className="form-input"
              {...register("profileLastName")}
            />
          </ProfileFormRow>
          <ProfileFormRow label="Username" error={errors?.username?.message}>
            <input
              type="text"
              id="username"
              autoComplete="on"
              placeholder="Type here"
              className="form-input"
              {...register("username")}
            />
          </ProfileFormRow>
          <ProfileFormRow
            label="Password"
            inputType="password"
            disabled={watchPasswordField === ""}
            onTogglePassword={handleTogglePasswords}
            showPassword={showPasswords.includes("profilePassword")}
            error={errors?.profilePassword?.message}
          >
            <input
              type={
                showPasswords.includes("profilePassword") ? "text" : "password"
              }
              id="profilePassword"
              placeholder="Type here"
              className="form-input"
              autoComplete="off"
              {...register("profilePassword")}
            />
          </ProfileFormRow>
          <ProfileFormRow
            label="Re-Type Password"
            inputType="password"
            disabled={watchConfirmPasswordField === ""}
            onTogglePassword={handleTogglePasswords}
            showPassword={showPasswords.includes("profileConfirmPassword")}
            error={errors?.profileConfirmPassword?.message}
          >
            <input
              type={
                showPasswords.includes("profileConfirmPassword")
                  ? "text"
                  : "password"
              }
              id="profileConfirmPassword"
              placeholder="Type here"
              className="form-input"
              autoComplete="off"
              {...register("profileConfirmPassword")}
            />
          </ProfileFormRow>
        </ProfileFormField>

        {/* Contact Forms */}
        <ProfileFormField title="contact">
          <ProfileFormRow
            label="Mobile Phone"
            error={errors?.profileMobilePhone?.message}
          >
            <input
              type="text"
              id="profileMobilePhone"
              placeholder="Type here"
              className="form-input pl-16"
              {...register("profileMobilePhone")}
            />
          </ProfileFormRow>
          <ProfileFormRow
            label="Whatsapp"
            error={errors?.profileWhatsapp?.message}
          >
            <input
              type="text"
              id="profileWhatsapp"
              placeholder="Type here"
              className="form-input pl-16"
              {...register("profileWhatsapp")}
            />
          </ProfileFormRow>
          <ProfileFormRow label="Email" error={errors?.profileEmail?.message}>
            <input
              type="text"
              id="profileEmail"
              placeholder="Type here"
              className="form-input pl-16"
              {...register("profileEmail")}
            />
          </ProfileFormRow>
          <ProfileFormRow
            label="Address"
            error={errors?.profileAddress?.message}
          >
            <input
              type="text"
              id="profileAddress"
              placeholder="Type here"
              className="form-input"
              {...register("profileAddress")}
            />
          </ProfileFormRow>
          <ProfileFormRow label="City" error={errors?.selectCity?.message}>
            <div className="relative">
              <select
                id="selectCity"
                className="form-input w-full appearance-none"
                {...register("selectCity")}
              >
                <option value="london" className="bg-card">London</option>
              </select>
              <span className="absolute bottom-4 right-6 lg:bottom-6 lg:right-8 [&_path]:stroke-primary dark:[&_path]:stroke-neutral-100/50">
                <Chevron />
              </span>
            </div>
          </ProfileFormRow>
          <ProfileFormRow
            label="Country"
            error={errors?.selectCountry?.message}
          >
            <div className="relative">
              <select
                id="selectCountry"
                className="form-input w-full appearance-none"
                {...register("selectCountry")}
              >
                <option value="england" className="bg-card">England</option>
              </select>
              <span className="absolute bottom-4 right-6 lg:bottom-6 lg:right-8 [&_path]:stroke-primary dark:[&_path]:stroke-neutral-100/50">
                <Chevron />
              </span>
            </div>
          </ProfileFormRow>
        </ProfileFormField>

        {/* About Me */}
        <div>
          <FormFieldHeader>About Me</FormFieldHeader>
          <FormTextArea label="Tell About You" error={errors?.aboutMe?.message}>
            <textarea
              id="aboutMe"
              className="textarea-scrollbar h-[10.625rem] w-full resize-none rounded-[1.25rem] border border-solid border-gray-200 bg-body p-4 text-sm text-gray-800 outline-transparent focus:outline-primary-500 lg:p-6"
              {...register("aboutMe")}
            ></textarea>
          </FormTextArea>
        </div>

        {/* Skills */}
        <div>
          <FormFieldHeader
            button={
              <button
                type="button"
                className="border-none bg-transparent text-lg font-semibold text-primary outline-transparent dark:text-slate-200"
              >
                + Add new Skills
              </button>
            }
          >
            Skills
          </FormFieldHeader>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-6 xl:gap-x-16 xl:gap-y-8">
            <FormRangeInput
              label="Programming"
              error={errors?.programming?.message}
              value={watchProgramming}
            >
              <input
                type="range"
                id="programming"
                className="input-range"
                {...register("programming")}
              />
            </FormRangeInput>
            <FormRangeInput
              label="Prototyping"
              error={errors?.prototyping?.message}
              value={watchPrototyping}
            >
              <input
                type="range"
                id="prototyping"
                className="input-range"
                {...register("prototyping")}
              />
            </FormRangeInput>
            <FormRangeInput
              label="UI Design"
              error={errors?.uiDesign?.message}
              value={watchUiDesign}
            >
              <input
                type="range"
                id="uiDesign"
                className="input-range"
                {...register("uiDesign")}
              />
            </FormRangeInput>
            <FormRangeInput
              label="Researching"
              error={errors?.researching?.message}
              value={watchResearching}
            >
              <input
                type="range"
                id="researching"
                className="input-range"
                {...register("researching")}
              />
            </FormRangeInput>
          </div>
        </div>
      </div>
    </form>
  );
}
