import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate= useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('https://kukufm-rating-and-review-web-api.onrender.com/api/auth/register', { name, email, password, avatar });
      localStorage.setItem('token', res.data.token);
      navigate("/")
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div style={{"display": "flex", "justifyContent": "center", "alignItems":"center", "height":"80vh"}}>
        <form className='signUp' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
        <label>Avatar URL:</label>
        <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUp;

