"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"


import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";

const chartData = [
    { month: "S", desktop: 10 },
    { month: "M", desktop: 20 },
    { month: "L", desktop: 80 },
    { month: "XL", desktop: 50 },
]

const chartConfig = {
    desktop: {
        label: "Probability % ",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function Barchart() {
    return (
        <Card className="w-[100%] lg:w-[92%] xl:w-[55%]">
            <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>Based on form data: 2022-2023</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                   The highest probability is L - 80% <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Enter new data to regenerate results.
                </div>
            </CardFooter>
        </Card>
    )
}
