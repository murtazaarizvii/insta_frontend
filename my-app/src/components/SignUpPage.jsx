import React, { useState } from 'react';
import './SignUpPage.css';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    username: ''
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

    if (!formData.email || !formData.password || !formData.fullName || !formData.username) {
      setError('Please fill all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          username: formData.username
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Signup failed');
      } else {
        setSuccess('Signup successful! You can now log in.');
        setFormData({
          email: '',
          password: '',
          fullName: '',
          username: ''
        });
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="insta-logo">Instagram</h1>
        <p className="signup-text">Sign up to see photos and videos from your friends.</p>

        <button className="fb-login-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="fb"
            className="fb-icon"
          />
          Log in with Facebook
        </button>

        <div className="divider">OR</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email address"
            className="input-field"
            value={formData.email}
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
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="input-field"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-field"
            value={formData.username}
            onChange={handleChange}
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <p className="info-text">
            People who use our service may have uploaded your contact information to Instagram.{' '}
            <a href="#">Learn more</a>
          </p>

          <p className="policy-text">
            By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and{' '}
            <a href="#">Cookies Policy</a>.
          </p>

          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>

      <div className="report-link">
        You can also <a href="#">report content that you believe is unlawful</a> in your country without logging in.
      </div>
      <div className="login-box-bottom">
        Have an account? <Link to="/">Log in</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
