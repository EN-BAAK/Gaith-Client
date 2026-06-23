import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { accessGuid } from "./constants/global";
// import { validateAuthenticationWithCaching } from "./api-client";
// import { AccessItem } from "./types/variables";

// function findMatchedRoute(
//   pathname: string,
//   items: AccessItem[],
//   parent?: AccessItem
// ): { authorized: boolean; path: string } | undefined {
//   for (const item of items) {
//     const fullPath = parent
//       ? `${parent.path}${item.path}`
//       : item.path;

//     if (pathname === fullPath || pathname.startsWith(fullPath + "/")) {
//       if (item.children) {
//         const childMatch = findMatchedRoute(
//           pathname,
//           item.children,
//           { ...item, path: fullPath }
//         );

//         if (childMatch) return childMatch;
//       }

//       return {
//         authorized: item.authorized,
//         path: fullPath,
//       };
//     }
//   }
// }

export async function middleware(_: NextRequest) {
  // const cookieName = process.env.COOKIE_NAME!;
  // const token = req.cookies.get(cookieName)?.value;
  // const { pathname } = req.nextUrl;

  // const matched = findMatchedRoute(pathname, accessGuid);

  // if (!matched) return NextResponse.next();
  // if (!matched.authorized) {
  //   if (token) {
  //     return NextResponse.redirect(new URL("/dashboard", req.url));
  //   }

  //   return NextResponse.next();
  // } else {
  //   if (!token)
  //     return NextResponse.redirect(new URL("/login", req.url));
  // }

  // const reqAuth = await validateAuthenticationWithCaching(token);
  // if (!reqAuth) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login"
  ],
};