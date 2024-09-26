import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {ModeToggle} from "@/components/colorMode";
import QuickGuideButton from "@/components/ui/quick-guide";
function Navbar() {
    return <>
       <nav className="navbar">
           <Card className="flex flex-row items-center justify-between p-0">
               <CardHeader>
                   <CardTitle className="text-xl font-semibold">
                       Size Estimation Tool
                   </CardTitle>
                   <CardDescription className="text-sm p-0 text-gray-500">
                   (For tablet forms only)
                   </CardDescription>
               </CardHeader>
               <CardContent className="py-0 flex flex-row gap-2 items-center">
                   <QuickGuideButton/>
                   <ModeToggle/>
               </CardContent>
           </Card>
       </nav>
    </>
}

export default Navbar;