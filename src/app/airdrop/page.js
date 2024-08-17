"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import { FileUpload } from "@/components/ui/file-upload";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
import { useState } from "react";

export default function Airdrop() {
  const giveMoney = async () => {

    const response = await fetch("/api/maschain/token/mint", {
      method: "POST",
      body: JSON.stringify({
        amount: 1000,
        walletAddress: localStorage.getItem("walletAddress"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  };
  
  return (
    <>

                <button onClick={giveMoney} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                  Give me Money
                  <div className="flex justify-center"></div>
                </button>
    </>
  );
}