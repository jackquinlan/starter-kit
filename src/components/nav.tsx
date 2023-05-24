import React from "react";

import { Button } from "./ui/button";

export const Nav = () => {
    return (
        <div className="container flex justify-end py-6">
            <Button variant="outline" href="/login">
                Login
            </Button>
        </div>
    );
};
