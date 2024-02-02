//import validator from "validator";
import { z } from "zod";

export type TUserUpdateSchema = z.infer<typeof userUpdateSchema>;

export const userUpdateSchema = z
  .object({
    profileFirstName: z.string().trim().optional(),
    profileMiddleName: z.string().trim().optional(),
    profileLastName: z.string().trim().optional(),
    username: z.string().trim().optional(),
    profilePassword: z
      .string()
      // .min(8, "Password needs a minimum of 8 characters")
      // .regex(/[0-9]/g, "Need a digit")
      // .regex(/[!,@,#,$,%,^,&,*]/g, "Need a special character !@#$%^&*")
      // .trim()
      .optional(),
    profileConfirmPassword: z.string().trim().optional(),
    profileMobilePhone: z
      .string()
      .trim()
      //.refine(validator.isMobilePhone)
      .optional(),
    profileWhatsapp: z
      .string()
      .trim()
      //.refine(validator.isMobilePhone)
      .optional(),
    profileEmail: z
      .string()
      .email("This is not a valid email.")
      .trim()
      //.refine(validator.isEmail)
      .optional(),
    profileAddress: z.string().optional(),
    profileAvatar: z.custom<FileList>().optional(),
    selectCity: z.string().optional(),
    selectCountry: z.string().optional(),
    aboutMe: z.string().trim().optional(),
    programming: z.coerce.number().optional(),
    prototyping: z.coerce.number().optional(),
    uiDesign: z.coerce.number().optional(),
    researching: z.coerce.number().optional(),
  })
  .refine((data) => data.profileConfirmPassword === data.profilePassword, {
    message: "Passwords need to match",
    path: ["profileConfirmPassword"],
  });

// TYPES
type RemoveProfilePrefix<T> = {
  [K in keyof T as K extends `profile${infer U}` ? U : K]: T[K];
};

type GetUpdateProfileParams<T> = {
  [Property in keyof T as `${Lowercase<string & Property>}`]: T[Property];
};

export type TUserUpdateParams = RemoveProfilePrefix<
  GetUpdateProfileParams<TUserUpdateSchema>
>;
