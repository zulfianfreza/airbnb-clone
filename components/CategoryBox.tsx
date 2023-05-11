"use client";

import { cn } from "@/utils/cn";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
    label: string;
    icon: IconType;
    selected?: boolean;
}
export default function CategoryBox({
    label,
    icon: Icon,
    selected,
}: CategoryBoxProps) {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label,
        };

        if (params?.get("category") === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl(
            {
                url: "/",
                query: updatedQuery,
            },
            { skipNull: true }
        );

        router.push(url);
    }, [label, params, router]);
    return (
        <div
            onClick={handleClick}
            className={cn(
                "flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer border-transparent text-neutral-500",
                { "border-b-neutral-800 text-neutral-800": selected }
            )}
        >
            <Icon size={26} />
            <div className=" font-medium text-sm">{label}</div>
        </div>
    );
}
