"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import { FileUpload } from "@/components/ui/file-upload";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";

export default function Prescript() {
  return (
    <>
      <div className="">
        <SidebarDemo>
          <div className="flex flex-1">
            <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1">
              {/* Added padding to the top */}
              <div className="pt-4">
                <FileUpload />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-1000 dark:text-neutral-300 p-6">Past Records</h2>
              <FeaturesSectionDemo />
            </div>
          </div>
        </SidebarDemo>
      </div>
    </>
  );
}