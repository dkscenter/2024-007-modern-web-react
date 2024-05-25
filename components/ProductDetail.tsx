import React from 'react';
import { Product } from '@/types/product';

interface ProductBoxProps {
  product: Product;
}

const ProductDetail: React.FC<ProductBoxProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="flex items-center justify-center mb-4">
        <img src={product.imageUrl} alt={product.name} className="w-24 h-24 rounded-full object-cover" />
      </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.description}</p>
      <p className="text-gray-900 font-semibold">${product.price}</p>
    </div>
  </div>
  );
};

export default ProductDetail;
