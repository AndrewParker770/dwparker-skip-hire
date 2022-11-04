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
        <p className={homeCSS.headerCard}> At D.W Parker Skip Hire we provide flexible skip hire services to suit you. All our skips are available to hire on short and long term contracts depending on each customer’s needs. We go the extra mile to ensure that you get the right skip for your needs, at the right time. All work is completed well within deadlines, freeing up your much required space. We’ve a pretty wide range of skips to help you with waste removal in Ardrossan, Ayrshire and surrounding areas. </p>
      </div>
      <div className={homeCSS.socialDiv}>
        <div className={homeCSS.socialContainer}>
          <h2 className={homeCSS.socialTitle}>Follow us on social media</h2>
          <p className={homeCSS.socialHighlight}>Leave a like or comment</p>
          <div className={homeCSS.socialButtons}>
            <a href="https://www.facebook.com/DwpSkips/"><img className={homeCSS.socialIconStyle} src={facebook} alt="link to DWP facebook page"/></a>
            <a href="https://www.instagram.com/dwpskips/"><img className={homeCSS.socialIconStyle} src={instagram} alt="link to DWP instagram page"/></a>
          </div>
          <p className={homeCSS.socialParagraph}>Follow us to get an insight into our day-to-day operations with regular updates from our team. Leave a like or write a review to help up improve our services.</p>
        </div>
        <img className={homeCSS.socialImage}/>
      </div>
      <div className={homeCSS.contactPanel}>
        <h2>Looking for skip hire in Ayrshire? For professional household waste management, contact D.W Parker Skip Hire on </h2>
        <h2><span className={homeCSS.contactPanelBold}>01294 463 597</span> or <span className={homeCSS.contactPanelBold}>07770 563 078</span></h2>
      </div>
    </div>
  );
}

export default Home


