"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

export default function CategoryInput({
    icon: Icon,
    label,
    selected,
    onClick,
}: CategoryInputProps) {
    return (
        <div
            onClick={() => onClick(label)}
            className={cn(
                " rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black cursor-pointer transition border-neutral-200",
                { "border-black": selected }
            )}
        >
            <Icon size={30} />
            <div className=" font-semibold">{label}</div>
        </div>
    );
}
