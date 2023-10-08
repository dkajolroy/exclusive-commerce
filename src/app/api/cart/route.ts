import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await prisma.cartList.findMany({
      include: { product: true },
    });
    return NextResponse.json({
      success: true,
      cartList: response,
      message: "Success fetch !",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        products: [],
        message: "Something went wrong !",
      },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  // Input data and validation from body
  const { color, size, user_id, product_id }: InputCartItems = await req.json();
  if (!user_id || !product_id) {
    return NextResponse.json(
      {
        success: false,
        products: [],
        message: "Invalid cart items info !",
      },
      { status: 400 }
    );
  }
  try {
    // find product already exists in cart
    const findExist = await prisma.cartList.findFirst({
      where: { product_id },
    });
    if (findExist) {
      return NextResponse.json(
        {
          success: false,
          products: [],
          message: "Invalid cart items info !",
        },
        { status: 400 }
      );
    }

    // add new items to cart
    await prisma.cartList.create({
      data: { color, size, user_id, product_id },
    });
    return NextResponse.json({
      success: true,
      message: "Product added to cart !",
    });
  } catch (error: any) {
    // Other error
    return NextResponse.json(
      {
        success: false,
        products: [],
        message: "Something went wrong !",
      },
      { status: 400 }
    );
  }
}
