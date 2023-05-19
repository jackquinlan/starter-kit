import React from "react";
import clsx from "clsx";

import { ButtonOrLink, Props } from "@/components/ui/button-or-link";

type BUTTON_SIZE = "sm" | "md" | "lg";
type BUTTON_VARIANT = "brand" | "outline" | "link";

export type ButtonThemeProps = {
    size?: BUTTON_SIZE;
    variant?: BUTTON_VARIANT;
};

const classes = {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none \
    disabled:cursor-not-allowed disabled:opacity-70",
    size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 py-2 px-4 text-sm",
        lg: "px-6 py-3 text-lg",
    },
    variant: {
        brand: "text-white bg-brand-500 hover:bg-brand-600",
        outline:
            "border border-input hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
    },
};

export function getButtonClasses(
    style: { size?: BUTTON_SIZE; variant?: BUTTON_VARIANT },
    ...rest: string[]
) {
    const { size = "md", variant = "brand" } = style;
    return clsx(
        classes["base"],
        classes["size"][size],
        classes["variant"][variant],
        ...rest,
    );
}

export type ButtonProps = ButtonThemeProps & Props;
export const Button: React.FC<ButtonProps> = ({
    size = "md",
    variant = "brand",
    className = "",
    disabled = false,
    children,
    ...props
}) => {
    return (
        <ButtonOrLink
            className={getButtonClasses({ size, variant }, className)}
            disabled={disabled}
            {...props}
        >
            {children}
        </ButtonOrLink>
    );
};
