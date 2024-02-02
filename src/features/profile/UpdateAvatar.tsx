import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ProfileAvatarName from "./ProfileAvatarName";
import { EditUserIcon, MiniLoader } from "@/assets/icons";
import Modal from "@/shared/Modal";
import Title from "@/shared/Title";
import Loader from "@/shared/Loader";
import { type TUserUpdateSchema } from "./profileSchema";
import { useDeleteAvatar } from "./useDeleteAvatar";
import { useUser } from "../auth/useUser";

type UpdateAvatarProps = {
  onCloseModal?: () => void;
};

export default function UpdateAvatar({ onCloseModal }: UpdateAvatarProps) {
  const { register, watch } = useFormContext<TUserUpdateSchema>();
  const watchFile = watch("profileAvatar");

  // if filelist is not empty, then close modal
  useEffect(() => {
    if (watchFile?.length ?? 0 > 0) onCloseModal?.();
  }, [onCloseModal, watchFile?.length]);

  const { isLoading: isLoadingUser, user } = useUser();
  const { deleteAvatar, isDeleting } = useDeleteAvatar();

  if (isLoadingUser || !user) return <Loader />;

  const { avatar } = user.user_metadata;

  return (
    <ProfileAvatarName>
      <Modal.Open opens="update-avatar">
        <div
          className={`absolute inset-0 grid cursor-pointer place-content-center bg-primary-500 ${isDeleting ? "opacity-70" : "opacity-0"} transition-opacity duration-200 hover:opacity-70`}
        >
          {isDeleting ? (
            <span className="[&_svg]:h-10 [&_svg]:w-10 [&_svg]:stroke-white">
              <MiniLoader />
            </span>
          ) : (
            <EditUserIcon />
          )}
        </div>
      </Modal.Open>
      <Modal.Window name="update-avatar">
        <div className="flex flex-col gap-8 pt-6">
          <Title caseForm="normal-case">
            Do you want to update Profile avatar or remove it?
          </Title>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="rounded-[3.875rem] border-none bg-red-600 px-4 py-2 font-medium text-white outline-transparent disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!avatar}
              onClick={() => {
                deleteAvatar();
                onCloseModal?.();
              }}
            >
              Delete
            </button>
            <label htmlFor="profileAvatar" className="cursor-pointer">
              <p
                role="button"
                className="rounded-[3.875rem] border-none bg-primary px-4 py-2 font-medium text-white outline-transparent"
              >
                Update Avatar
              </p>
              <input
                type="file"
                id="profileAvatar"
                accept="image/*"
                className="hidden"
                {...register("profileAvatar")}
              />
            </label>
          </div>
        </div>
      </Modal.Window>
    </ProfileAvatarName>
  );
}
