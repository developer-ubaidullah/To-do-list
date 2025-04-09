import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import Logo from '../assets/Dark_Logo.webp';
import Video  from '../assets/login-video.mp4';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      navigate('/todo');
    } catch (error) {
      console.error(error);
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-background">
       {/* Background Video */}
       <video autoPlay loop muted>
  <source src={Video} type="video/mp4" />
</video>

    <div className="login-page">
      <div className="login-box">
        <h2 className="Todo-heading">
                  <img src={Logo} alt="Logo" />
                  To-Do List
                </h2>
        <p className="login-subtitle">Login to your account</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <div className="password-input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>Login</button>

        <p className="register-text">
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
