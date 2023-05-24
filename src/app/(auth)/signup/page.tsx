import React from "react";

import { Button } from "@/components/ui/button";
import { OAuthButtons } from "@/components/oauth-buttons";
import { SignupForm } from "@/components/signup-form";

export default function Signup() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-0 text-center">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Create an account
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Please enter the following information
                </p>
            </div>
            <div className="flex flex-col justify-center w-[400px]">
                <SignupForm />
                <p className="text-sm leading-7 [&:not(:first-child)]:mt-6 text-center pb-1">
                    Or continue with
                </p>
                <OAuthButtons />
                <div className="text-center pt-2">
                    <Button className="text-sm" variant="link" href="/login">
                        Already have an account? Login
                    </Button>
                </div>
            </div>
        </div>
    );
}
