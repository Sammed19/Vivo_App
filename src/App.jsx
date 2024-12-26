import React from 'react';
import Sidebar from './Components/Sidebar';
import TopNavbar from './Components/TopNavbar';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="container-fluid app-layout g-0">
      <div>
      {/* Sidebar */}
      <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <TopNavbar />
        <div className="content">
          <h2>Welcome to the application!</h2>
         
          <p style={{ minHeight: '2000px' }}>Holaa:)</p>
        </div>
      </div>
    </div>
  );
}

export default App;