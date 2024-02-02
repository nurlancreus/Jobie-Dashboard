import { useFormContext } from "react-hook-form";
import FormFieldHeader from "./FormFieldHeader";
import FormTextArea from "./FormTextArea";
import { type TUserUpdateSchema } from "./profileSchema";

type AboutMeFieldProps = {
  isUpdating: boolean;
};

export default function AboutMeField({
  isUpdating = false,
}: AboutMeFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<TUserUpdateSchema>();

  return (
    <div>
      <FormFieldHeader>About Me</FormFieldHeader>
      <FormTextArea label="Tell About You" error={errors?.aboutMe?.message}>
        <textarea
          id="aboutMe"
          disabled={isUpdating}
          className="textarea-scrollbar h-[10.625rem] w-full resize-none rounded-[1.25rem] border border-solid border-gray-200 bg-body p-4 text-sm text-gray-800 outline-transparent focus:outline-primary-500 disabled:cursor-not-allowed lg:p-6"
          {...register("aboutMe")}
        ></textarea>
      </FormTextArea>
    </div>
  );
}
