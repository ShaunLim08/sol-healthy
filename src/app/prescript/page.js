"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import { FileUpload } from "@/components/ui/file-upload";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
import { useState } from "react";

const prepareFiles = (files) => {
  return Promise.all(files.map(file => 
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve({
        content: e.target.result.split(',')[1], // Get base64 content
        type: file.type,
        name: file.name
      });
      reader.onerror = reject;
      reader.readAsDataURL(file);
    })
  ));
};

export default function Prescript() {
  
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
  };

  const predictPrescription = async () => {
    const filesToSend = await prepareFiles(files);

    const response = await fetch("/api/gemini/prescript", {
      method: "POST",
      body: JSON.stringify({
        file: filesToSend
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
      <div className="">
        <SidebarDemo>
          <div className="flex flex-1">
            <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1">
              {/* Added padding to the top */}
              <div className="pt-4">
                <FileUpload onChange={handleFileUpload} />
              </div>
              <div className="flex justify-center"> {/* Added flex justify-center */}
                <button onClick={predictPrescription} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                  Check Prescription
                  <div className="flex justify-center"></div>
                </button>
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