"use client";
import Image from "next/image";
import SidebarDemo from "@/components/example/sidebar-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

export default function Telehealth() {
  const [messageHistories, setMessageHistories] = useState({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great to meet you. I am your personal companion on prescription",
          },
        ],
      },
    ],
  });
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messageHistories]);

  const fetchMessages = async (prompt) => {
    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        body: JSON.stringify({
          histories: messageHistories,
          prompt: prompt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const newPrompt = await response.json();
        setMessageHistories((prevHistories) => ({
          history: [
            ...prevHistories.history,
            {
              role: "user",
              parts: [{ text: prompt }],
            },
            {
              role: "model",
              parts: [{ text: newPrompt }],
            },
          ],
        }));
      } else {
        throw new Error("Failed to fetch new prompt");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const generatePrescript = async (prompt, index) => {
    try {
      const response = await fetch("/api/maschain/audit/create-trail", {
        method: "POST",
        body: JSON.stringify({
          name: "Prescript-" + index,
          data: prompt.parts[0].text,
          entity_id: "prescript-" + index,
          content: prompt.parts[0].text,
          wallet_address: localStorage.getItem("wallet_address"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Prescript Trail generated successfully!", {
          action: "View",
          onClick: () => {
            window.open(
              "https://explorer-testnet.maschain.com/" +
                data.result.transactionHash,
              "_blank"
            );
          },
        });
      } else {
        toast.error("Failed to create prescript trail");
        throw new Error("Failed to create audit trail");
      }
    } catch (error) {
      toast.error("Error creating prescript trail " + error);
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      fetchMessages(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <>
      <div className="">
        <SidebarDemo>
          <div className="flex flex-1">
            <div className="p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1">
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-full">
                {messageHistories.history.map(
                  (message, index) =>
                    index >= 1 && (
                      <div
                        key={index}
                        className={`flex ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-3/4 p-3 rounded-lg ${
                            message.role === "user"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                          }`}
                        >
                          {message.parts[0].text}

                          {index >= 2 && message.role === "model" && (
                            <button
                              onClick={generatePrescript(message, index)}
                              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"
                            >
                              Generate Prescript
                            </button>
                          )}
                        </div>
                      </div>
                    )
                )}
                <div ref={messagesEndRef} />
              </div>
              <form
                onSubmit={handleSubmit}
                className="p-4 border-t border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </SidebarDemo>
      </div>
    </>
  );
}
