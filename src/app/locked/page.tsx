"use client";

import { useState } from "react";
import Image from "next/image";

export default function LockedPage() {
  
  const [input, setInput] = useState("");

  const submit = () => {
    document.cookie = `store_unlock=${input}; path=/`;
    window.location.href = "/"; // force reload so cookie is read
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen font-serif">
      <Image
        src="/logo.ico"
        alt="Locked Store"
        width={250}
        height={120}
      />
      <h1 className="text-xl font-bold mb-4">This store is locked</h1>
      <input
        className="border px-2 py-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter password"
      />
      <button
        onClick={submit}
        className="mt-2 bg-black text-white px-4 py-1"
      >
        Unlock
      </button>
    </main>
  );
}
