"use client"

import EstimationForm from "@/components/estimationForm";
import Guide from "@/components/guide";
import {Barchart} from "@/components/charts/barchart";
import {Piechart} from "@/components/charts/piechart";
import {useShowChart, useShowLoading} from "@/state";
import Placeholder from "@/components/charts/placeholder";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Page() {
    const {show} = useShowChart()
    const {showLoading} = useShowLoading()


   return <>
       <main className={'grid lg:grid-cols-10 grid-cols-1 gap-2'}>
              <section className={'col-span-5'}>
                  <div className={'lg:hidden mb-5'}>
                      <Guide/>
                  </div>
                  <EstimationForm/>
              </section>
              <section className={'col-span-5 space-y-4'}>
                  <div className={'lg:block hidden'}>
                      <Guide/>
                  </div>
                  <div className={'w-full'}>
                      <Tabs defaultValue="barchart">
                          <TabsList>
                              <TabsTrigger value="barchart">Barchart</TabsTrigger>
                              {/*<TabsTrigger value="piechart">Piechart</TabsTrigger>*/}
                          </TabsList>
                          <TabsContent className="w-full" value="barchart">
                              {!showLoading && show ? <Barchart/> : <Placeholder/>}
                          </TabsContent>
                          <TabsContent value="piechart">
                              <div>
                                  <Piechart/>
                              </div>
                          </TabsContent>
                      </Tabs>
                  </div>
              </section>
       </main>
   </>
}
