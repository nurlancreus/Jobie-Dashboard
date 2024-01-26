import validator from "validator";
import { z } from "zod";

export type TEditProfileSchema = z.infer<typeof editProfileSchema>;

export const editProfileSchema = z
  .object({
    profileFirstName: z.string().min(1, "This field is required, make changes"),
    profileMiddleName: z
      .string()
      .min(1, "This field is required, make changes"),
    profileLastName: z.string().min(1, "This field is required, make changes"),
    username: z.string().min(1, "This field is required, make changes"),
    profilePassword: z
      .string()
      .min(1, "This field is required, make changes")
      .min(8, "Password needs a minimum of 8 characters")
      .regex(/[0-9]/g, "Need a digit")
      .regex(/[!,@,#,$,%,^,&,*]/g, "Need a special character !@#$%^&*"),
    profileConfirmPassword: z
      .string()
      .min(1, "This field is required, make changes"),
    profileMobilePhone: z
      .string()
      .min(1, "This field is required, make changes")
      .refine(validator.isMobilePhone),
    profileWhatsapp: z
      .string()
      .min(1, "This field is required, make changes")
      .refine(validator.isMobilePhone),
    profileEmail: z
      .string()
      .min(1, "This field is required, make changes")
      .email("This is not a valid email.")
      .refine(validator.isEmail),
    profileAddress: z.string().min(1, "This field is required, make changes"),
    selectCity: z.string().min(1, "This field is required, make changes"),
    selectCountry: z.string().min(1, "This field is required, make changes"),
    aboutMe: z.string().min(1, "This field is required, make changes"),
    programming: z.coerce
      .number()
      .min(1, "This field is required, make changes"),
    prototyping: z.coerce
      .number()
      .min(1, "This field is required, make changes"),
    uiDesign: z.coerce.number().min(1, "This field is required, make changes"),
    researching: z.coerce
      .number()
      .min(1, "This field is required, make changes"),
  })
  .refine((data) => data.profileConfirmPassword === data.profilePassword, {
    message: "Passwords need to match",
    path: ["profileConfirmPassword"],
  });
