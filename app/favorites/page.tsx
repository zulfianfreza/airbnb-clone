import getCurrentUser from "@/actions/getCurrentUser";
import { getFavoriteListings } from "@/actions/getFavoriteLitings";
import EmptyState from "@/components/EmptyState";
import React from "react";
import FavoritesClient from "./FavoritesClient";

export default async function FavoritePage() {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();

    if (listings.length === 0) {
        return (
            <EmptyState
                title="Noo favorites found"
                subtitle="Looks like you have no favorite listings
                "
            />
        );
    }
    return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
