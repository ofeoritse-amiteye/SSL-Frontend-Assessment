import React from "react";
import Header from "@/components/header";
import Maincontent from "@/components/templates/maincontent";

export default function Home() {
  return (
    <div className="bg-white h-screen w-full">
      <div>
        <Header/>
        <Maincontent/>
      </div>
    </div>
  );
}
