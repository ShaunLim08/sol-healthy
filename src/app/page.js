"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import CoverDemo from "@/components/example/cover-demo";
import BentoGridDemo from "@/components/example/bento-grid-demo";
import BentoGridSecondDemo from "@/components/example/bento-grid-demo-2";
import ImagesSliderDemo from "@/components/example/images-slider-demo";

const Dashboard = () => {
  return (
    <div className="flex flex-1">

      {/* <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={"second-array" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          ))}
        </div> 
       </div> */}
       
        <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1" >


{/* Logo */}
<div className="text-center my-4 z-0">
<div className="relative w-64 h-64 perspective-1000 text-center m-auto">
  <div className="absolute w-full h-full transition-transform duration-3600 preserve-3d motion-safe:animate-[flip_15s_infinite]">
    <div className="absolute w-full h-full backface-hidden rounded-lg flex items-center justify-center rotate-y-180 text-center">
      <span className="text-4xl font-bold text-white">
        <img
          src="/healthify-contrast.png"
          alt="Healthify Logo"
          className=" rounded-full border-8 border-slate-300 items-center shadow-xl "
        />
      </span>
    </div>
  </div>
</div>
</div>

          {/* <ImagesSliderDemo /> */}
          <CoverDemo className="z-0" />
          <BentoGridSecondDemo />
        </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="">
        <SidebarDemo>
          <Dashboard />
        </SidebarDemo>
      </div>
    </>
  );
}
