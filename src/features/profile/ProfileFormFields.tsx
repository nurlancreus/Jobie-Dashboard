import { ReactNode } from "react";
import GeneralFields from "./GeneralFields";
import ContactFields from "./ContactFields";
import AboutMeField from "./AboutMeField";
import SkillsField from "./SkillsField";

type ProfileFormFieldsProps = {
  children: ReactNode;
  isUpdating: boolean;
};

export default function ProfileFormFields({
  children,
  isUpdating = false,
}: ProfileFormFieldsProps) {
  return (
    <section className="rounded-[1.25rem] bg-card px-6 pb-8 pt-5 md:pb-10 lg:pb-12 xl:px-[1.875rem] xl:pb-14 xl:pt-7">
      {/* Form Header */}
      {children}

      <div className="flex flex-col gap-16">
        {/* General Fields */}
        <GeneralFields isUpdating={isUpdating} />

        {/* Contact Fields */}
        <ContactFields isUpdating={isUpdating} />

        {/* About Me */}
        <AboutMeField isUpdating={isUpdating} />

        {/* Skills */}
        <SkillsField isUpdating={isUpdating} />
      </div>
    </section>
  );
}
