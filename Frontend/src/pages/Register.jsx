import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { post } from '../../services/ApiEndPoint.js';

export default function Register() {
  const [value, setValue] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", value); // debug log
      const request = await post('/auth/register', value);
      const response = request.data;
      console.log("Response:", response);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content align-items-center">
      <div className="form-container border shadow p-5 rounded-4 bg-white w-50">
        <h2 className="text-center mb-4 fw-bold">Register</h2>

        {/* ✅ Correct form opening/closing */}
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="userName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={value.userName}
              name="userName"
              onChange={handleChange}
              placeholder="Name"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={value.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={value.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">
            Register
          </button>
        </form>

        <div className="text-center">
          <p>
            Already have an account? <Link to={'/login'}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
