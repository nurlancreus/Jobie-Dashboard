import Button from "@/shared/Button";
import SwitchBtn from "@/shared/SwitchBtn";
import Title from "@/shared/Title";
import ProfileFormRow from "./ProfileFormRow";
import ProfileFormField from "./ProfileFormField";
import { Chevron } from "@/assets/icons";
import FormFieldHeader from "./FormFieldHeader";
import FormRangeInput from "./FormRangeInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type TEditProfileSchema, editProfileSchema } from "./profileSchema";
import FormTextArea from "./FormTextArea";
import { useState } from "react";

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
      className="rounded-[20px] bg-white px-[30px] pb-14 pt-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-14 flex items-center justify-between">
        <Title fs={24} fw="semibold">
          Edit Profile
        </Title>
        <div className="flex items-center gap-5">
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
              placeholder="Type here"
              className="form-input"
              {...register("profileLastName")}
            />
          </ProfileFormRow>
          <ProfileFormRow label="Username" error={errors?.username?.message}>
            <input
              type="text"
              id="username"
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
                <option value="london">London</option>
              </select>
              <span className="absolute bottom-6 right-8 [&_path]:stroke-primary ">
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
                <option value="england">England</option>
              </select>
              <span className="absolute bottom-6 right-8 [&_path]:stroke-primary">
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
              className="textarea-scrollbar h-[170px] w-full resize-none rounded-[20px] border border-solid border-gray-200 bg-body p-6 text-sm text-gray-800 outline-transparent focus:outline-primary-500"
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
                className="border-none bg-transparent text-lg font-semibold text-primary outline-transparent"
              >
                + Add new Skills
              </button>
            }
          >
            Skills
          </FormFieldHeader>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
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
