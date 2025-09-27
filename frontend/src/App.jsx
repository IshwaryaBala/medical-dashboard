// src/App.jsx
import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Dashboard from './components/PageComponents/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;