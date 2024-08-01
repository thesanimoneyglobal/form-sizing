import * as z from "zod";

export const formSchema = z.object({
    numberOfItems: z.string()
        .max(4, { message: "numberOfItems must be at most 4 characters long" })
        .refine((val) => /^[0-9]+$/.test(val), {
            message: "numberOfItems must be a number only",
        }),
    numberOfScores: z.string()
        .max(4, { message: "numberOfScores must be at most 4 characters long" })
        .refine((val) => /^[0-9]+$/.test(val), {
            message: "numberOfScores must be a number only",
        }),
    formType: z.string(),
    branchingLogic: z.boolean(),
    complexFunctionality: z.boolean(),
    normativeScoring: z.boolean(),
    formMapping: z.boolean(),
    webServiceSetup: z.boolean(),
})

export type FormEstimation = z.infer<typeof formSchema>
