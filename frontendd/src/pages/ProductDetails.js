import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product/${id}`); // Adjust URL as needed
        setProduct(response.data);
        console.log("Product Data:", response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    navigate("/checkout");
  };

  return (
    product ? (
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={product.thumbnail} alt={product.title} style={styles.image} />
        </div>
        <div style={styles.infoContainer}>
          <h1>{product.title}</h1>
          <p style={styles.brand}>Brand: {product.brand} <br/>
            <button onClick={handleAddToCart} style={styles.button}>Add to Cart & Checkout</button>
          </p>
          <p style={styles.price}>Price: ${product.price.toFixed(2)}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating} / 5</p>
          <p>Availability: {product.availabilityStatus}</p>
          <p>{product.description}</p>

          <h3>Product Details</h3>
          <p>SKU: {product.sku}</p>
          <p>Weight: {product.weight} kg</p>
          <p>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
          <p>Shipping: {product.shippingInformation}</p>
          <p>Return Policy: {product.returnPolicy}</p>
          <p>Warranty: {product.warrantyInformation}</p>

          <h3>Customer Reviews</h3>
          <div style={styles.reviews}>
            {product.reviews.map((review, index) => (
              <div key={index} style={styles.review}>
                <p><strong>{review.reviewerName}</strong> - {new Date(review.date).toLocaleDateString()}</p>
                <p>Rating: {review.rating} / 5</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
         </div>
      </div>
    ) : (
      <p>Loading product details...</p>
    )
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    backgroundColor:"white",
    gap: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  imageContainer: {
    flex: '1',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  infoContainer: {
    flex: '2',
    textAlign: 'left',
  },
  brand: {
    color: '#555',
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  reviews: {
    marginTop: '10px',
    padding: '10px 0',
    borderTop: '1px solid #ddd',
  },
  review: {
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    marginTop: '20px',
  },
};

export default ProductDetails;
