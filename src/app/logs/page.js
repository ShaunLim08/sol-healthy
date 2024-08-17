"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import { useEffect, useState } from "react";

export default function Logs() {
  const [trails, setTrails] = useState([]);

  async function getTrails() {
    const response = await fetch("/api/maschain/audit/list-trail", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setTrails([...data.result]);
        }
  }


  useEffect(() => {

   getTrails();
  });
return (
    <div className="">
        <SidebarDemo>
            <div className="flex flex-1">
                <div className="rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1">
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Trails</h1>
                        {trails && trails.map((transaction) => (
                            <div key={transaction.id} className="p-2 border border-gray-300 rounded-md">
                                <h2 className="text-lg font-medium">{JSON.parse(transaction.metadata).name}</h2>
                                <p className="text-gray-500">{JSON.parse(transaction.metadata).content}</p>
                                <div className="grid grid-cols-1 gap-4 mt-4">
                            <div key={transaction.id} className="p-2 border border-gray-300 rounded-md">
                                            <h3 className="text-lg font-medium">{transaction.transactionHash}</h3>
                                            <p className="text-gray-500">{JSON.parse(transaction.metadata).data}</p>
                                            <p className="text-gray-500">{transaction.organisation_id}</p>
                                            <p className="text-gray-500">{transaction.created_at}</p>
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
