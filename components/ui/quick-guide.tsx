import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function QuickGuideButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Quick Guide</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md md:max-w-[600px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Quick Guide</DialogTitle>
          <DialogDescription>
            A brief overview of key features and how to use them.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            <section>
              <h3 className="text-lg font-semibold">Getting Started</h3>
              <p>Welcome to our application! Here's how to get started:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Create an account or log in</li>
                <li>Set up your profile</li>
                <li>Explore the dashboard</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Feature 1: Description of feature 1</li>
                <li>Feature 2: Description of feature 2</li>
                <li>Feature 3: Description of feature 3</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold">Tips and Tricks</h3>
              <ul className="list-disc pl-5 mt-2">
                <li>Tip 1: Description of tip 1</li>
                <li>Tip 2: Description of tip 2</li>
                <li>Tip 3: Description of tip 3</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold">Need Help?</h3>
              <p>If you need further assistance, please contact our support team at support@example.com</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}