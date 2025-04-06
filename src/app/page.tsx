import { redirect } from "next/navigation";

export const metadata = {
  description:
    "High-performance e-commerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function Home() {
  redirect("/search"); 
}
