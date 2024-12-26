import React from 'react';

function TopNavbar() {
  return (
    <div className="TopNavbar bg-white d-flex border-bottom justify-content-between align-items-center py-3 px-4 ">
      <h4 className='mb-0'>Home</h4>
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell" style={{fontSize: '1.5rem',cursor: 'pointer'}}></i>
        <div className="user-icon bg-success text-white rounded-circle text-center"  style={{width:'30px',height:"30px"}}>J</div>
          <span className='fw-bold'>John Doe</span>
        </div>
      </div>
    
  );
}

export default TopNavbar