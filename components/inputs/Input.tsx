"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

export default function Input({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    required,
    register,
    errors,
}: InputProps) {
    return (
        <div className=" w-full relative">
            {formatPrice && (
                <BiDollar
                    size={24}
                    className=" text-neutral-700 absolute top-5 left-2"
                />
            )}
            <input
                type={type}
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                className={cn(
                    "peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black",
                    { "border-rose-500 focus:border-rose-500": errors[id] },
                    { "pl-9": formatPrice }
                )}
            />
            <label
                htmlFor={id}
                className={cn(
                    "absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400",
                    { "left-9": formatPrice },
                    { "text-rose-500": errors[id] }
                )}
            >
                {label}
            </label>
        </div>
    );
}
