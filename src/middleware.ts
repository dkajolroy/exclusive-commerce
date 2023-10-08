import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default withAuth(
  // Callback action
  function middleware(req: NextRequestWithAuth) {
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;

    // // Login Page protected
    // if (pathname.startsWith("/auth") && token) {
    //   return NextResponse.redirect(origin + "/");
    // }
    // // Check token for dashboard access role
    // if (pathname.startsWith("/dashboard")) {
    //   // Check dashboard access user
    // }
    //
  },
  {
    callbacks: {
      authorized({ req, token }) {
        // const { pathname } = req.nextUrl;
        // if (pathname.startsWith("/auth")) {
        //   return true;
        // }
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/cart",
    "/account",
    "/wishlist",
    "/dashboard/:path*",
    "/checkout",
    "/auth/:path*",
  ],
};
