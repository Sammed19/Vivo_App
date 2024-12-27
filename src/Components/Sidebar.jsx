import React, { useState } from 'react';
import search from '../assets/hamburger/search.svg';
import VivoHealthlogo from '../assets/hamburger/VivoHealthlogo.png';
import Me from '../assets/hamburger/Me.svg';
import Home from '../assets/hamburger/Home.png';
import Rx from '../assets/hamburger/Rx.png';
import Pharmacy from '../assets/hamburger/Pharmacy.svg';
import Mybenefits from '../assets/hamburger/Mybenefits.png';
import Pharmacylocation from '../assets/hamburger/Pharmacylocation.png';
import Aboutapp from '../assets/hamburger/Aboutapp.png';
import Accountsettings from '../assets/hamburger/Accountsettings.png';
import Communicationpreferances from '../assets/hamburger/Communicationpreferences.png';
import Helpsupport from '../assets/hamburger/Helpsupport.svg';
import downarrow from '../assets/hamburger/downarrow.svg';

function Sidebar() {
  const [dropdowns, setDropdowns] = useState({}); // Tracks state of all dropdowns

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown], // Toggle individual dropdown
    }));
  };

  return (
    <div className="sidebar bg-white border h-100">
      {/* Top Sticky Section */}
      <div className="sidebar-header border-bottom sticky-top">
        <div className="logo px-4 pt-4 pb-3">
          <img
            src={VivoHealthlogo}
            alt="Vivo Health Logo"
            style={{ width: '211px', height: '64px' }}
          />
        </div>
        {/* Primary Links */}
        <ul className="list-unstyled ">
          
          <SidebarItem icon={Home} label="Home" link="#" active />
         
          <SidebarItem icon={Rx} label="Rx" link="#" />
          <SidebarItem icon={search} label="Find Care" link="#" />
          <SidebarItem icon={Me} label="Me" link="#" />
          <SidebarItem icon={Pharmacy} label="Pharmacy" link="#" />
        </ul>
      </div>

      {/* <hr /> */}

      {/* Scrollable Section */}
      <div className="sidebar-content scrollable-section overflow-auto">
        {/* Secondary Links */}
        <ul className="list-unstyled ">
          <SidebarItem icon={Mybenefits} label="My Benefits" link="#" />
          <SidebarItem icon={Pharmacylocation} label="Pharmacy Location" link="#" />
          <SidebarItem icon={Communicationpreferances} label="Communication Preferences" link="#" />
          
          {/* Dropdown Links */}
          <Dropdown
            icon={Accountsettings}
            label="Account Settings"
            isOpen={dropdowns['account-settings']}
            toggle={() => toggleDropdown('account-settings')}
            items={[
              { label: 'Patient Account', link: '#' },
              { label: 'Language change', link: '#' },
            ]}
          />
          <Dropdown
            icon={Helpsupport}
            label="Help and Support"
            isOpen={dropdowns['help-support']}
            toggle={() => toggleDropdown('help-support')}
            items={[
              { label: 'Contact Us', link: '#' },
              { label: 'More help', link: '#' },
            ]}
          />
          <SidebarItem icon={Aboutapp} label="About App" link="#" />
        </ul>
      </div>
    </div>
  );
}

// Sidebar Item Component
const SidebarItem = ({ icon, label, link, active }) => (
  <li className={`py-2 px-4 ${active ? 'bg-light-purple' : ''}`}>
    <div className="d-flex align-items-center gap-2">
      <img src={icon} width="24px" height="24px" alt={label} />
      <a href={link} className="text-dark text-decoration-none">{label}</a>
    </div>
  </li>
);

// Dropdown Component
const Dropdown = ({ icon, label, isOpen, toggle, items }) => (
  <li className={`py-2 px-4 ${isOpen ? 'bg-light' : ''} `}

   >
    <div
      className="d-flex align-items-center gap-2"
      onClick={toggle}
      style={{ cursor: 'pointer' }}
    >
      <img src={icon} width="24px" height="24px" alt={label} />
      <span className="text-dark text-decoration-none">{label}</span>
      <img
        src={downarrow}
        width="24px"
        height="24px"
        alt="Toggle Dropdown"
        className={`ms-auto ${isOpen ? 'rotate-180' : ''}`}
      />
    </div>
    {isOpen && (
      <ul className="list-unstyled ps-4 mt-2 ">
        {items.map((item, index) => (
          <DropdownItem key={index} label={item.label} link={item.link} />
        ))}
      </ul>
    )}
  </li>
);

// Dropdown Item Component
const DropdownItem = ({ label, link }) => (
  <li className="py-1 ms-2">
    <a href={link} className="text-dark text-decoration-none">{label}</a>
  </li>
);

export default Sidebar;
