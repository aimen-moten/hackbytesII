import React from "react";
import RideCard from "./RideCard";

export default function Rides(){
    return (
    <div className="pt-20 pb-20 flex flex-wrap gap-20 px-auto justify-center bg-gradient-to-r from-red-500 to-orange-500 via-pink-500 animate-gradient-x">
        <RideCard 
            to="Walmart"
            from="UB"
            time="6 PM"
            date="23rd June"
            datePosted="June 3, 2023"
            contactNumber="765-789-0980"
            charges="0 USD"
        />
        <RideCard 
            to="Chicago"
            from="Humbert Hall"
            time="6 AM"
            date="14th August, 2023"
            datePosted="June 3, 2023"
            contactNumber="765-289-0280"
            charges="40 USD (both ways)"
        />
        <RideCard 
            to="Indianapolis Stadium"
            from="Roy O West Parking Lot"
            time="12 PM"
            datePosted="June 5, 2023"
            contactNumber="765-739-0980"
            charges="10 USD"
        />
        <RideCard 
            to="Ohio (Cleveland)"
            from="Mason Hall"
            time="12 PM"
            date="June 12"
            datePosted="June 10, 2023"
            contactNumber="464-789-0980"
            charges="20 USD"
        />
        <RideCard 
            to="Bowling Alley"
            from="Anywhere"
            time="9 PM"
            date="July 7th"
            datePosted="July 1, 2023"
            contactNumber="365-789-0980"
            charges="Free"
        />
        <RideCard 
            to="Walmart"
            from="UB"
            time="9 PM"
            date="Tonight"
            datePosted="June 3, 2023"
            contactNumber="765-789-0980"
            charges="0 USD"
        />
       
    </div>
    )
}