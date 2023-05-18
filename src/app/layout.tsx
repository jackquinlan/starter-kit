import "@/globals.css";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nextjs Starter Kit",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.className,
                )}
            >
                {children}
            </body>
        </html>
    );
}
