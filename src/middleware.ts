import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // Call
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/auth")) return true;
        return !!token;
      },
    },
  }
);
export const config = {
  matcher: ["/cart", "/dashboard/:path*", "/auth/:path*"],
};
