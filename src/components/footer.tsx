import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="container py-8 text-accent-foreground flex justify-between">
            <div>
                Built by{" "}
                <Link
                    href="https://twitter.com/johnquinlanjr"
                    className="underline-offset-4 underline text-primary"
                >
                    jackquinlan
                </Link>
            </div>
            <div>
                Code available on{" "}
                <Link
                    href="https://github.com/jackquinlan/starter-kit"
                    className="underline-offset-4 underline text-primary"
                >
                    Github
                </Link>
            </div>
        </footer>
    );
};
