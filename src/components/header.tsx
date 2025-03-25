"use client"
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { setProfilePage } from "../../redux/store/slice";

export default function Header()
{
    const dispatch = useDispatch();
    return(
        <header className="h-20 w-full shadow-md shadow-gray-400 flex fixed bg-white z-40">
            <div className="md:w-[30%] lg:w-[15%] lg:min-w-[180px] flex justify-center items-center shadow-sm shadow-gray-400">
                <div className="flex space-x-8 items-center w-[70%] h-20">
                    <div className="w-[40%]">
                        <Image src={"/assets/images/logo.svg"} alt="N/A" width={50} height={50} className="min-w-[45px]"/>
                    </div>
                    <div className="w-[30%] hidden md:block">
                        <p className="font-bold text-xl text-black">Chuly</p>
                    </div>
                </div>
                
            </div>
            <div className=" w-full flex items-center justify-center">
                <div className="h-16 w-[90%] flex items-center md:justify-between ">
                    <div className="h-12 md:px-10 w-[90%] md:w-[80%] lg:w-[50%] flex items-center space-x-5">
                        <div className="relative w-[80%] md:w-[60%] h-10">
                            <input type="search" className="rounded-full h-full w-full pl-10 border-2 text-gray-400 border-gray-400 focus:outline-none" placeholder="Search"/>
                            <Image src={"/assets/images/search.svg"} alt="N/A" width={20} height={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
                        </div>
                        <button className="md:flex min-w-[100px] items-center p-2 space-x-3 h-10 w-[20%] border-2 border-gray-400 rounded-full hidden">
                            <Image src={"/assets/images/filter.svg"} alt="N/A" width={18} height={50}/>
                            <p className="text-gray-400 ">Filter</p>
                        </button>
                    </div>
                    <div className="w-[15%] h-full  flex items-center space-x-7 p-1 justify-end">
                        <div className="">
                            <Image src={"/assets/images/Alarm.svg"} alt="N/A" width={30} height={20} className="min-w-[30px]"/>
                        </div>
                        <button onClick={() => dispatch(setProfilePage(true))} className="h-full w-[40%] flex items-center justify-center">
                            <Image src={"assets/images/travel-agent.svg"} alt="N/A" width={50} height={50} className="rounded-full w-[80%] min-w-[40px]"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
