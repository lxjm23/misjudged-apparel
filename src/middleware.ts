// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isLocked = process.env.STORE_LOCK === "true";
  const passwordCookie = req.cookies.get("store_unlock");

  if (isLocked && passwordCookie?.value !== process.env.STORE_PASSWORD) {
    return NextResponse.redirect(new URL("/locked", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|static|locked|api|favicon.ico|.*\\.ico|.*\\.gif|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).*)",
  ], // protect all except /locked & static
};
