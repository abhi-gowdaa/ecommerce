 
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
 const navigate=useNavigate()
    const handleClick=()=>{
     navigate(`/product/${product.id}`)
    }
  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <div style={styles.details}>
        <h3>{product.title}</h3>
        <p>Brand: {product.brand}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Rating: {product.rating} / 5</p>
        <p>Stock: {product.availabilityStatus}</p>
        <button onClick={handleClick} style={styles.button}>view details</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor:"white",
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  details: {
    padding: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    marginTop: '10px',
  },
};

export default ProductCard;
