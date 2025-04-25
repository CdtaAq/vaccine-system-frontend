import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AppointmentForm from './components/AppointmentForm';
import Reports from './components/Reports';
import Watchlist from './components/Watchlist';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/appointment" element={<AppointmentForm />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/watchlist" element={<Watchlist />} />
  </Routes>
);

export default App;
