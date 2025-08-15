

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './components/Login';
import BinancePage from './components/Binance';

const users = [
  { username: "admin", password: "admin123" },
  { username: "john", password: "doe456" },
];

const AppWrapper = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true); 

  
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false); 
  }, []);

  const login = (username, password) => {
    setLoading(true);

    setTimeout(() => {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        navigate("/binance");
      } else {
        alert("Invalid credentials");
      }
      setLoading(false);
    }, 500);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  if (loading || checkingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated
            ? <Navigate to="/binance" replace />
            : <LoginPage login={login} />
        }
      />
      <Route
        path="/binance"
        element={
          <ProtectedRoute>
            <BinancePage logout={logout} />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
