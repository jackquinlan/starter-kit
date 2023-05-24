import React from "react";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
