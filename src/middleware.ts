import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
  "/live-webinar(.*)",
  "/",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next (all Next.js internal files including static, webpack, hmr, etc.)
     * - static files and assets
     */
    '/((?!_next|api/webhook|static|.*\\..*|_vercel).*)',
    // Explicitly include API routes
    '/api/(.*)',
  ],
};
