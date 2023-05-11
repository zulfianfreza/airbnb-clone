"use client";

interface ErrorStateProps {
    error: Error;
}

import EmptyState from "@/components/EmptyState";
import React, { useEffect } from "react";

export default function ErrorState({ error }: ErrorStateProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return <EmptyState title="Uh Oh" subtitle="Something went wrong" />;
}
