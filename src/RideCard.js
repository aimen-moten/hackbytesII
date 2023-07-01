import React from "react";

export default function RideCard({to, from, time, date, datePosted, contactNumber, charges }){
    return(
            <div className="max-w-sm rounded-[20px] overflow-hidden shadow-lg bg-gradient-to-l from-violet-500 to-fuchsia-500 via-blue-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 animate-gradient-x">
            <div className="px-6 py-4">
                <div className="font-black text-white  text-3xl mb-2">{`${from} to ${to}`}</div>
                <p className="text-white text-[20px]">Time: {time}</p>
                <p className="text-white text-[20px]">Date: {date}</p>
                <p className="text-white text-[20px]">Contact Number: {contactNumber}</p>
                {charges && (
                <p className="text-white text-[20px]">Charges: {charges}</p>
                )}
                <p className="text-white text-[20px]">Date Posted: {datePosted}</p>
            </div>
            </div>
    )   
}