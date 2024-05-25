"use client"
import React from 'react';
import products from '@/data/products.json'
import ProductDetail from '@/components/ProductDetail';
import { useState } from 'react';

const Product: React.FC = () => {
  const [searchText, setSearchText] = useState("")
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Cats</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search cats..."
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium">Result for: {searchText}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductDetail key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
