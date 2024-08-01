'use server'

import {FormEstimation, formSchema} from "@/schema";
import {PredictedEstimation} from "@/types";

const estimation = async (values: FormEstimation) => {
    const validation = formSchema.safeParse(values);
    if (!validation.success) return {error: "Invalid fields, try again."};

    const fields = validation.data

    try {
        const response = await fetch('https://young-gorge-59837-010d1f12cfeb.herokuapp.com/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                "number_of_items": fields.numberOfItems,
                "number_of_scores": fields.numberOfScores,
                "form_type": fields.formType,
                "branching_logic": fields.branchingLogic,
                "complex_functionality": fields.complexFunctionality,
                "normative_scoring": fields.normativeScoring,
                "form_mapping": fields.formMapping,
                "web_service_setup": fields.webServiceSetup,
            })
        });

        const data = await response.json();
        const reformattedData = data.map((item: PredictedEstimation) => ({
            label: item.label,
            probability: parseFloat(item.probability.toFixed(2)) * 100,
        }));

        console.log(reformattedData)

        if (response.ok) {
            return {success: 'Size estimated successfully.', data: reformattedData};
        } else {
            return {error: 'Failed to estimate size, please try again.'};
        }
    } catch (error) {
        if (error instanceof Error) return {error: 'An error occurred: ' + error.message};

    }
}

export default estimation;
