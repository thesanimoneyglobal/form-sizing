import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ModeToggle} from "@/components/colorMode";

function Navbar() {
    return <>
       <nav className="navbar">
           <Card className="flex flex-row items-center justify-between p-0">
               <CardHeader>
                   <CardTitle>
                       Size Estimation Tool
                   </CardTitle>
               </CardHeader>
               <CardContent className="py-0">
                   <ModeToggle/>
               </CardContent>
           </Card>
       </nav>
    </>
}

export default Navbar;