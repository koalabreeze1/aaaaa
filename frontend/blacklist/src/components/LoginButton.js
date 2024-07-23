// src/components/LoginButton.js
import React from 'react';
import axios from 'axios';

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get('/api/auth/discord');
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Login with Discord
    </button>
  );
};

export default LoginButton;
