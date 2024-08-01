'use client'

import {useForm} from "react-hook-form";
import {FormEstimation, formSchema} from "@/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Switch} from "@/components/ui/switch";
import {toast} from "sonner";
import estimation from "@/actions/estimation";
import {useTransition} from "react";
import {BeatLoader} from "react-spinners";
import {useShowChart, useShowLoading, useStoreComplexity} from "@/state";

function EstimationForm() {
    const [isPending, startTransition] = useTransition()
    const {setShow} = useShowChart()
    const {setShowLoading} = useShowLoading()
    const {setFormComplexityData} = useStoreComplexity()

    const form = useForm<FormEstimation>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            numberOfItems: '0',
            numberOfScores: '0',
            formType: '10',
            branchingLogic: false,
            complexFunctionality: false,
            normativeScoring: false,
            formMapping: false,
            webServiceSetup: false,
        },
    })

    function onSubmit(values: FormEstimation) {
        startTransition(() => {
            setShowLoading(true)
            estimation(values).then(res => {
                if (res?.success) {
                    toast.success(res.success)
                    setFormComplexityData(res?.data)
                }
                else if (res?.error) toast.error(res.error)
                setShow(true)
                setShowLoading(false)
            })
        })
    }

    return <>
        <Card>
            <CardContent className={'py-4'}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            <FormField
                                control={form.control}
                                name="numberOfItems"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Number of items</FormLabel>
                                        <FormControl>
                                            <Input disabled={isPending} type={'text'} placeholder="Number of items" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter number of items.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="numberOfScores"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Number of scores</FormLabel>
                                        <FormControl>
                                            <Input disabled={isPending} type={'text'} placeholder="Number of scores" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter number of scores.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className={'col-span-2'}>
                                <FormField
                                    control={form.control}
                                    name="formType"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Form Type</FormLabel>
                                            <Select  disabled={isPending} onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select from type"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className={'w-full'}>
                                                    <SelectItem value="10">ClinRO</SelectItem>
                                                    <SelectItem value="11">PRO</SelectItem>
                                                    <SelectItem value="12">ObsRO</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="branchingLogic"
                                    render={({field}) => (
                                        <FormItem
                                            className="flex flex-row items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">
                                                    Branching Logic
                                                </FormLabel>
                                                <FormDescription>
                                                    Please choose if branching logic exists.
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    disabled={isPending}
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="complexFunctionality"
                                    render={({field}) => (
                                        <FormItem
                                            className="flex flex-row items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">
                                                    Complex Functionality
                                                </FormLabel>
                                                <FormDescription>
                                                    Please choose if complex functionality exists.
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    disabled={isPending}
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            <FormField
                                control={form.control}
                                name="normativeScoring"
                                render={({field}) => (
                                    <FormItem
                                        className="flex flex-row items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                            <FormLabel className="text-base">
                                                Normative Scoring
                                            </FormLabel>
                                            <FormDescription>
                                                Please choose if complex normative scoring exists.
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                disabled={isPending}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="formMapping"
                                render={({field}) => (
                                    <FormItem
                                        className="flex flex-row items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                            <FormLabel className="text-base">
                                                Form Mapping
                                            </FormLabel>
                                            <FormDescription>
                                                Please choose if form mapping scoring required.
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                disabled={isPending}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="webServiceSetup"
                                render={({field}) => (
                                    <FormItem
                                        className="flex flex-row items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                            <FormLabel className="text-base">
                                                Web Services
                                            </FormLabel>
                                            <FormDescription>
                                                Please choose if web services setup required.
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                disabled={isPending}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button disabled={isPending} type="submit" size={'lg'}>
                            Calculate Results
                            {isPending && <BeatLoader size={'7px'} color={'white'} className={'ml-2'}/>}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </>
}

export default EstimationForm;