interface Product {
  id: string;
  title: string;
  regularPrice: number;
  discountPercent: number;
  rating: number;
  totalStock: number;
  brands: null | string;
  images: string[];
}
