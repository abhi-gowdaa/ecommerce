
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

   useEffect(() => {
    const loadProducts = async () => {
       const response = await fetch('http://localhost:5000/product'); 
      const data = await response.json();
      setProducts(data.products);
    };
    loadProducts();
  }, []);

  return (
    <div style={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

const styles = {
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
};

export default ProductList;
