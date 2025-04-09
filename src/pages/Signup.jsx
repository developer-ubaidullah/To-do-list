import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'; // Reuse same styles
import Logo from '../assets/Dark_Logo.webp';
import Video  from '../assets/login-video.mp4';

const Signup = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      navigate('/todo');
    } catch (error) {
      console.error(error);
      alert('Error during signup!');
    }
  };

  return (
    <div className="login-background">
      {/* Optional background video */}
     <video autoPlay loop muted>
       <source src={Video} type="video/mp4" />
     </video>

      <div className="login-page">
        <div className="login-box">
          <h2 className="Todo-heading">
            <img src={Logo} alt="Logo" />
            To-Do List
          </h2>
          <p className="login-subtitle">Create a new account</p>

          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            className="login-input"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" onClick={handleSignup}>Signup</button>

          <p className="register-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
