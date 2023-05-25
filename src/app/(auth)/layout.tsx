import React from "react";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container flex flex-start py-6">
                <Button href="/" variant="ghost">
                    Back
                </Button>
            </div>
            <main className="flex-1 mx-auto">{children}</main>
            <Footer />
        </div>
    );
}
