import navbarCSS from './css/navbar.module.css'
import phoneIcon from './media/phone.png'
import icon from './media/icon.svg'
import React, { useEffect } from 'react'

function Navbar() {
  const phone_number = "01294 463 597";
  const email = "info@dwparkerskiphire.co.uk";

  const min_height = getComputedStyle(document.documentElement).getPropertyValue('--min-height');
  const max_height = getComputedStyle(document.documentElement).getPropertyValue('--max-height');
    

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

  return (
    <div>
      <div className={navbarCSS.navbarBody}>
        <div className={navbarCSS.dropDown}>
          <div className={navbarCSS.bars}>
            <div className={`${navbarCSS.bar1} ${navbarCSS.bar}`}>

            </div>
            <div className={`${navbarCSS.bar2} ${navbarCSS.bar}`}>

            </div>
            <div className={`${navbarCSS.bar3} ${navbarCSS.bar}`}>

            </div>
          </div>
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


