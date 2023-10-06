import axios from "axios";

interface Response {
  data: {
    success: boolean;
    cartList: CartList[];
    message: string;
  };
}

export async function getCartListSSG(url: string) {
  try {
    const { data }: Response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.success) {
      return data;
    } else {
      return {
        success: false,
        cartList: [],
        message: "Something went wrong !",
      };
    }
  } catch (error) {
    return {
      success: false,
      cartList: [],
      message: "Something went wrong !",
    };
  }
}
