import navbarCSS from './css/navbar.module.css'
import phoneIcon from './media/phone.png'
import icon from './media/icon.svg'
import React, { useEffect, useState} from 'react'

import cross from './media/x_icon.svg';
import nav from './media/navigation_icon.svg';

import {Link, useLocation } from "react-router-dom";
import useResizeObserver from '@react-hook/resize-observer';

const useSize = (target) => {
  const [size, setSize] = React.useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  //document.documentElement.style.setProperty('--wide-nav-height', "{{size.height}}");
  return size
}

function Navbar() {

  const headerTarget = React.useRef(null);
  const headerSize = useSize(headerTarget)
  if (headerSize){
    document.documentElement.style.setProperty('--wide-nav-height', headerSize.height + "px")
  };

  const phone_number = "01294 463 597";
  const email = "info@dwparkerskiphire.co.uk";

  const min_height = getComputedStyle(document.documentElement).getPropertyValue('--min-height');
  const max_height = getComputedStyle(document.documentElement).getPropertyValue('--max-height');

  const [isNavActive, setIsNavActive] = useState(false);

  const location = useLocation();
    

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

  function invertNav(){
    isNavActive ? setIsNavActive(false) : setIsNavActive(true);
  }

  function disableNav(){
    if(isNavActive){
      setIsNavActive(false)
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
      // eslint-disable-next-line
  }, []);

  useEffect(() =>{
    isNavActive ? document.documentElement.style.setProperty('--overflow-var', "hidden") : document.documentElement.style.setProperty('--overflow-var', "auto");
    isNavActive ? document.documentElement.style.setProperty('--navbar-translate', "0") : document.documentElement.style.setProperty('--navbar-translate', "-100%");
  }, [isNavActive]);

  const bodyTarget = React.useRef(null);
  const bodySize = useSize(bodyTarget)
  
  if(isNavActive && bodySize.width > 600){
    disableNav();
  }
  

  return (
    <div className={navbarCSS.navOuter} ref={bodyTarget}>
      <div className={navbarCSS.navbarBody}>
        <div className={navbarCSS.dropDown}>
          <img style={isNavActive ? {width: "0em", height: "0em"}: {width: "1.5em", height: "1.5em"}} className={navbarCSS.navIcon} src={nav} alt="navbar icon" onClick={invertNav}/>
          <img style={isNavActive ? {width: "1.5em", height: "1.5em" }: {width: "0em", height: "0em"}} className={navbarCSS.navIcon} src={cross} alt="navbar cancellation icon" onClick={invertNav}/>
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
      <div className={navbarCSS.mobileLinkBody} style={isNavActive? {display: "block"}: {display: "none"}}>
        <div className={navbarCSS.mobileLinkContainer}>
          <Link className={navbarCSS.mobileLinkText} style={location.pathname === "/" ? {textDecoration: "underline"} : {textDecoration: "none"}} to="/" onClick={disableNav}>Our Homepage</Link>
          <Link className={navbarCSS.mobileLinkText} style={location.pathname === "/contact" ? {textDecoration: "underline"} : {textDecoration: "none"}} to="/contact" onClick={disableNav}>Contact US</Link>
          <Link className={navbarCSS.mobileLinkText} style={location.pathname === "/faq" ? {textDecoration: "underline"} : {textDecoration: "none"}} to="/faq" onClick={disableNav}>FAQ</Link>
        </div>
      </div>
      <div className={navbarCSS.wideLinkBody} ref={headerTarget}>
        <div className={navbarCSS.wideLinkContainer}>
          <Link className={navbarCSS.wideLinkText} style={location.pathname === "/" ? {textDecoration: "underline"} : {textDecoration: "none"}} to="/">Our Homepage</Link>
          <Link className={navbarCSS.wideLinkText} style={location.pathname === "/contact" ? {textDecoration: "underline"} : {textDecoration: "none"}} to="/contact">Contact US</Link>
          <Link className={navbarCSS.wideLinkText} style={location.pathname === "/faq" ? {textDecoration: "underline"} : {textDecoration: "none"}} to="/faq">FAQ</Link>
        </div>
      </div>

      <div  id={navbarCSS.headerBlock}>

      </div>
    </div>
  );
}

export default Navbar


