import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;

    // // Login Page protected
    if (pathname.startsWith("/auth") && token) {
      return NextResponse.redirect(origin + "/");
    }
    // // Check token for dashboard access role
    // if (pathname.startsWith("/dashboard")) {
    //   // Check dashboard access user
    // }
    //
  },
  {
    callbacks: {
      authorized({
        token,
        req: {
          nextUrl: { pathname },
        },
      }) {
        if (pathname.startsWith("/auth")) {
          return true;
        }
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/cart"],
};
