import axios from "axios";

interface ResponseProps {
  data: {
    success: boolean;
    subcategory: Subcategory[];
    message: string;
  };
}
export async function getSubcategoriesSSG(url: string) {
  try {
    const { data }: ResponseProps = await axios(url, {
      headers: { "Content-Type": "application/json" },
    });
    if (data.success) {
      return data;
    }
    return {
      success: false,
      subcategory: [],
      message: "Something went wrong !",
    };
  } catch (error) {
    return {
      success: false,
      subcategory: [],
      message: "Something went wrong !",
    };
  }
}
