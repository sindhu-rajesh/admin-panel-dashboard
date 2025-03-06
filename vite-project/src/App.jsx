
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Products from './components/Products';
import Users from './components/Users';
import Profile from './components/Profile';
import Reports from './components/Reports';
import {Qrcode} from './components/Qrcode'; // Corrected import

function App() {
  return (
    <>
      <Router>
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/qrcode" element={<Qrcode />} /> {/* Corrected usage */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;