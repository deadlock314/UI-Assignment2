import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './NavBar.css';

import NavLogo from '../../Assets/navLogo.png';

library.add(faBars, faXmark, faSearch);

export default function NavBar() {

  const [navStatus, setNavStatus] = useState(false);

  const changeHandler = () => (navStatus) ? setNavStatus(false) : setNavStatus(true);
  let navicon = (navStatus) ? faXmark : faBars;

  return (
    <>
      <nav>

        <input type="checkbox" id="check" value={navStatus} onChange={changeHandler} />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={navicon} />
        </label>
        
      
          <img className="navicon" src={NavLogo} />


        {/* <div>
         <label className="logo"></label>
        </div> */}

        <div className="link-list">
          <span>Dashboard</span>
          <span>Experience Zone</span>
          <span>Learning Zone</span>
        </div>
        <div className="search-div">
          <FontAwesomeIcon icon={faSearch} id="search-icon" />
          <input type="text" id="search-box" placeholder="search here" />
        </div>

        <div className="discoveryzone">
         Discovery Zone
        </div>

        <div className="profile-div">
         <img id="profile-img" src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" />
          <p>Harshita Shukla</p>
        </div>

      </nav>
    </>

  )
}
