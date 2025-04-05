import { getMenu } from "@/lib/shopify"
import { Menu } from "@/lib/shopify/types"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6"

export default async function Footer() {
  const menu = await getMenu("footer")

  console.log("footer menu:", JSON.stringify(menu, null, 2))
  return(
    <footer className="flex flex-col items-center justify-center gap-6 bg-white text-black w-full py-6 px-4 md:px-6 border-t">
  <nav className="flex flex-col items-center text-center gap-4 w-full max-w-5xl">
    {menu.length > 0 && (
      <ul className="flex gap-6 items-center">
        {menu.map((item: Menu) => (
          <li key={item.title}>
            <Link
              href={item.path}
              prefetch
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium leading-normal tracking-[1.5px] text-gray-700 underline-offset-4 hover:text-black hover:underline flex items-center gap-2"
            >
              {item.title.toLowerCase() === "instagram" && <FaInstagram className="w-8 h-8 text-black" />}
              {item.title.toLowerCase() === "facebook" && <FaFacebook className="w-8 h-8 text-black" />}
              {item.title.toLowerCase() === "tiktok" && <FaTiktok className="w-8 h-8 text-black" />}
            </Link>
          </li>
        ))}
      </ul>
    )}

    <div className="max-w-5xl text-center  font-serif tracking-[1px]">
      <h1 className="text-lg font-bold">MISJUDGED APPAREL</h1>
      <h2 className="text-sm font-medium leading-snug ">
        MISJUDGED APPAREL AIMS TO CONNECT PEOPLE EVERYWHERE THROUGH ITS CLOTHING.
      </h2>
    </div>
  </nav>
</footer>

  )
}