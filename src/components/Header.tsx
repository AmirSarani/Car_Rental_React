import React, { useState } from "react";
import header_hamburger_logo from "../media/header_hamburger_logo.svg";
import header_logo from "../media/header_logo.svg";
import X_logo from "../media/X_logo.svg";

import clsx from "clsx";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[65px] bg-[#F1F5F9] flex flex-row justify-between items-center px-[18px] border-b-1 border-b-gray-500">
        <img src={header_logo} alt="" />

        <button
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
        >
          {open ? (
            <img src={X_logo} alt="" />
          ) : (
            <img src={header_hamburger_logo} alt="" />
          )}
        </button>

        <div
          className={clsx(
            "flex justify-start items-start flex-col fixed bg-[#F1F5F9] w-full h-full top-16 transition-all  px-[25px] py-[20px]",
            { "-right-full": !open, "right-0": open }
          )}
        >
          <ul className="text-[16px] flex flex-col gap-[15px] mb-[40px] text-[#4A5565]">
            <li>Home</li>
            <li>Cars</li>
            <li>My Bookings</li>
            <li>List cars</li>
          </ul>

          <button className="bg-blue-800 py-[8px] px-[32px] rounded-[10px] text-white">
            Login
          </button>
        </div>
      </div>
    </>
  );
};
