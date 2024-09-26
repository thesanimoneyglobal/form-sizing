"use client";

import { useForm } from "react-hook-form";
import { FormEstimation, formSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import estimation from "@/actions/estimation";
import { useTransition } from "react";
import { BeatLoader } from "react-spinners";
import { useShowChart, useShowLoading, useStoreComplexity } from "@/state";
import MiniGuideTooltip from "@/components/ui/guide-tool-tip";

function EstimationForm() {
  const [isPending, startTransition] = useTransition();
  const { setShow } = useShowChart();
  const { setShowLoading } = useShowLoading();
  const { setFormComplexityData } = useStoreComplexity();

  const form = useForm<FormEstimation>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfItems: "0",
      numberOfScores: "0",
      formType: "10",
      branchingLogic: false,
      complexFunctionality: false,
      normativeScoring: false,
      formMapping: false,
      webServiceSetup: false,
    },
  });

  function onSubmit(values: FormEstimation) {
    startTransition(() => {
      setShowLoading(true);
      estimation(values).then((res) => {
        if (res?.success) {
          toast.success(res.success);
          setFormComplexityData(res?.data);
        } else if (res?.error) toast.error(res.error);
        setShow(true);
        setShowLoading(false);
      });
    });
  }

  return (
    <>
      <Card>
        <CardContent className={"py-4"}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <FormField
                  control={form.control}
                  name="numberOfItems"
                  render={({ field }) => (
                    <FormItem>
                      <MiniGuideTooltip description="For example, the form GDS-30 contains 30 input items.">
                        <FormLabel>Number of items</FormLabel>
                      </MiniGuideTooltip>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type={"text"}
                          placeholder="Number of items"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <FormDescription>
                        Please enter the number of items to be included in the
                        form.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberOfScores"
                  render={({ field }) => (
                    <FormItem>
                      <MiniGuideTooltip description="For example, a form that includes 3 domain scores and 1 total score would have a total of 4 scores.">
                        <FormLabel>Number of scores</FormLabel>
                      </MiniGuideTooltip>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type={"text"}
                          placeholder="Number of scores"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <FormDescription>
                        Please enter the number of scores to be generated in the
                        form. This includes any calculated outputs including
                        subscores, domain scores, total scores etc.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <div className={"col-span-2"}>
                  <FormField
                    control={form.control}
                    name="formType"
                    render={({ field }) => (
                      <FormItem>
                        <MiniGuideTooltip
                          description="ClinRO - Clinical Reported Outcome, ObsRO - Observer Reported Outcome, PRO - Patient Reported Outcome">
                          <FormLabel>Form Type</FormLabel>
                        </MiniGuideTooltip>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select from type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className={"w-full"}>
                            <SelectItem value="10">ClinRO/PerfO</SelectItem>
                            <SelectItem value="11">PRO</SelectItem>
                            <SelectItem value="12">ObsRO</SelectItem>
                            <SelectItem value="13">
                              ClinReadPRO/ClinReadObsRO
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                        <FormDescription>
                          Please choose the form administration type
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="branchingLogic"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <MiniGuideTooltip description="For example, if you answer “Yes” to Question 1, you   questions 1a – 1g will be required. However, if you answer “No” to question 1, 1a-1g will be skipped and the user will be brought directly to question 2.">
                          <FormLabel className="text-base">
                            Branching Logic
                          </FormLabel>
                        </MiniGuideTooltip>
                        <FormDescription>
                        Please indicate if branching logic will be needed. (The need for the form adapts based on your answers). For example, if you answer &quot;Yes&quot; to Question 1, you&apos;ll need to answer additional questions 1a through 1g. But if you answer &quot;No,&quot; you can skip those and move straight to Question 2.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          name={"switch_1"}
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
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <MiniGuideTooltip description="For example, the M.I.N.I. uses links on each page rather than traditional navigation arrows, to decrease the risks of manipulating data.">
                          <FormLabel className="text-base">
                            Complex calculations
                          </FormLabel>
                        </MiniGuideTooltip>
                        <FormDescription>
                        Please indicate if complex functionality will be required. This may include multi-step scoring, calculations more than simple sum, advanced branching logic, or non-standard form navigation,  
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          name={"switch_2"}
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
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <MiniGuideTooltip description="For example, Normative and Conventional tables are used in Bayley-4 scales for converting Raw Scores Scaled Scores, Age Equivalent, and Growth Scale Value.">
                          <FormLabel className="text-base">
                            Normative Scoring
                          </FormLabel>
                        </MiniGuideTooltip>
                        <FormDescription>
                        Please indicate if normative or conversion tables are needed for deriving required scores.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          name={"switch_3"}
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
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <MiniGuideTooltip description="For example, Partial Elidgibility  Verification Forms (PEVF) require scores from, other forms to be displayed prior to completing PEVF">
                          <FormLabel className="text-base">
                            Form Mapping
                          </FormLabel>
                        </MiniGuideTooltip>
                        <FormDescription>
                        Please indicate if mapping (pulling scores/data) from other forms will be required.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          name={"switch_4"}
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
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <MiniGuideTooltip description="For example, SF-36 requires web services as raw scores must be transferred to QualityMetric, where scores are automatically calculated based on responses for all SF-36 forms, and sent back to the form.">
                          <FormLabel className="text-base">
                            Web Services
                          </FormLabel>
                        </MiniGuideTooltip>
                        <FormDescription>
                        Please indicate if web service setup is required (Scores will need to be transferred to a 3rd party vendor to be converted and sent back to the form).
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          name={"switch_5"}
                          disabled={isPending}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button disabled={isPending} type="submit" size={"lg"}>
                Calculate Results
                {isPending && (
                  <BeatLoader size={"7px"} color={"white"} className={"ml-2"} />
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}

export default EstimationForm;
