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

        <div>
         <img className="logo" src="https://static.wixstatic.com/media/c67cf8_01c5e5c77a5b4508ad013b89115b2f35~mv2.png/v1/fill/w_188,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Edvolve_Logo_Full_New.png" />
        </div>

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
         <img id="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_kv5K0jzuBD-u0Zoun7t7jxWJv4Wdmc6H2YuLnXC7L3WmVS7QToqrf8ivA8SMYmHBxg&usqp=CAU" />
          <p>Harshita Shukla</p>
        </div>

      </nav>
    </>

  )
}
