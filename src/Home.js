import React from 'react';

import homeCSS from './css/home.module.css'
import ScrollToTopOnMount from './ScrollToTopOnMount';

import icon from './media/icon.svg';
import skipSequence from './images/skipSequence.jpg';
import lorryAndVan from './images/lorryAndVan.jpg';
import travel from './images/travel.jpg';

import individualSkip from './images/individualSkip.jpg';

import facebook from './media/facebookIcon.svg'
import instagram from './media/instaIcon.svg'
import { Link } from 'react-router-dom';
import { Blurhash} from "react-blurhash";

function Home() {
  var facebookLink = "https://www.facebook.com/DwpSkips/";
  var instaLink = "https://www.instagram.com/dwpskips/";

  if(navigator.platform === "iPhone" || navigator.platform === "iPod" || navigator.platform === "iPad"){
    // IOS
    instaLink = "instagram://user?username=dwpskips?href=https://www.instagram.com/dwpskips/"
    facebookLink = "fb://profile/100063542438374?https://www.facebook.com/DwpSkips/"
  }
  if(navigator.platform === "Android"){
    // Android
    instaLink = "instagram://user?username=dwpskips?href=https://www.instagram.com/dwpskips/"
  }

  return (
    <div className={homeCSS.homePageDiv}>
      <ScrollToTopOnMount/>
      <div className={homeCSS.headImageContainer}>
                
      </div>
      <div className={homeCSS.headerContainer}>
          <div className={homeCSS.headerDiv}>
              <img className={homeCSS.iconStyle} src={icon} alt="logo of DWP"/>
              <h1>Delivering Skips across Ayrshire</h1>
              <p>Here at D.W Parker Skip Hire we go the extra mile to ensure that you get the right skip at the right time, for your needs. Providing a wide selection of skips available for flexible short and long term contracts to help you with waste removal in Ardrossan, Ayrshire and surrounding areas.</p>
          </div>
      </div>

      <div className={homeCSS.middleImageContainer}>
                
      </div>

      <div className={homeCSS.outerPanelDiv}>
        <div className={homeCSS.panelDiv}>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>
              <Blurhash
                  hash="UrF$qy%LoIof~qxaocj[s.ayj[ayM{WCa#WV"
                  width
                  height
                  id={homeCSS.hashImg}
              />
              <img loading="lazy" src={individualSkip} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="individual D.W>Parker skip" />
            </div>  
            <div className={homeCSS.panelText}>
              <h3>Waste management services</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>For professional waste management services, contact D.W Parker Skip Hire.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/waste-management">Waste management services</Link>
            </div>
          </div>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>

            </div>  
            <div className={homeCSS.panelText}>
              <h3>Environmentally friendly recycling</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We are Scottish Environment Protection Agency (SEPA) registered and authorised as a controlled waste carrier. At D.W Parker Skip Hire, we care about the environment and aim to recycle the majority of the waste that we collect from our skips.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/recycled-materials">Environmentally friendly recycling</Link>
            </div>
          </div>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>

            </div>  
            <div className={homeCSS.panelText}>
                <h3>Rubbish disposal</h3>
                <div className={homeCSS.headerTextDiv}>
                  <p>For expert skip hire and waste disposal for your domestic or commercial property in Ayrshire, D.W Parker offer an honest, reliable service and expert advice.</p>
                  </div>
                <Link className={homeCSS.panelLink} to="/waste-management">Rubbish disposal</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCSS.middleImageContainer}>
                
      </div>

      <div className={homeCSS.outerPanelDiv}>
        <div className={homeCSS.panelDiv}>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>
              <Blurhash
                hash="U:GSv3kCoej]?wWCj[oLxuaxa#oejXofkAa#"
                width
                height
                id={homeCSS.hashImg}
              />
              <img loading="lazy" src={skipSequence} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="variety of skip sizes" />
            </div>  
            <div className={homeCSS.panelText}>
              <h3>Skips in all sizes</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We supply a wide range of skip sizes that are perfect for both domestic and commercial use. Our experts can advise you of the best skip for your requirements.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/available-skips">Skip hire</Link>
            </div>
          </div>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>
              <Blurhash
                hash="LkE{kcE8WYoeX=ofj[az5E%1oeWV"
                width
                height
                id={homeCSS.hashImg}
              />
              <img loading="lazy" src={lorryAndVan} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="van and lorry" />
            </div>  
            <div className={homeCSS.panelText}>
              <h3>Household waste removal experts</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>At D.W Parker Skip Hire we are proud to be SEPA registered and approved waste carriers. We can expertly remove waste materials and aim to recycle the majority of the materials we collect.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/waste-management">Waste management</Link>
            </div>
          </div>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>
            <Blurhash
                hash="LHEMRZ4otSx]~qISROoLyDofxuWB"
                width
                height
                id={homeCSS.hashImg}
              />
              <img loading="lazy" src={travel} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="lorry to largs" />
            </div>  
            <div className={homeCSS.panelText}>
              <h3>Local services for you</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We are a local, family run business based in Ayrshire. We can deliver skips, recycle materials and collect waste from you in Ardrossan, Ayr, Kilmarnock and Ayrshire areas.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={homeCSS.middleImageContainer}>
                
      </div>

      <div className={homeCSS.socialDiv}>
        <div className={homeCSS.socialContainer}>
          <h2 className={homeCSS.socialTitle}>Follow us on social media</h2>
          <p className={homeCSS.socialHighlight}>Leave a like or comment</p>
          <div className={homeCSS.socialButtons}>
            <a href={facebookLink}><img className={homeCSS.socialIconStyle} src={facebook} alt="link to DWP facebook page"/></a>
            <a href={instaLink}><img className={homeCSS.socialIconStyle} src={instagram} alt="link to DWP instagram page"/></a>
          </div>
          <p className={homeCSS.socialParagraph}>Follow us to get an insight into our day-to-day operations with regular updates from our team. Leave a like or write a review to help us improve our services.</p>
        </div>
      </div>
      <div className={homeCSS.contactPanel}>
        <h2>Looking for skip hire in Ayrshire? For specialised waste management solutions to professional or domestic needs, contact us at: </h2>
        <h2><span className={homeCSS.contactPanelBold}>01294 463 597</span> or <span className={homeCSS.contactPanelBold}>07770 563 078</span></h2>
      </div>
    </div>
  );
}

export default Home


