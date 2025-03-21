import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {Toaster} from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import {ThemeProvider} from "@/components/theme-provider";
import {CircleCheck} from "lucide-react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Form sizing tool",
    description: "Created by Global Logic",
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <main className="p-2 space-y-4">
                <Navbar/>
                {children}
            </main>
            <Toaster icons={{success: <CircleCheck size={'20'} color={'DodgerBlue'}/>}}/>
        </ThemeProvider>
        </body>
        </html>
    );
}
