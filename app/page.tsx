import React from 'react';
import ProductBox from '@/components/ProductBox';
import products from '@/data/products.json'

const App: React.FC = () => {

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
