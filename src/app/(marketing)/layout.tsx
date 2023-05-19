import React from "react";

import { Footer } from "@/components/footer";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
