import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://trash-api2.onrender.com/login', { username });
      history.push(`/dashboard/${username}`); // Redirect to add points page
    } catch (error) {
      setError('Invalid username');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container bg-white p-5 rounded shadow w-50">
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="btn btn-primary">
          Login
        </button>
        {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
      </div>
    </div>
  );
}

export default Login;
