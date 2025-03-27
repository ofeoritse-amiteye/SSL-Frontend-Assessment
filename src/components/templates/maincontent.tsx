"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ProgressBar from "../progress_bar";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setProfilePage, setIsSidebarOpen } from "../../../redux/store/slice";
import SidebarModal from "../modal";

export default function Maincontent()
{
    const profiles =[
        {
            id: 1,
            coverImage: "/assets/images/photo1.svg",
            profileImage: "/assets/images/photo2.svg",
            name: "Davina",
            age: 23,
            location: "Abuja",
            matchPercentage: "85%",
            verified: true,
          },
          {
            id: 2,
            coverImage: "/assets/images/emilyc.svg",
            profileImage: "/assets/images/emilyp.svg",
            name: "Emily",
            age: 31,
            location: "Lagos",
            matchPercentage: "80%",
            verified: false,
          },
          {
            id: 3,
            coverImage: "/assets/images/johnc.svg",
            profileImage: "/assets/images/johnp.svg",
            name: "John",
            age: 28,
            location: "Delta",
            matchPercentage: "72%",
            verified: true,
          },
          {
            id: 4,
            coverImage: "/assets/images/madsc.svg",
            profileImage: "/assets/images/madsp.svg",
            name: "Mads",
            age: 26,
            location: "",
            matchPercentage: "77%",
            verified: false,
          },
          {
            id: 5,
            coverImage: "/assets/images/lovec.svg",
            profileImage: "/assets/images/lovep.svg",
            name: "Love",
            age: 26,
            location: "Lagos",
            matchPercentage: "85%",
            verified: false,
          },
          {
            id: 6,
            coverImage: "/assets/images/photo1.svg",
            profileImage: "/assets/images/Karen.svg",
            name: "karen",
            age: 23,
            location: "Abuja",
            matchPercentage: "85%",
            verified: false,
          },
          {
            id: 7,
            coverImage: "/assets/images/sharonc.svg",
            profileImage: "/assets/images/sharonp.svg",
            name: "Sharon",
            age: 24,
            location: "Lagos",
            matchPercentage: "80%",
            verified: false,
          },
          {
            id: 8,
            coverImage: "/assets/images/kevinc.svg",
            profileImage: "/assets/images/kevinp.svg",
            name: "Kevin",
            age: 30,
            location: "PH",
            matchPercentage: "70%",
            verified: true,
          },
          {
            id: 9,
            coverImage: "/assets/images/lovec.svg",
            profileImage: "/assets/images/lovep.svg",
            name: "Love",
            age: 26,
            location: "",
            matchPercentage: "85%",
            verified: false,
          },
          {
            id: 10,
            coverImage: "/assets/images/lilyc.svg",
            profileImage: "/assets/images/lilyp.svg",
            name: "Lily",
            age: 25,
            location: "Lagos",
            matchPercentage: "89%",
            verified: false,
          },
          {
            id: 11,
            coverImage: "/assets/images/davonc.svg",
            profileImage: "/assets/images/davonp.svg",
            name: "Davon",
            age:34,
            location: "Lagos",
            matchPercentage: "80%",
            verified: false,
          },
          {
            id: 12,
            coverImage: "/assets/images/vivianc.svg",
            profileImage: "/assets/images/vivianp.svg",
            name: "Vivian",
            age: "",
            location: "",
            matchPercentage: "71%",
            verified: false,
          },
          {
            id: 13,
            coverImage: "/assets/images/davinac.svg",
            profileImage: "/assets/images/davinap.svg",
            name: "Davina",
            age: 21,
            location: "Ibadan",
            matchPercentage: "80%",
            verified: false,
          },
          {
            id: 14,
            coverImage: "/assets/images/jackc.svg",
            profileImage: "/assets/images/jackp.svg",
            name: "Jack",
            age: 30,
            location: "Lagos",
            matchPercentage: "87%",
            verified: false,
          },
          {
            id: 15,
            coverImage: "/assets/images/jackc.svg",
            profileImage: "/assets/images/jackp.svg",
            name: "Dave",
            age: 26,
            location: "Lagos",
            matchPercentage: "05%",
            verified: false,
          },
    ]

    const about = [
        {
            id :1,
            icon : "/assets/images/image16.svg",
            label : "Gender",
            value : "Male",
        },
        {
            id :2,
            icon : "/assets/images/image17.svg",
            label : "Age",
            value : "27",
        },
        {
            id :3,
            icon : "/assets/images/image18.svg",
            label : "Occupation",
            value : "Engineer",
        },
        {
            id :4,
            icon : "/assets/images/image19.svg",
            label : "Relationship",
            value : "Single",
        },
        {
            id :5,
            icon : "/assets/images/image20.svg",
            label : "Location",
            value : "Lagos",
        },
        {
            id :6,
            icon : "/assets/images/image21.svg",
            label : "Height range",
            value : "5'5 - 6'0",
        },
        {
            id :7,
            icon : "/assets/images/image22.svg",
            label : "Weight range",
            value : "60 - 70kg",
        },
        {
            id :8,
            icon : "/assets/images/image23.svg",
            label : "Religion",
            value : "Christianity",
        },
        {
            id :9,
            icon : "/assets/images/image24.svg",
            label : "Nationality",
            value : "Nigerian",
        },
    ]


    const [progress] = useState(60);
    const [showMenu, setshowMenu] = useState(false)
    const profilePage = useSelector((state: RootState) => state.profile.profilePage);
    const isSidebarOpen = useSelector ((state: RootState)=>state.profile.isSidebarOpen)
    const dispatch = useDispatch();
    const [likedProfiles, setLikedProfiles] = useState<number[]>([]);

    const toggleLike = (id: number) => {
      setLikedProfiles((prev) =>
        prev.includes(id) ? prev.filter((profileId) => profileId !== id) : [...prev, id]
      );
    };

    if(profilePage)
    {
        return(
            <div className="w-full bg-[#F6F6F6] p-3 md:p-10 flex lg:space-x-15">
                <div className="h-5 mt-20 cursor-pointer" onClick={() => dispatch(setIsSidebarOpen(true))}>
                    <Image src={"/assets/images/Menu.svg"} alt="N/A" width={20} height={30} className="min-w-[20px]"/>
                </div>
                <SidebarModal/>
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 w-full ${
                        isSidebarOpen ? "opacity-50 z-40" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => dispatch(setIsSidebarOpen(false))}
                ></div>
                <div className="w-[94%] h-full text-black flex flex-col items-center mt-20">
                    <div className="w-[90%] md:h-52 h-44 px-10 py-5 rounded-xl bg-cover bg-center"  style={{ backgroundImage: "url('/assets/images/background.svg')" }}>
                        <div className="flex justify-between">
                            <button onClick={() => dispatch(setProfilePage(false))} className="w-16 lg:w-20 bg-black text-center text-white rounded-lg opacity-75">
                                Back
                            </button>
                            <button className="lg:w-32 w-28 bg-black text-center text-white rounded-lg opacity-75">
                                Update cover
                            </button>
                        </div>
                    </div>    
                    <div className="lg:flex justify-between w-[90%] h-10">
                        <div className="flex lg:w-[50%] ">
                            <div className="-mt-24 md:-mt-32 flex px-3 md:px-20 w-full space-x-5 bg">
                                <div className="h-full w-full">
                                    <Image src={"/assets/images/travel-agent-profile.svg"} alt="N/A" width={200} height={50} className="w-[80%] max-w-[150px] md:w-[80%] lg:w-full md:min-w-[200px]"/>
                                    <div className="flex justify-end w-[80%] max-w-[150px] md:w-full md:max-w-full lg:w-full lg:max-w-full">
                                    <Image src={"/assets/images/Add.svg"} alt="N/A" width={40} height={30} className=" w-[35%] md:w-[20%] max-w-[30px] -mt-3 "/>
                                    </div>
                                </div>
                                <div className="h-16 w-full mt-5 text-xs md:text-base md:min-w-[300px]">
                                    <p className="h-8 w-fu font-bold flex items-center">Temiloluwa, 27 <Image src={"/assets/images/Create.svg"} alt="N/A" width={30} height={30} className="ml-5"/></p>
                                    <p className="h-8 font-bold">Lagos</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-5 items-center h-full float-end lg:float-none md:-mt-20 lg:-mt-0">
                            <button  className="bg h-6 w-24 rounded-full bg-red-500 text-[12px] text-white">Edit Profile</button>
                            <button  className="bg h-6 w-28 rounded-full bg-red-500 text-[12px] text-white">Edit match setup</button>
                        </div>
                    </div>
                    <div className="lg:w-[85%] mt-20">
                        <div className="lg:w-[43%] h-24">
                            <textarea className="w-full h-full bg-white rounded-xl border border-gray-300 py-5 px-10 resize-none lg:min-w-[500px]" name="" id="" placeholder="A few words about myself"></textarea>
                        </div>
                        <div className="lg:w-[43%] space-y-5 bg-white rounded-xl border border-gray-300 p-3 mt-5 flex flex-wrap space-x-5 lg:min-w-[500px]">
                            <Image src={"/assets/images/travel-agent-profile.svg"} alt="N/A" width={75} height={50}/>
                            <Image src={"/assets/images/image3.svg"} alt="N/A" width={75} height={50}/>
                            <Image src={"/assets/images/image3.svg"} alt="N/A" width={75} height={50}/>
                            <Image src={"/assets/images/image3.svg"} alt="N/A" width={75} height={50}/>
                            <Image src={"/assets/images/image3.svg"} alt="N/A" width={75} height={50}/>
                        </div>
                        <div className="w-full mt-5 lg:flex flex-wrap justify-between space-y-5 ">
                            <div className="lg:w-[30%] min-w-[350px] bg-white border border-gray-300 ">
                                <div className="w-full p-3">
                                    <div className="flex w-full justify-between">
                                        <p className="font-bold">My Hobbies</p>
                                        <Image src={"/assets/images/Create.svg"} alt="N/A" width={20} height={20} className="ml-5"/>
                                    </div>
                                    <div className="w-full flex flex-wrap mt-5 space-x-5 space-y-5">
                                        <Image src={"/assets/images/image4.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image5.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image6.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image7.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image8.svg"} alt="N/A" width={55} height={50}/>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] min-w-[350px] bg-white border border-gray-300 ">
                                <div className="w-full p-3">
                                    <div className="flex w-full justify-between">
                                        <p className="font-bold">My Interest</p>
                                        <Image src={"/assets/images/Create.svg"} alt="N/A" width={20} height={20} className="ml-5"/>
                                    </div>
                                    <div className="w-full flex flex-wrap mt-5 space-x-5 space-y-5 ">
                                        <Image src={"/assets/images/image9.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image10.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image11.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image12.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image13.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image14.svg"} alt="N/A" width={55} height={50}/>
                                        <Image src={"/assets/images/image15.svg"} alt="N/A" width={55} height={50}/>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] min-w-[350px] bg-white border border-gray-300 ">
                            <div className="w-full p-3">
                                    <div className="flex w-full justify-between">
                                        <p className="font-bold">About Me</p>
                                    </div>
                                    <div className="w-[80%] mt-5 space-y-3">
                                        {about.map((item, index)=>(
                                        <div key={index} className=" w-full flex justify-between space-x-5">
                                            <div className="w-[50%] flex items-center space-x-3 text-sm">
                                                <Image src={item.icon} alt="N/A" width={20} height={20}/>
                                                <p>{item.label}</p>
                                            </div>
                                            <div className="w-[40%] flex">
                                                <p className="font-bold">{item.value}</p>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-[30%] min-w-[350px] w-full bg-white border border-gray-300 ">
                            <div className="w-full p-3">
                                    <div className="flex w-full justify-between">
                                        <p className="font-bold">I`m Looking for</p>
                                    </div>
                                    <div className="w-[80%] mt-5 space-y-3">
                                        {about.map((item, index)=>(
                                        <div key={index} className=" w-full flex justify-between space-x-5">
                                            <div className="w-[50%] flex items-center space-x-3 text-sm">
                                                <Image src={item.icon} alt="N/A" width={20} height={20}/>
                                                <p>{item.label}</p>
                                            </div>
                                            <div className="w-[40%] flex">
                                                <p className="font-bold">{item.value}</p>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
    else{
        return(
            <div className="w-full bg-[#F6F6F6] p-5 lg:p-10 flex lg:space-x-15">
                <div className="h-5 mt-20 cursor-pointer" onClick={() => dispatch(setIsSidebarOpen(true))}>
                    <Image src={"/assets/images/Menu.svg"} alt="N/A" width={20} height={30} className="min-w-[20px]"/>
                </div>
                <SidebarModal/>
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 w-full ${
                        isSidebarOpen ? "opacity-50 z-40" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => dispatch(setIsSidebarOpen(false))}
                ></div>
                <div className="w-[94%] h-full text-black mt-20 ">
                    <div className="md:w-[70%] h-32 lg:flex md:space-x-20 p-5">
                        <div className="lg:w-[50%] w-full h-full flex items-center space-x-5">
                            <div className="h-full flex items-center w-[40%] ">
                                <Image src={"/assets/images/travel-agent.svg"} alt="N/A" width={50} height={50} className="rounded-full w-[70%] md:w-[50%] lg:w-full"/>
                            </div>
                            <div className="w-full">
                                <p className="font-bold text-sm">Welcome, Temiloluwa</p>
                                <p className="mt-2 text-[12px]">My profile completeness</p>
                                <div className="mt-2 flex items-center space-x-3">
                                    <ProgressBar progress={progress} />
                                    <p className="text-sm font-semibold">60%</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[45%] lg:h-full lg:flex items-center justify-center mt-8 md:mt-4 lg:mt-0 ">
                            <div className="flex space-x-5 items-center w-[60%] min-w-[330px]">
                                <p className="font-bold text-xs md:text-sm w-[40%]">Relationship Type :</p>
                                <div className="relative inline-block w-[50%]">
                                    <div className="">
                                        <button onClick={() => setshowMenu((prev) => !prev)} type="button" className="inline-flex w-[80%] justify-between gap-x-1.5 rounded-lg bg-white px-3 py-1 text-xs items-center text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                            Dating
                                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                        </button>
                                    </div>
                                    {showMenu && 
                                    <div className="absolute z-10 w-full mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                        <div className="py-1" role="none">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Dating</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Married</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Friendship</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Professional</a>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-wrap justify-center  space-x-3 space-y-10 md:p-0 p-5 mt-10 md:mt-10 lg:mt-5">
                    {profiles.map((profile) => (
                        <div key={profile.id} className="h-70 w-80 md:w-53 md:h-60 lg:w-60 lg:h-60 bg-white rounded-xl shadow-sm shadow-gray-400">
                        <div>
                            <Image src={profile.coverImage} alt="Cover" width={50} height={50} className="w-full" />
                        </div>
                        <div className="w-full flex justify-center -mt-10">
                            <Image src={profile.profileImage} alt="Profile" width={50} height={50} className="w-[25%]" />
                        </div>
                        <div className=" -mt-8 md:-mt-6 px-5 py-3 rounded-xl">
                            <div className="w-full flex justify-between mt-1">
                            <div className="w-[30%] text-[9px] lg:text-[10px] font-bold">
                                <p>{profile.name}, {profile.age}</p>
                                <p>{profile.location}</p>
                            </div>
                            <div className="w-[40%] text-[9px] md:text-[8px] flex flex-col items-end font-bold">
                                <p>{profile.matchPercentage} match</p>
                                <p>{profile.verified ? (<span className="flex"> <Image src={"assets/images/verified.svg"} alt="N/A" width={10} height={20}/> Verified Address</span> ) : "Unverified Address"}</p>
                            </div>
                            </div>
                            <p className="w-full text-[8px] mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque ornare eros mi, sed auctor libero finibus nec.
                            Integer pretium orci nec nulla pellentesque pretium.
                            </p>
                            <div className="flex justify-between h-8 mt-3">
                            <div className="w-[30%] h-full">
                                <button className="w-full h-6 rounded-full bg-red-500 text-[9px] text-white">More info</button>
                            </div>
                            <div>
                                <button onClick={() => toggleLike(profile.id)}>
                                <Image
                                    src={likedProfiles.includes(profile.id) ? "/assets/images/Favorite2.svg" : "/assets/images/Favorite.svg"}
                                    alt="Favorite"
                                    width={25}
                                    height={30}
                                />
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div> 
        )
    }
}