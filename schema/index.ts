import * as z from "zod";

export const formSchema = z.object({
    numberOfItems: z.string(),
    numberOfScores: z.string(),
    formType: z.string(),
    branchingLogic: z.boolean(),
    complexFunctionality: z.boolean(),
    normativeScoring: z.boolean(),
    formMapping: z.boolean(),
    webServiceSetup: z.boolean(),
})

export type FormEstimation = z.infer<typeof formSchema>
