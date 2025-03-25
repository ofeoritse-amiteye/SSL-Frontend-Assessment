import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setProfilePage,setIsSidebarOpen} from "../../redux/store/slice";

export default function SidebarModal ()
{
    const sidebar = [
        {
            icon : "/assets/images/Circled-menu.svg",
            Label : "Dashboard",
            onClick: () => {
                dispatch(setProfilePage(false));
                setActiveItem("Dashboard");
                dispatch(setIsSidebarOpen(false));
            },
        },
        {
            icon : "/assets/images/Male-User.svg",
            Label : "My Profile",
            onClick: () => {
                dispatch(setProfilePage(true));
                setActiveItem("My Profile");
                dispatch(setIsSidebarOpen(false));
            },
        },
        {
            icon : "/assets/images/Favorite.svg",
            Label : "Favorites"
        },
        {
            icon : "/assets/images/Agree.svg",
            Label : "My Mutuals"
        },
        {
            icon : "/assets/images/Paid-Bill.svg",
            Label : "My subscirbed"
        },
        {
            icon : "/assets/images/Romance.svg",
            Label : "Intrested in me"
        },
        {
            icon : "/assets/images/Gear.svg",
            Label : "settings"
        },
        {
            icon : "/assets/images/Shutdown.svg",
            Label : "Logout"
        }
    ]
    const [activeItem, setActiveItem] = useState("Dashboard");
        const dispatch = useDispatch();
        const isSidebarOpen = useSelector ((state: RootState)=>state.profile.isSidebarOpen)
    return(
    <div
        className={`fixed flex flex-col items-center left-0 top-1/4  w-80 bg-white shadow-lg rounded-lg p-5 transition-transform duration-300 z-50 ${
            isSidebarOpen ? "translate-x-6" : "-translate-x-full"
        }`}
    >
        <div className="flex flex-col items-center">
            <Image src={"assets/images/travel-agent.svg"} alt="N/A" width={120} height={50}/>
            <p className="font-bold text-black mt-3">Temiloluwa</p>
        </div>
        <div className="w-[80%] mt-5 space-y-1">
            {sidebar.map((item, index)=>(
            <button key={index} onClick={item.onClick } className={`w-full h-10 rounded-lg text-black flex items-center justify-center space-x-5 ${
                activeItem === item.Label ? "bg-red-500 text-white" : "hover:bg-gray-100"
                }`}>
                    <div className=""><Image src={item.icon} alt="N/A" width={30} height={30} className="mr-5"/></div>
                    <div className=" w-[50%] text-left">{item.Label}</div>
            </button>
            ))}
        </div>
    </div>
    )
}