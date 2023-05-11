import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import getReservations from "@/actions/getReservations";

interface IParams {
    listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return <EmptyState />;
    }
    return (
        <ListingClient
            listing={listing}
            reservation={reservations}
            currentUser={currentUser}
        ></ListingClient>
    );
}
