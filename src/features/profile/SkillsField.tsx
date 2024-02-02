import { useFormContext } from "react-hook-form";
import FormFieldHeader from "./FormFieldHeader";
import FormRangeInput from "./FormRangeInput";
import { type TUserUpdateSchema } from "./profileSchema";

type SkillsFieldProps = {
  isUpdating: boolean;
};

export default function SkillsField({ isUpdating = false }: SkillsFieldProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<TUserUpdateSchema>();

  const [watchProgramming, watchPrototyping, watchUiDesign, watchResearching] =
    watch(["programming", "prototyping", "uiDesign", "researching"]);

  return (
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
            disabled={isUpdating}
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
            disabled={isUpdating}
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
            disabled={isUpdating}
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
            disabled={isUpdating}
            className="input-range"
            {...register("researching")}
          />
        </FormRangeInput>
      </div>
    </div>
  );
}
