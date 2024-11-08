import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/checkout', { paymentInfo });
      const paymentStatus = response.data.success ? 'success' : 'failure';
      navigate(`/payment/${paymentStatus}`);
    } catch (error) {
      console.error("Payment error:", error);
      navigate('/payment/failure');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Checkout</h2>
      <div style={styles.form}>
        <label style={styles.label}>Card Number:</label>
        <input 
          type="text" 
          placeholder="1234 5678 9012 3456" 
          style={styles.input} 
          onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })} 
        />
        
        <label style={styles.label}>Expiry Date:</label>
        <input 
          type="text" 
          placeholder="MM/YY" 
          style={styles.input} 
          onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })} 
        />
        
        <label style={styles.label}>CVV:</label>
        <input 
          type="text" 
          placeholder="123" 
          style={styles.input} 
          onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })} 
        />
        
        <button style={styles.button} onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop:'50px'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '14px',
    textAlign: 'left',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    marginTop: '20px',
  },
};

export default Checkout;
