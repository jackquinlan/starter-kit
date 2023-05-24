import React from "react";

import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/login-form";
import { OAuthButtons } from "@/components/oauth-buttons";

export default function Login() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-0 text-center">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Welcome back
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Please sign in with one of the following options
                </p>
            </div>
            <div className="flex flex-col justify-center w-[400px]">
                <LoginForm />
                <p className="text-sm leading-7 [&:not(:first-child)]:mt-6 text-center pb-1">
                    Or continue with
                </p>
                <OAuthButtons />
                <div className="text-center pt-2">
                    <Button className="text-sm" variant="link" href="/signup">
                        Don&apos;t have an account? Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
}
