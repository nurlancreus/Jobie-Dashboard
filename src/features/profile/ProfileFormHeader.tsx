import { useFormContext } from "react-hook-form";
import Button from "@/shared/Button";
import SwitchBtn from "@/shared/SwitchBtn";
import Title from "@/shared/Title";
import { type TUserUpdateSchema } from "./profileSchema";

type ProfileFormHeaderProps = {
  isFieldsModified: boolean;
  isUpdating: boolean;
};

export default function ProfileFormHeader({
  isFieldsModified,
  isUpdating = false,
}: ProfileFormHeaderProps) {
  const { reset } = useFormContext<TUserUpdateSchema>();

  return (
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
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Button
            type="reset"
            disabled={!isFieldsModified || isUpdating}
            onClick={() => reset()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!isFieldsModified || isUpdating}
            isLoading={isUpdating}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
