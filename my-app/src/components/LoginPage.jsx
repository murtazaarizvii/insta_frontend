import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.identifier || !formData.password) {
      setError('Please fill all fields');
      return;
    }

    try {
      const response = await fetch('https://instabackend-production-2f4e.up.railway.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.identifier,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed');
      } else {
        setSuccess('Login successful!');
        // Optionally save token, redirect, etc.
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="insta-logo">Instagram</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="identifier"
            placeholder=" email address"
            className="input-field"
            value={formData.identifier}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <button className="login-button" type="submit">
            Log in
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="fb-login">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="fb"
            className="fb-icon"
          />
          Log in with Facebook
        </button>

        <a href="#" className="forgot-password">
          Forgotten your password?
        </a>
      </div>

      <div className="signup-box">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
