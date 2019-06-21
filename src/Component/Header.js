import React, { Component } from 'react';
//import './Header.css';
import {Link} from 'react-router-dom';
export default function Header() {
    return(
        
            <div className="menus">
              <div className="heading">
              <div className="headingTitle">
                  <h1>willo online shooping centre</h1>
              </div>
           <div className="menuLinkss">
           <ul className="menu-ul">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Activities">Activities</Link></li>
            </ul>
           </div>
          </div>
          </div>
    
        
    )
    
}


/*export default class Header extends Component {
  render() {
    return (
      <div className="menus">
          <div className="heading">
          <div className="headingTitle">
              <h1>willo online shooping centre</h1>
          </div>
       <div className="menuLinkss">
       <ul className="menu-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
       </div>
      </div>
      </div>
    )
  }
}
*/