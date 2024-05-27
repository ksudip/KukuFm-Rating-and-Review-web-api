import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import "./App.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('https://kukufm-rating-and-review-web-api.onrender.com/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      onLogin(res.data.token);
      navigate("/")
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div style={{"display": "flex", "justifyContent": "center", "alignItems":"center", "height":"80vh"}}>
        <form className='login' onSubmit={handleSubmit} >
      <h2>Login</h2>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
