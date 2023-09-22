interface Product {
  id: string;
  title: string;
  regularPrice: number;
  discountPercent: number;
  rating: number;
  totalStock: number;
  brands: null | string;
  images: string[];
  totalReview: number;
}

interface Subcategory {
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}
interface Arrival {
  id: string;
  name: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
