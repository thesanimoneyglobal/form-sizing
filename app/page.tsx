"use client"

import EstimationForm from "@/components/estimationForm";
import Guide from "@/components/guide";
import {Barchart} from "@/components/charts/barchart";
import {Piechart} from "@/components/charts/piechart";
import {useShowChart} from "@/state";
import Placeholder from "@/components/charts/placeholder";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Page() {
    const {show} = useShowChart()

   return <>
       <main>
          <div className={'grid grid-cols-3 gap-2'}>
              <section className={'col-span-1'}>
                  <EstimationForm/>
              </section>
              <section className={'col-span-2 space-y-4'}>
                  <Guide/>
                  <div className={'grid grid-cols-1 gap-1'}>
                      <Tabs defaultValue="barchart">
                          <TabsList>
                              <TabsTrigger value="barchart">Barchart</TabsTrigger>
                              {/*<TabsTrigger value="piechart">Piechart</TabsTrigger>*/}
                          </TabsList>
                          <TabsContent value="barchart">
                              {show ? <Barchart/> : <Placeholder/>}
                          </TabsContent>
                          <TabsContent value="piechart">
                              <div>
                                  <Piechart/>
                              </div>
                          </TabsContent>
                      </Tabs>
                  </div>
              </section>
          </div>
       </main>
   </>
}
