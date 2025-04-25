import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRPayment = () => {
  const [amount, setAmount] = useState('');

  // Mock payment URL (replace with actual payment gateway URL in a real implementation)
  const paymentURL = `https://mockpaymentgateway.com/pay?amount=${amount}`;

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePayment = () => {
    alert('Payment initiated!');
    // In a real app, you would redirect the user to the payment URL.
    // For example: window.location.href = paymentURL;
  };

  return (
    <div>
      <h2>QR Payment</h2>
      
      <div>
        <label>Enter Payment Amount: </label>
        <input 
          type="number" 
          value={amount} 
          onChange={handleChange} 
          placeholder="Amount in USD" 
        />
      </div>

      {amount && (
        <div>
          <h3>Scan the QR Code to Pay:</h3>
          <QRCode value={paymentURL} />
        </div>
      )}

      <div>
        <button onClick={handlePayment}>Initiate Payment</button>
      </div>
    </div>
  );
};

export default QRPayment;
