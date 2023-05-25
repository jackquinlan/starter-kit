"use client";

import React from "react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function AppHome() {
    return (
        <Button onClick={() => signOut({ callbackUrl: "/login" })}>
            Sign Out
        </Button>
    );
}
