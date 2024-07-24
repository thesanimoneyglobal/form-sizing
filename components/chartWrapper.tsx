import {ReactNode} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

interface ChartWrapper {
    children: ReactNode;
    lable: string
}


function ChartWrapper({children, lable}:ChartWrapper) {
    return <>
        <Card>
            <CardHeader>
                <CardTitle>{lable}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </>
}

export default ChartWrapper;