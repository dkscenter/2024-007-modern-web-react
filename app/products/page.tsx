"use client"
import React from 'react';
import products from '@/data/products.json'
import ProductDetail from '@/components/ProductDetail';
import { useState } from 'react';
import SearchBox from '@/components/SearchBox';

const Product: React.FC = () => {
  const [searchText, setSearchText] = useState("")
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase()) 
    || product.description.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Cats</h1>
      <SearchBox value={searchText} onChange={setSearchText}/>
      <div className="mb-4">
        <p className="text-lg font-medium">Result for: {searchText}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductDetail key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
