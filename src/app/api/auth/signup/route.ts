import type { NextApiRequest, NextApiResponse } from "next";

import { hashPassword } from "@/lib/password";
import { db } from "@/lib/prisma";

export async function POST(req: Request) {
    const json = await req.json();
    const { username, email, password } = json;

    if (!username || !email || !password)
        return new Response("", {
            status: 422,
            statusText: "Invalid input, please provide all fields.",
        });
    if (!email.includes("@"))
        return new Response("", {
            status: 422,
            statusText: "Invalid email address.",
        });

    const existingUser = await db.user.findFirst({
        where: {
            email: email,
        },
    });
    if (existingUser) {
        return new Response("", {
            status: 409,
            statusText: "Email address already registered.",
        });
    }
    const hashedPassword = await hashPassword(password);

    const user = await db.user.create({
        data: {
            email: email,
            name: username,
            hashedPassword: hashedPassword,
        },
    });
    if (!user)
        return new Response("", {
            status: 500,
            statusText: "Unknown error occurred when creating new user.",
        });
    return new Response("", {
        status: 201,
        statusText: "Created new user successfully",
    });
}
