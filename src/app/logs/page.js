"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import { useEffect, useState } from "react";

export default function Logs() {
    const trails = [
      {
        id: 1,
        event: "Token Transferred",
        transactionHash: "3b5e7f6a84d7e8a7e8c1f1a7b5e7f6a8",
        dateTime: "2024-08-22 10:35:45",
      },
      {
        id: 2,
        event: "Review Submitted",
        transactionHash: "a6c1f1b5e7f6a84d7e8a7e8c1f1a7b5e",
        dateTime: "2024-08-22 11:00:23",
      },
      {
        id: 3,
        event: "Privacy Settings Edited",
        transactionHash: "7e8a7e8c1f1a7b5e7f6a84d7e8c1f1a7",
        dateTime: "2024-08-22 12:15:10",
      },
      {
        id: 4,
        event: "Prescription Requested",
        transactionHash: "f1a7b5e7f6a84d7e8a7e8c1f1a7b5e6a",
        dateTime: "2024-08-22 13:45:37",
      },
      {
        id: 5,
        event: "Medicine Verified",
        transactionHash: "84d7e8a7e8c1f1a7b5e7f6a84d7e8c1f",
        dateTime: "2024-08-22 15:20:52",
      },
    ];
  
    return (
      <div className="">
        <SidebarDemo>
          <div className="flex flex-1">
            <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1">
              <div className="p-4">
                <h1 className="text-2xl font-bold">Trails</h1>
                {trails.map((trail) => (
                  <div key={trail.id} className="p-2 border border-gray-300 rounded-md">
                    <h2 className="text-lg font-medium">{trail.event}</h2>
                    <p className="text-gray-500">{trail.dateTime}</p>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      <div className="p-2 border border-gray-300 rounded-md">
                        <h3 className="text-lg font-medium">{trail.transactionHash}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SidebarDemo>
      </div>
    );
  }
