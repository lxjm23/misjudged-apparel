import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import Link from "next/link";
import MobileMenu from "./mobile-menu";

// import LogoSquare from "@/components/logo-square";
// import CartModal from "@/components/cart/modal";
import Search from "./search";
import Logo from "@/components/icons/logo";
import CartModal from "@/components/cart/modal";

export async function Navbar() {
  
  const menu = await getMenu("misjudged-navbar-menu");
  console.log("menu:", menu);
  return (
    <nav className="bg-[#A9A7A7] sticky top-0 z-[9] backdrop-blur-sm p-4 lg:px-6">
    {/* Mobile + Tablet Layout (default) */}
    <div className="flex items-center justify-between w-full lg:hidden">
      {/* Left: Hamburger */}
      <div className="flex-none">
        <MobileMenu menu={menu} />
      </div>

      {/* Center: Logo */}
      <div className="flex justify-center flex-1">
        <Link href="/" prefetch className="flex items-center justify-center">
          <Logo />
        </Link>
      </div>

      {/* Right: Cart */}
      <div className="flex-none">
        <CartModal />
      
      </div>
    </div>

    {/* Desktop Layout (≥1024px) */}
    <div className="hidden lg:flex items-center justify-between w-full">
  {/* Left: Logo + Nav */}
  <div className="flex items-center gap-6 max-w-[60%] flex-shrink">
    <Link href="/" prefetch className="flex items-center">
      <div className="relative w-[120px] h-[60px]">
        <Logo />
      </div>
    </Link>
    {menu.length > 0 && (
      <ul className="flex gap-6 text-sm items-center max-w-full overflow-x-auto">
        {menu.map((item: Menu) => (
          <li key={item.title}>
            <Link
              href={item.path}
              prefetch
              className="whitespace-nowrap text-black underline-offset-4 hover:underline"
            >
              {item.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Center: Search */}
  <div className="flex justify-end w-[280px] flex-shrink-0">
    <Search />
  </div>

  {/* Right: Cart */}
  <div className="flex justify-end w-[100px] flex-shrink-0">
    <CartModal />
  </div>
</div>

  </nav>
  );
}