import React from 'react';

interface ProductDetailParams {
  id: number 
}

interface ProductDetailProps {
  params: ProductDetailParams
}

const ProductDetail: React.FC<ProductDetailProps> = ({params}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Cats detail</h1>
      Product ID: {params.id}
    </div>
  );
};

export default ProductDetail;
