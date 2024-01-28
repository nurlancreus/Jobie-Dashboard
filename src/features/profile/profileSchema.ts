import validator from "validator";
import { z } from "zod";

export type TEditProfileSchema = z.infer<typeof editProfileSchema>;

export const editProfileSchema = z
  .object({
    profileFirstName: z
      .string()
      .min(1, "This field is required, make changes")
      .trim(),
    profileMiddleName: z
      .string()
      .min(1, "This field is required, make changes")
      .trim(),
    profileLastName: z
      .string()
      .min(1, "This field is required, make changes")
      .trim(),
    username: z.string().min(1, "This field is required, make changes").trim(),
    profilePassword: z
      .string()
      .min(1, "This field is required, make changes")
      .min(8, "Password needs a minimum of 8 characters")
      .regex(/[0-9]/g, "Need a digit")
      .regex(/[!,@,#,$,%,^,&,*]/g, "Need a special character !@#$%^&*")
      .trim(),
    profileConfirmPassword: z
      .string()
      .min(1, "This field is required, make changes")
      .trim(),
    profileMobilePhone: z
      .string()
      .min(1, "This field is required, make changes")
      .trim()
      .refine(validator.isMobilePhone),
    profileWhatsapp: z
      .string()
      .min(1, "This field is required, make changes")
      .trim()
      .refine(validator.isMobilePhone),
    profileEmail: z
      .string()
      .min(1, "This field is required, make changes")
      .email("This is not a valid email.")
      .trim()
      .refine(validator.isEmail),
    profileAddress: z.string().min(1, "This field is required, make changes"),
    selectCity: z.string().min(1, "This field is required, make changes"),
    selectCountry: z.string().min(1, "This field is required, make changes"),
    aboutMe: z.string().min(1, "This field is required, make changes").trim(),
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
