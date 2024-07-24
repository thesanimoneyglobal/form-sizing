import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

function Guide() {
    return <>
        <Card>
            <CardHeader>
                <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
                <p className={'leading-6 text-sm'}>To fill out the form effectively, start by entering the number of items and scores (e.g. 50 and 5).
                    Choose the appropriate form type from the dropdown options based on your needs, ClinRO or PRO or ObsRO. For the Boolean fields, select True or False based on whether your form requires branching logic, complex functionality, normative scoring, form mapping, or web service setup.
                    Ensure each selection aligns with your specific requirements to ensure accurate data processing.</p>
            </CardContent>
        </Card>
    </>
}

export default Guide;