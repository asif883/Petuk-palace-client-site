import React from 'react';
import ReservationBanner from '../Component/ReservationSection/ReservationBanner';
import ReservationForm from '../Component/ReservationSection/ReserveForm';
import TableCategory from '../Component/ReservationSection/TableCategory';

const Reservation = () => {
    return (
        <div>
            <ReservationBanner/>
            <ReservationForm/>
            <TableCategory/>
        </div>
    );
};

export default Reservation;