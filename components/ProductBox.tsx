import React from 'react';

interface ProductProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductBox: React.FC<ProductProps> = ({ name, price, description, imageUrl }) => {
  return (
    <div style={styles.container}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.price}>${price.toFixed(2)}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
    width: '200px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    margin: '10px'
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover' as 'cover',
    marginBottom: '16px'
  },
  name: {
    fontSize: '1.5em',
    margin: '8px 0'
  },
  price: {
    fontSize: '1.2em',
    color: '#888'
  },
  description: {
    fontSize: '1em',
    color: '#555'
  }
};

export default ProductBox;
