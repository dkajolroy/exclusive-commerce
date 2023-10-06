import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = req.nextUrl.searchParams.get("user");
  try {
    if (user) {
      const response = await prisma.wishlist.findMany({
        where: {
          user_id: user,
        },
      });
      return NextResponse.json({
        success: true,
        products: response,
        message: "Success fetch !",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong !",
    });
  }
}
