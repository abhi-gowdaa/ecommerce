import React from 'react';
import { useParams } from 'react-router-dom';

function Payment() {
  const { status } = useParams();
  
  return (
    <div style={styles.container}>
      {status === 'success' ? (
        <div style={styles.success}>
          <h2 style={styles.message}>🎉 Payment Successful!</h2>
          <p style={styles.subMessage}>Thank you for your purchase.</p>
        </div>
      ) : (
        <div style={styles.failure}>
          <h2 style={styles.message}>❌ Payment Failed</h2>
          <p style={styles.subMessage}>Please try again.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
  },
  success: {
    color: '#28a745',  
    padding: '20px',
    borderRadius: '8px',
  },
  failure: {
    color: '#dc3545',  
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  message: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subMessage: {
    fontSize: '16px',
    color: '#555',
  },
};

export default Payment;
