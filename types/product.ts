export interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface ProducBoxProps {
  products: Product[]
}

