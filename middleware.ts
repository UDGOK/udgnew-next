import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/portal/dashboard(.*)",
  "/portal/sign-up(.*)",
]);

// Only use Clerk when the secret key is available
const hasClerkKey = !!process.env.CLERK_SECRET_KEY;

function fallbackMiddleware(req: NextRequest) {
  // If Clerk isn't configured and user tries to access protected portal routes, redirect to home
  if (req.nextUrl.pathname.startsWith("/portal/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

const clerkHandler = hasClerkKey
  ? clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) {
        await auth.protect();
      }
    })
  : fallbackMiddleware;

export default function middleware(req: NextRequest) {
  return clerkHandler(req, {} as never);
}

export const config = {
  matcher: [
    "/portal(.*)",
    "/api/portal(.*)",
  ],
};
