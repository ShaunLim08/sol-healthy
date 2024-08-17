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
            </div>
          </div>
        </SidebarDemo>
      </div>
      <div className="rounded-tr-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 p-4">
      </div>
    </>
  );
}
