"use client";

import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
    title: string;
    imageSrc: string;
    locationValue: string;
    id: string;
    currentUser?: SafeUser | null;
}

export default function ListingHead({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser,
}: ListingHeadProps) {
    const { getByValue } = useCountries();
    const location = getByValue(locationValue);
    return (
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
            <div className=" w-full aspect-video overflow-hidden rounded-xl relative">
                <Image
                    src={imageSrc}
                    alt="Image"
                    fill={true}
                    className="  object-cover"
                />
                <div className=" absolute top-5 right-5">
                    <HeartButton listingId={id} currentUser={currentUser} />
                </div>
            </div>
        </>
    );
}
