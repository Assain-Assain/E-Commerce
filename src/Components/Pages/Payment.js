import React, { useContext, useState } from 'react';
import './Payment.css';
import { ShopContext } from '../Context/ShopContext';

const Payment = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('razorpay');
  const [showCODAnimation, setShowCODAnimation] = useState(false);

  const handlePayment = () => {
    if (totalAmount <= 0) {
      alert('🛒 Your cart is empty. Please add items before proceeding.');
      return;
    }

    const options = {
      key: 'rzp_live_RKZ7Z8zciWENG7', // Replace with your Razorpay Key ID
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'Shopper Store',
      description: 'Order Payment',
      image: 'https://yourstore.com/logo.png',
      handler: function (response) {
        setPaymentSuccess(true);
        console.log('Payment ID:', response.razorpay_payment_id);
      },
      prefill: {
        name: 'Assain',
        email: 'assain@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#000',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleCOD = () => {
    if (totalAmount <= 0) {
      alert('🛒 Your cart is empty. Please add items before placing an order.');
      return;
    }

    setShowCODAnimation(true);
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1500);
    console.log('Order placed with Cash on Delivery');
  };

  return (
    <div className='payment'>
      {paymentSuccess ? (
        <div className='success-message'>
          <h2>✅ Order Confirmed!</h2>
          <p>
            {selectedMethod === 'cod'
              ? 'Your order has been placed with Cash on Delivery.'
              : 'Thank you for your purchase. Your payment was successful.'}
          </p>
        </div>
      ) : (
        <>
          <h1>Payment Page</h1>
          <p>Total Amount: ₹{totalAmount}</p>

          <div className='payment-options'>
            <label>
              <input
                type='radio'
                value='razorpay'
                checked={selectedMethod === 'razorpay'}
                onChange={() => setSelectedMethod('razorpay')}
              />
              Pay Online (Razorpay)
            </label>
            <label>
              <input
                type='radio'
                value='cod'
                checked={selectedMethod === 'cod'}
                onChange={() => setSelectedMethod('cod')}
              />
              Cash on Delivery
            </label>
          </div>

          {selectedMethod === 'razorpay' ? (
            <button onClick={handlePayment}>Pay Now</button>
          ) : (
            <button onClick={handleCOD}>Place Order</button>
          )}

          {showCODAnimation && !paymentSuccess && (
            <div className='cod-animation'>
              <h2>🛵 Cash on Delivery Selected</h2>
              <p>Your order is being placed...</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Payment;



// rzp_live_RKZ7Z8zciWENG7