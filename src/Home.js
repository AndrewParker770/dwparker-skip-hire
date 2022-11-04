import React from 'react';

import homeCSS from './css/home.module.css'
import icon from './media/icon.svg'

import facebook from './media/facebookIcon.svg'
import instagram from './media/instaIcon.svg'

function Home() {
  return (
    <div className={homeCSS.homePageDiv}>
      <div className={homeCSS.introDiv}>
        <img className={homeCSS.iconStyle} src={icon} alt="logo of DWP"/>
        <h1 className={homeCSS.headerTitle} >Delivering Skips across Ayrshire</h1>
        <p className={homeCSS.headerCard}> Here at D.W Parker Skip Hire we go the extra mile to ensure that you get the right skip at the right time, for your needs. Providing a wide selection of skips available for flexible short and long term contracts to help you with waste removal in Ardrossan, Ayrshire and surrounding areas. </p>
      </div>
      <div className={homeCSS.socialDiv}>
        <div className={homeCSS.socialContainer}>
          <h2 className={homeCSS.socialTitle}>Follow us on social media</h2>
          <p className={homeCSS.socialHighlight}>Leave a like or comment</p>
          <div className={homeCSS.socialButtons}>
            <a href="https://www.facebook.com/DwpSkips/"><img className={homeCSS.socialIconStyle} src={facebook} alt="link to DWP facebook page"/></a>
            <a href="https://www.instagram.com/dwpskips/"><img className={homeCSS.socialIconStyle} src={instagram} alt="link to DWP instagram page"/></a>
          </div>
          <p className={homeCSS.socialParagraph}>Follow us to get an insight into our day-to-day operations with regular updates from our team. Leave a like or write a review to help us improve our services.</p>
        </div>
        <img className={homeCSS.socialImage}/>
      </div>
      <div className={homeCSS.contactPanel}>
        <h2></h2>
        <h2><span className={homeCSS.contactPanelBold}>01294 463 597</span> or <span className={homeCSS.contactPanelBold}>07770 563 078</span></h2>
      </div>
    </div>
  );
}

export default Home


