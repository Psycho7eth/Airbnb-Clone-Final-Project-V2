
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/profile', {
        headers: { Authorization: `Bearer ${token}` }
      }).then(response => {
        setUser(response.data.user);
        setIsAuthenticated(true);
      }).catch(() => {
        setIsAuthenticated(false);
      });
    }
  }, []);

  const login = async (username, password) => {
    const response = await axios.post('/login', { username, password });
    localStorage.setItem('token', response.data.token);
    setIsAuthenticated(true);
    const userResponse = await axios.get('/profile', {
      headers: { Authorization: `Bearer ${response.data.token}` }
    });
    setUser(userResponse.data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
