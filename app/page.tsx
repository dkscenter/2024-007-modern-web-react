import React from 'react';
import ProductBox from '@/components/ProductBox';
import { Product } from '@/types/product';

const App: React.FC = () => {

  const products: Product[] = [
    { name: "Whiskers", price: 150, description: "A playful and friendly cat.", imageUrl: "/products/01.jpg" },
    { name: "Mittens", price: 120, description: "Loves to cuddle and nap.", imageUrl: "/products/02.jpg" },
    { name: "Shadow", price: 200, description: "A quiet and mysterious cat.", imageUrl: "/products/03.jpg" },
    { name: "Luna", price: 180, description: "Curious and adventurous.", imageUrl: "/products/04.jpg" },
    { name: "Oliver", price: 160, description: "Friendly and loves attention.", imageUrl: "/products/05.jpg" },
    { name: "Bella", price: 140, description: "Affectionate and sweet.", imageUrl: "/products/06.jpg" },
    { name: "Simba", price: 220, description: "Confident and playful.", imageUrl: "/products/07.jpg" },
    { name: "Chloe", price: 130, description: "Gentle and loving.", imageUrl: "/products/08.jpg" },
    { name: "Milo", price: 170, description: "Energetic and fun-loving.", imageUrl: "/products/09.jpg" },
    { name: "Daisy", price: 190, description: "Calm and affectionate.", imageUrl: "/products/10.jpg" },
  ];

  return (
    <>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '50px',
        marginBottom: '50px'
      }}>
        
          <ProductBox
            products={products}
          />
          <ProductBox
            products={products}
          />
          <ProductBox
            products={products}
          />
          <ProductBox
            products={products}
          />
     
      </div>
    </>
  );
};

export default App;
