import * as zod from "zod";








 export const CheckOutSchema = zod
  .object({
    
   details: zod.string().nonempty("details is required").min(9 , "please write a valid detail"),
    phone: zod
      .string()
      .nonempty("phone is required")
      .regex(
        /^01[0125][0-9]{8}$/,
        "please write a valid egyptian number",
      ),

      city : zod.string().nonempty("city is required")

  })

export type CheckOutType = zod.infer<typeof CheckOutSchema>







