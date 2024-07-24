import {Card, CardContent} from "@/components/ui/card";
import {ChartColumnBig} from "lucide-react";

function Placeholder() {
    return <>
        <Card className={'flex h-[500px] justify-center items-center'}>
            <CardContent className="flex flex-col justify-center items-center">
                <p>Your estimation will be showed here, please fill parameters.</p>
                <ChartColumnBig className="mt-4" color="lightgray" size={100} />
            </CardContent>
        </Card>
    </>
}

export default Placeholder;