import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import EmptyState from "@/components/EmptyState";
import React from "react";
import TripsClient from "./PropertiesClient";
import getListings from "@/actions/getListings";
import PropertiesClient from "./PropertiesClient";

export default async function PropertiesPage() {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState title="Unauthorized" subtitle="Please login" />;
    }

    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No properties found"
                subtitle="Looks like you haven't properties"
            />
        );
    }

    return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
