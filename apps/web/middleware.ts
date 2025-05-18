import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const { pathname } = request.nextUrl;

  // Define authentication-only paths
  const authOnlyPaths = ["/editor", "/profile", "/dashboard"]; // Add all paths that require authentication

  // Define auth-redirectable paths (paths that authenticated users should be redirected from)
  const authRedirectPaths = ["/login", "/register", "/forgot-password"];

  // Check if current path requires authentication
  const requiresAuth = authOnlyPaths.some((path) => pathname.startsWith(path));

  // Check if current path should redirect authenticated users
  const shouldRedirectAuth = authRedirectPaths.some((path) =>
    pathname.startsWith(path)
  );

  // If path requires auth and user is not authenticated, redirect to login
  if (requiresAuth && !authToken) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(pathname));
    return NextResponse.redirect(url);
  }

  // If user is authenticated and trying to access login/register pages, redirect to home
  if (shouldRedirectAuth && authToken) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // For all other cases, proceed normally
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  // Matcher ignoring _next/static, _next/image, api, favicon.ico, etc
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
