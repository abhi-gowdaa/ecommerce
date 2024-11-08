import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <img
          src="./eco.jpg" 
          alt="Welcome Banner"
          style={styles.heroImage}
        />
        <div style={styles.heroText}>
          <h1>Welcome to Your Favorite Shopping Destination!</h1>
          <p>Discover amazing products, incredible deals, and everything you need in one place.</p>
          <button onClick={handleShopNowClick} style={styles.shopNowButton}>Shop Now</button>
        </div>
      </div>
 
       

     
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
  },
  heroSection: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: '50px',
   
  },
  heroImage: {
    width: '100%',
    borderRadius: '10px',
     height:"650px"
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '80%',
  },}
 

export default Home;
