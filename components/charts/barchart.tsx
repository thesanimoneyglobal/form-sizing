"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
    desktop: {
        label: "Probability % ",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const formComplexityData = [
    { label: "S", probability: 5 },
    { label: "M", probability: 40 },
    { label: "L", probability: 50 },
    { label: "XL", probability: 5 },
];

const biggestValue = formComplexityData.reduce((max, item) =>
    item.probability > max.probability ? item : max, formComplexityData[0]
);

export function Barchart() {
    return (
        <Card className="w-[100%] lg:w-[100%] xl:w-[100%] py-3">
            <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>Estimated size is displayed below:</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={formComplexityData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="label"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="probability" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    The highest probability is {biggestValue.label} - {biggestValue.probability}% <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Enter new data to regenerate results.
                </div>
            </CardFooter>
        </Card>
    )
}
