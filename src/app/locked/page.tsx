"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function LockedPage() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const submit = () => {
    document.cookie = `store_unlock=${input}; path=/`;
    router.push("/"); // retry home
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen font-serif">
      <Image
     
  src="/misjudged3dLogo.gif" // public/logo-lock.png
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

      <button onClick={submit} className="mt-2 bg-black text-white px-4 py-1">
        Unlock
      </button>
    </main>
  );
}
