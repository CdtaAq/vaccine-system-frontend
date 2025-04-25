import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    contact: '',
    address: '',
    profession: '',
    disease: '',
    role: 'patient'
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('Registration successful. Awaiting approval.');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required /><br />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} /><br />
        <input name="gender" placeholder="Gender" onChange={handleChange} /><br />
        <input name="contact" placeholder="Contact" onChange={handleChange} /><br />
        <input name="address" placeholder="Address" onChange={handleChange} /><br />
        <input name="profession" placeholder="Profession" onChange={handleChange} /><br />
        <input name="disease" placeholder="Any Disease" onChange={handleChange} /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
