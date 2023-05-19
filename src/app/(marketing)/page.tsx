import React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const cards: CardProps[] = [
    {
        title: "Server Components",
        description:
            "Uses the Next.js 13 /app directory, layouts system and React 18 client and server components.",
        link: "https://nextjs.org/docs/getting-started/react-essentials#server-components",
    },
    {
        title: "shadcn/ui",
        description:
            "The greatest UI components on the planet. Built using Radix UI and TailwindCSS.",
        link: "https://ui.shadcn.com/",
    },
    {
        title: "Next Auth",
        description:
            "Includes credentials and Github OAuth provider sign in. Uses middleware to protect routes.",
        link: "https://next-auth.js.org/",
    },
    {
        title: "Prisma",
        description:
            "Typesafe database ORM with readable schema. Example database hosting using PlanetScale.",
        link: "https://www.prisma.io/",
    },
];

export default function Home() {
    return (
        <div className="container pt-32 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Simple{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-400">
                        Next.js 13
                    </span>{" "}
                    Starter Kit
                </h1>
                <p className="text-lg lg:text-xl text-foreground">
                    Skip all the annoying setup and get right to building. This
                    project sets up everything you need to dive right into
                    building awesome user experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:px-32">
                {cards.map((card) => (
                    <FeatureCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}

interface CardProps {
    title: string;
    description: string;
    link: string;
}

const FeatureCard: React.FC<CardProps> = ({ title, description, link }) => {
    return (
        <Card className="rounded-[8px]">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-md">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button href={link} variant="outline">
                    Learn More
                </Button>
            </CardFooter>
        </Card>
    );
};
