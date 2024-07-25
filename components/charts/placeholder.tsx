import {Card, CardContent} from "@/components/ui/card";
import {ChartColumnBig} from "lucide-react";
import {BeatLoader} from "react-spinners";
import {useShowLoading} from "@/state";

function Placeholder() {
    const {showLoading} = useShowLoading()

    return <>
        <Card className={'flex h-[500px] justify-center items-center'}>
            <CardContent className="flex flex-col justify-center items-center">
                {!showLoading ? <>
                    <p>Your estimation will be showed here, please fill parameters.</p>
                    <ChartColumnBig className="mt-4" color="lightgray" size={100}/> </> : <BeatLoader size={20} color={'DodgerBlue'}/>}
            </CardContent>
        </Card>
    </>
}

export default Placeholder;