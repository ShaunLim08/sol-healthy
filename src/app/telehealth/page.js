"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";

export default function Telehealth() {
  return (
    <>
      <div className="">
        <SidebarDemo>
        <div className="flex flex-1">
        <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1">
            <h>AI Chatbot + Prescription Management</h>
        </div>
                </div>
        </SidebarDemo>
      </div>
    </>
  );
}
