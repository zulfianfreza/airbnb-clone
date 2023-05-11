"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
    label?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

export default function Button({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                " relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-rose-500 border-rose-500 text-white py-3 text-md font-semibold border-2",
                { "bg-white border-black text-black": outline },
                { "py-1 text-sm font-light border-[1px]": small }
            )}
        >
            {Icon && <Icon size={24} className=" absolute left-4 top-3" />}
            {label}
        </button>
    );
}
