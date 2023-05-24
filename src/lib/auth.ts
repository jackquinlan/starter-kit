import { type NextAuthOptions, type Session } from "next-auth";
// Available OAuth Providers
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

import Adapter from "@/lib/adapter";
import { verifyPassword } from "@/lib/password";
import { db } from "@/lib/prisma";

export const nextAuthOptions: NextAuthOptions = {
    callbacks: {
        session({ session, token }) {
            const updatedSession: Session = {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                    email: token.email,
                },
            };
            return updatedSession;
        },
        jwt: async ({ user, token, account }) => {
            if (!user) {
                const userFromDatabase = await db.user.findFirst({
                    where: { email: token.email! },
                    select: { id: true, email: true, name: true },
                });
                if (!userFromDatabase) return token;
                return { ...userFromDatabase, ...token };
            }
            if (!account) return token;

            return {
                ...token,
                id: user.id,
                email: user.email,
            };
        },
    },
    /**
     * Custom next-auth adapter for prisma
     */
    adapter: Adapter(db) as any,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            authorize: async (credentials: any, _req) => {
                const { password, email } = credentials;
                if (!email || !password) throw new Error("Invalid credentials");
                const user = await db.user.findFirst({
                    where: {
                        email: email,
                    },
                });
                if (
                    !user ||
                    !user.hashedPassword ||
                    !(await verifyPassword(user.hashedPassword, password))
                )
                    throw new Error("Invalid email or password");

                return user;
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 8 * 60 * 60,
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxAge: 8 * 60 * 60,
    },
    pages: {
        signIn: "/login",
    },
};
