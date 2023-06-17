import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://trash-api2.onrender.com/user/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [username]);

  const handleAddPoints = async () => {
    try {
      const response = await axios.post('http://localhost:3000/add-points', { username, points: 1 });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    history.push('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container bg-white p-5 rounded shadow w-50">
        <h1>Welcome, {username}!</h1>
        {user && (
          <div>
            <p>Your current points: 50</p>
            <div className="d-flex justify-content-center">
              <button onClick={handleAddPoints} className="btn btn-primary me-2">
                Redeem Point
              </button>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
