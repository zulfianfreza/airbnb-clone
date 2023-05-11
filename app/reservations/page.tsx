import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import EmptyState from "@/components/EmptyState";
import React from "react";
import ReservationClient from "./ReservationClient";

export default async function ReservationPage() {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return <EmptyState />;
    }

    const reservations = await getReservations({ authorId: currentUser.id });
    if (reservations.length === 0) {
        return (
            <EmptyState
                title="No reservations found"
                subtitle="Looks like you have no reservations on your preperties"
            />
        );
    }
    return (
        <ReservationClient
            reservations={reservations}
            currentUser={currentUser}
        />
    );
}
