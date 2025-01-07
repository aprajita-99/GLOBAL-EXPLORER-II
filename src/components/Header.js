import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Header = () => {
  const [texxt,settexxt]=useContext(ThemeContext);

  function darkmodefnc() {
    document.body.classList.toggle('darkmode');
    if (texxt === 'Dark mode') {
      settexxt('Light mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      settexxt('Dark mode');
      localStorage.setItem('darkMode', 'false');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('darkmode');
    }
  }, []);

  return (
    <header >
      <div className="header-text" onClick={() => (window.location.href = "/")}>
        <p>Where in the world?</p>
      </div>
      <div className="darkmode-text" onClick={darkmodefnc}>
        <i className={`${texxt === 'Dark mode' ? 'fa-regular fa-moon' : 'fa-regular fa-sun'}`}></i>
        <p>&nbsp;&nbsp;{texxt}</p>
      </div>
    </header>
  );
}

export default Header;
