import React from "react";
import logo from "./logo.png"


export default function  Navbar() {
    return (
        <div>
           <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-orange-500 to-yellow-500 animate-gradient-x px-24 py-1">
            <div class="flex items-center flex-shrink-0 text-white mr-6 ml-0 ">
                <img src={logo} className="max-w-10 max-h-64"></img>
                <span class="font-black font-playfair-display text-5xl tracking-tight">Ride With Me</span>
            </div>
            
            <div class="w-full block flex-wrap lg:flex lg:items-center lg:w-auto">
                
                <div>
                <a href="#" class="inline-block align-right gap-10 text-lg px-4 py-2 mx-12 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#0C134F] hover:bg-white mt-4 lg:mt-0">Sign In</a>
                    <a href="#" class="inline-block align-right gap-10 text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#0C134F] hover:bg-white mt-4 lg:mt-0">Post a ride</a>
                </div>
            </div>
            </nav>
        </div>
    )
}