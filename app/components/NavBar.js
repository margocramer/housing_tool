import React from 'react';

const NavBar = (props) => {

  return(
    <div className="nav-bar">
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Housing Tool</li>
            <li>
              <a href="#">About</a>
              <ul className="menu vertical">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
              </ul>
            </li>
            <li><a href="#">Rent Calculator</a></li>
            <li><a href="#">Listings</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
