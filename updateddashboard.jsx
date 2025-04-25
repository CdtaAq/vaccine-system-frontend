import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome to Vaccination Dashboard</h2>
      <div>
        <button onClick={() => navigate('/appointment')}>Book Appointment</button>
        <button onClick={() => navigate('/reports')}>Reports</button>
        <button onClick={() => navigate('/watchlist')}>Watchlist</button>
        <button onClick={() => navigate('/qrpayment')}>Make Payment</button>  {/* Added Payment button */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
