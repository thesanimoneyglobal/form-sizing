import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

function Guide() {
    return <>
        <Card>
            <CardHeader>
                <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
                <p className={'leading-6 text-sm'}>To fill out the form effectively, start by entering the number of items and scores (e.g. 50 and 5). 
                    Choose the appropriate form type from the dropdown options based on your needs, ClinRO or PRO or ObsRO. 
                    Please toggle on any of the remaining options that apply (branching logic, complex calculations, normative scoring, form mapping, or web service setup). 
                    Ensure each selection aligns with your specific requirements to ensure accurate data form sizing. Access the <a href="https://medavanteinc.atlassian.net/wiki/spaces/FD/pages/3987537931/Form+Sizing+Tool+Guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">full guide here</a>.</p>
            </CardContent>
        </Card>
    </>
}

export default Guide;