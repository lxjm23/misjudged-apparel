"use client";

import { useState } from "react";
import Image from "next/image";
import { LockClosedIcon } from "@heroicons/react/24/solid"; 

export default function LockedPage() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const unlockStore = () => {
    document.cookie = `store_unlock=${input}; path=/`;
    window.location.href = "/";
  };

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        setEmailStatus("success");
      } else {
        setEmailStatus("error");
      }
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-12 p-4 font-serif bg-white text-black">
      {/* Logo */}
      <Image src="/logo.ico" alt="Locked Store" width={250} height={120} />
      {/* Newsletter section */}
      <section className="flex flex-col items-center max-w-xs w-full">
        <h2 className="text-md font-semibold mb-1">Get notified on merch drops</h2>
        <form onSubmit={subscribe} className="flex flex-col gap-2 w-full">
          <input
            type="email"
            required
            className="border px-2 py-1"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-1 rounded"
          >
            Notify Me
          </button>
        </form>
        {emailStatus === "success" && (
          <p className="text-green-600 text-sm mt-1">You&#39;re subscribed!</p>
        )}
        {emailStatus === "error" && (
          <p className="text-red-600 text-sm mt-1">Something went wrong.</p>
        )}
      </section>

      {/* Admin unlock section */}
      <section className="flex flex-col items-center">
        {!showPasswordForm ? (
          <button
            onClick={() => setShowPasswordForm(true)}
            className="flex items-center gap-1 text-sm text-black hover:text-gray-700"
          >
            <LockClosedIcon  className="h-4"/> ENTER USING PASSWORD
          </button>
        ) : (
          <>
            <h1 className="text-md font-semibold mb-2">Enter password</h1>
            <input
              className="border px-2 py-1 mb-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
            />
            <button
              onClick={unlockStore}
              className="bg-black text-white px-4 py-1 rounded"
            >
              Unlock
            </button>
          </>
        )}
      </section>

      
    </main>
  );
}
