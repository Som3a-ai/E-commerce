import * as zod from "zod";



export const RegisterationSchema = zod
  .object({
    name: zod
      .string("name must be text")
      .nonempty("name is required")
      .min(3, "min length is 3 chars")
      .max(20, "max lenght is 20 chars"),
    email: zod.email("invalid email address").nonempty("email is required"),
    phone: zod
      .string()
      .nonempty("phone number is required")
      .regex(/^01[0125][0-9]{8}$/, "must be an egyptian number"),
    password: zod
      .string()
      .nonempty("password is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      ),
    rePassword: zod.string().nonempty("rePassword is required"),
  })
  .refine(
    (obj) => {
      return obj.rePassword === obj.password;
    },
    { error: "password don't match", path: ["rePassword"] },
  );


 export type RegisterSchemaType = zod.infer<typeof RegisterationSchema>