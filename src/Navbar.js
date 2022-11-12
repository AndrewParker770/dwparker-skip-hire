import navbarCSS from './css/navbar.module.css'
import phoneIcon from './media/phone.png'
import icon from './media/icon.svg'
import React, { useEffect, useState, componentDidMount } from 'react'

import cross from './media/x_icon.svg';
import nav from './media/navigation_icon.svg';

function Navbar() {
  const phone_number = "01294 463 597";
  const email = "info@dwparkerskiphire.co.uk";

  const min_height = getComputedStyle(document.documentElement).getPropertyValue('--min-height');
  const max_height = getComputedStyle(document.documentElement).getPropertyValue('--max-height');

  const [isNavActive, setIsNavActive] = useState(true);
    

  function setHeaderHeight(height){
    document.documentElement.style.setProperty('--header-height', height)
  }

  const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 20){
        setHeaderHeight(max_height);
      }else{
        setHeaderHeight(min_height);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
      // eslint-disable-next-line
  }, []);

  // id={`navbarCSS.${isNavActive ? '': 'invisible'}`}

  return (
    <div>
      <div className={navbarCSS.navbarBody}>
        <div className={navbarCSS.dropDown}>
          <img style={isNavActive ? {width: "1.5em", height: "1.5em" }: {width: "0em", height: "0em"}} className={navbarCSS.navIcon} src={nav} alt="navbar icon" onClick={() => isNavActive ? setIsNavActive(false) : setIsNavActive(true)}/>
          <img style={isNavActive ? {width: "0em", height: "0em"}: {width: "1.5em", height: "1.5em"}} className={navbarCSS.navIcon} src={cross} alt="navbar cancellation icon" onClick={() => isNavActive ? setIsNavActive(false) : setIsNavActive(true)}/>
        </div>

        <div className={navbarCSS.titleContainer}>
          <div className={navbarCSS.title}>
            <p id={navbarCSS.primaryTitle}>D. W Parker</p>
            <p id={navbarCSS.secondaryTitle}>Skip Hire</p>
          </div>
          <img className={navbarCSS.titleIcon} src={icon} alt="logo of DWP"/>
        </div>

        <div className={navbarCSS.phoneDiv}>
          <p><a href="tel:{phone_number}"><img className={navbarCSS.phoneIcon} src={phoneIcon} alt="icon of a phone"/></a></p>
          <div className={navbarCSS.contactNumbers}>
            <ul>
              <li id={navbarCSS.contactPointer}><a href="tel:{phone_number}"> {phone_number}</a></li>
              <li id={navbarCSS.contactPointer}><a href="mailto:{email}"> {email}</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div  id={navbarCSS.headerBlock}>

      </div>
    </div>
  );
}

export default Navbar


