"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import { FileUpload } from "@/components/ui/file-upload";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
import { useState } from "react";
import { toast } from "sonner";

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

  
const [grid, setGrid] = useState([
  {
    medicinename: "Aspirin",
    batchnumber: "BATCH1234",
    supplier: "Supplier A",
    status: "Verified",
    imageUrl: "https://rootofscience.com/blog/wp-content/uploads/2023/03/ubat-aspirin.jpg", 
  },
  {
    medicinename: "Ibuprofen",
    batchnumber: "BATCH5678",
    supplier: "Supplier B",
    status: "Pending Verification",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg", 
  },
  {
    medicinename: "Paracetamol",
    batchnumber: "BATCH9012",
    supplier: "Supplier C",
    status: "Counterfeit Detected",
    imageUrl: "https://guardian.com.my/media/catalog/product/1/2/121115012_axcel_pcm_500mg_tab_10sx10.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
  },
  {
    medicinename: "Amoxicillin",
    batchnumber: "BATCH3456",
    supplier: "Supplier D",
    status: "Verified",
    imageUrl: "https://5.imimg.com/data5/ANDROID/Default/2023/4/302037696/HU/JI/VN/116627000/product-jpeg-500x500.jpg", 
  }
  ]);
  const handleFileUpload = (files) => {
    setFiles(files);
  };

  const mintCertificate = async (name, attribute, desc) => {

    const response = await fetch("/api/maschain/certificate/mint", {
      method: "POST",
      body: JSON.stringify({
        to: localStorage.getItem("walletAddress"),
        file: "https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oMQBYAGAiCLAIIigyuOEtGofLx22CFe21EB8ux~tplv-tej9nj120t-origin.webp",
        attributes: attribute,
        name: name,
        description: desc
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      toast.success("Certificate minted successfully!", {
        action: "View",
        onClick: () => {
          window.open(
            "https://explorer-testnet.maschain.com/" +
              data.result.transactionHash,
            "_blank"
          );
        },
      });
    }
  }

  const predictPrescription = async () => {
    const reader = new FileReader();
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

      reader.readAsDataURL(files[0])

      // reader.onload = () => (res(reader.result));
      setGrid([
        {
          medicinename: data.name,
          batchnumber: data.batch_number,
          supplier: data.supplier,
          status: data.status,
          imageUrl:"https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oMQBYAGAiCLAIIigyuOEtGofLx22CFe21EB8ux~tplv-tej9nj120t-origin.webp", 
        },
        ...grid,
      ]);

      mintCertificate(data.name, data.batch_number, data.supplier + " - "  + data.status);
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
              <FeaturesSectionDemo grid={grid} />
            </div>
          </div>
        </SidebarDemo>
      </div>
    </>
  );
}