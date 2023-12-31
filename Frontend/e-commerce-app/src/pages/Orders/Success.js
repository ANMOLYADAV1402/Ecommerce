import React from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/success.css';
import { Link } from 'react-router-dom';

export default function Success() {
  const successIcon = "images/success.png";

  return (
    <motion.div className="payment-success-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="payment-success-content" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="payment-success-heading">Payment Successful!</h1>
        <p className="payment-success-message">
          Thank you for your payment. Your transaction was successful.
        </p>
        <p className="payment-success-message">We appreciate your business.</p>
        <motion.img
          className="payment-success-image"
          src={successIcon}
          alt="Success"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        />
        <div className="button-container">
          <Link to="/home" className="continue-shopping-button">
            Continue Shopping
          </Link>
          <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="go-to-inbox-button">
            Go to Inbox
          </a>
        </div>
        <p className="order-summary-message">Please check your inbox for the order summary.</p>
      </motion.div>
    </motion.div>
  );
}
