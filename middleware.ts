import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPortalRoute = createRouteMatcher([
  "/portal/dashboard(.*)",
  "/portal/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPortalRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  // ONLY run middleware on portal and portal API routes — leave everything else alone
  matcher: [
    "/portal(.*)",
    "/api/portal(.*)",
  ],
};
