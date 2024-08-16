"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";

export default function DAO() {
  return (
    <div className="">
      <SidebarDemo>
        <div className="flex flex-1">
          <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1">
            <ExpandableCardDemo />
            <div className="flex justify-center">
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                Submit a Review / Comment / Suggestion
              </button>
            </div>
          </div>
        </div>
      </SidebarDemo>
    </div>
  );
}
