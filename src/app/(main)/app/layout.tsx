import React from "react";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
        </div>
    );
}
