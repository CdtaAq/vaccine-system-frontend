import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [hospitals, setHospitals] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedVaccine, setSelectedVaccine] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch list of hospitals from the backend
    const fetchHospitals = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/hospitals');
        setHospitals(res.data);
      } catch (err) {
        setError('Failed to fetch hospitals');
      }
    };

    fetchHospitals();
  }, []);

  useEffect(() => {
    if (selectedHospital) {
      // Fetch vaccines based on selected hospital
      const fetchVaccines = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/vaccines?hospitalId=${selectedHospital}`);
          setVaccines(res.data);
        } catch (err) {
          setError('Failed to fetch vaccines');
        }
      };

      fetchVaccines();
    }
  }, [selectedHospital]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedHospital || !selectedVaccine || !scheduleDate) {
      setError('Please fill all fields');
      return;
    }

    try {
      const userId = JSON.parse(localStorage.getItem('user'))._id; // Assume user is logged in and has _id
      await axios.post('http://localhost:5000/api/appointments', {
        userId,
        hospitalId: selectedHospital,
        vaccineId: selectedVaccine,
        scheduleDate,
      });
      alert('Appointment booked successfully!');
    } catch (err) {
      setError('Failed to book appointment');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Hospital:</label>
          <select
            value={selectedHospital}
            onChange={(e) => setSelectedHospital(e.target.value)}
            required
          >
            <option value="">Select a Hospital</option>
            {hospitals.map((hospital) => (
              <option key={hospital._id} value={hospital._id}>
                {hospital.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Vaccine:</label>
          <select
            value={selectedVaccine}
            onChange={(e) => setSelectedVaccine(e.target.value)}
            required
          >
            <option value="">Select a Vaccine</option>
            {vaccines.map((vaccine) => (
              <option key={vaccine._id} value={vaccine._id}>
                {vaccine.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Schedule Date:</label>
          <input
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
