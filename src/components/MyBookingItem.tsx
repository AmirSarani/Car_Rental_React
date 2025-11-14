import React from "react";

export const MyBookingItem = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center bg-[#f1f5f9] py-18">
        <p className="text-[36px] font-semibold">My Booking</p>
        <p className="text-[14px] text-gray-500 text-center">
          View and manage your all car bookings
        </p>
      </div>
    </>
  );
};

export default MyBookingItem;
