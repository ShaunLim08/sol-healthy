"use client";
import SidebarDemo from "@/components/example/sidebar-demo";
import React from "react";

export default function Credential() {
  return (
    <>
      <div className="">
        <SidebarDemo>
          <div className="flex flex-1">
            <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 p-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b dark:border-neutral-600 p-4">HOSPITAL</th>
                    <th className="border-b dark:border-neutral-600 p-4">Health and Medical Records</th>
                    <th className="border-b dark:border-neutral-600 p-4">Administrative Data</th>
                    <th className="border-b dark:border-neutral-600 p-4">Claims Data</th>
                  </tr>
                </thead>
                <tbody>
                  {["Sunway Medical Center", "UM Specialist Center", "Colombia Hospital", "Gleneagles Hospital", "Hospital Serdang", "Hospital Kajang"].map((hospital, index) => (
                    <tr key={index}>
                      <td className="border-b dark:border-neutral-600 p-4">{hospital}</td>
                      <td className="border-b dark:border-neutral-600 p-4">
                        <select className="bg-neutral-700 text-white p-2 rounded-md w-full">
                          <option value="allowed">Allowed</option>
                          <option value="not-allowed">Not Allowed</option>
                          <option value="allowed-per-visit">Allowed Per Visit</option>
                        </select>
                      </td>
                      <td className="border-b dark:border-neutral-600 p-4">
                        <select className="bg-neutral-700 text-white p-2 rounded-md w-full">
                          <option value="allowed">Allowed</option>
                          <option value="not-allowed">Not Allowed</option>
                          <option value="allowed-per-visit">Allowed Per Visit</option>
                        </select>
                      </td>
                      <td className="border-b dark:border-neutral-600 p-4">
                        <select className="bg-neutral-700 text-white p-2 rounded-md w-full">
                          <option value="allowed">Allowed</option>
                          <option value="not-allowed">Not Allowed</option>
                          <option value="allowed-per-visit">Allowed Per Visit</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center">
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                Submit
              </button>
            </div>
            </div>
          </div>
        </SidebarDemo>
      </div>
      <div className="rounded-tr-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 p-4">
      </div>
    </>
  );
}
