'use server'

import {FormEstimation, formSchema} from "@/schema";

const estimation = async (values: FormEstimation) => {
    const validation = formSchema.safeParse(values);
    if (!validation.success) return { error: "Invalid fields, try again." };

    await new Promise(resolve => setTimeout(resolve, 3000));

    return { success: 'Estimated size successfully.' };
}

export default estimation;