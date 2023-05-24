"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const signupSchema = z
    .object({
        email: z.string().email(),
        username: z.string().min(3),
        // prettier-ignore
        password: z.string().min(6, "Must be at least 6 characters").refine((val) => {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(val);
    }, { 
        message: "Invalid password", 
    }),
        confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Passwords must match",
        path: ["confirm"],
    });
export type SignupValues = z.infer<typeof signupSchema>;

export const SignupForm = () => {
    const [error, setError] = useState<string>("");
    const form = useForm<SignupValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirm: "",
        },
        mode: "onChange",
    });

    const router = useRouter();
    async function handleSubmit(data: SignupValues) {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(data),
        });
        if (res.status === 201) {
            const { email, password } = data;
            // sign in using credentials
            const res = await signIn<"credentials">("credentials", {
                email,
                password,
                redirect: false,
            });
            if (res && res.error) setError(res.error);
            router.push("/app");
            return;
        } else {
            setError(res.statusText);
        }
    }

    return (
        <Form {...form}>
            {error && (
                <Alert variant="destructive" className="my-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="you@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="••••••••••••••"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                                Your password must be at least 6 characters and
                                contain at least one lowercase letter, uppercase
                                letter, special symbol, and digit.
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirm"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="••••••••••••••"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    Create Account
                </Button>
            </form>
        </Form>
    );
};
