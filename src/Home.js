import React from 'react';

import homeCSS from './css/home.module.css'
import ScrollToTopOnMount from './ScrollToTopOnMount';

import recycleColour from './media/recycleColours.svg';
import arrow from './media/arrow.svg';

import skipSequence from './images/skipSequence.jpg';
import lorryAndVan from './images/lorryAndVan.jpg';
import travel from './images/travel.jpg';

import individualSkip from './images/individualSkip.jpg';
import individualLorry from './images/individualLorry.jpg';
import environment from './images/environment.jpg';

import sign from './images/sign.jpg';
import pulmonaryFibSkip from './images/pulmonaryFibSkip.jpg';
import newSkips from './images/newSkips.jpg';
import enclosedLowering from './images/enclosedLowering.jpg';

import facebook from './media/facebookIcon.svg'
import instagram from './media/instaIcon.svg'
import { Link } from 'react-router-dom';
import { Blurhash} from "react-blurhash";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function Home() {
  var instaLink = "https://www.instagram.com/dwpskips/";
  var facebookLink = "https://www.facebook.com/DwpSkips/";
 
  if(navigator.platform === "iPhone" || navigator.platform === "iPod" || navigator.platform === "iPad"){
    // IOS
    
    // "100063542438374"
  }
  if(navigator.platform === "Android"){
    // Android
    
  }

  const images = [
    {'img' : pulmonaryFibSkip, 'alt': "Skips in support of pulmonary fibrosis", 'blur': "LhDAcf%hx_odKnNfXAoc%LxZRjWA"},
    {'img': enclosedLowering, 'alt': "Enclosed skip being lowered", 'blur': "LnGbk]S$xts8_4jZkDbIX8nhWCSh"},
    {'img' : newSkips, 'alt': "Lorry full of new skips", 'blur': "LqGScXM_t7Rj_4WBWAkCxta}WCoe"},
    {'img' : sign, 'alt': "D.W.Parker Sign", 'blur': "LTCjq=MzT0xuEraxa#WB8^xZwaM|"}
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  function decreaseIndex (){
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1 );
  }

  function increaseIndex () {
    setCurrentIndex(prev => prev + 1 === images.length ? 0 : prev + 1 );
  }

  function setIndex (chosenIndex){
    setCurrentIndex(chosenIndex);
  }


  const displayImgRef = useRef();
  useEffect(() =>{
    displayImgRef.current.classList.add(`${homeCSS.imgInvisible}`);
  }, [currentIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1 === images.length ? 0 : prev + 1 );
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  function removeInvClass(e)
  {
    setTimeout(() => {
      e.target.classList.remove(`${homeCSS.imgInvisible}`);
    }, 500);
  }
  
  return (
    <div className={homeCSS.homePageDiv}>
      <ScrollToTopOnMount/>
      <div className={homeCSS.headImageContainer}>
        <Blurhash
            hash={images[currentIndex]['blur']}
            width
            height
            id={homeCSS.hashImg}
        />
        <img key={Date.now()} ref={displayImgRef} loading="lazy" src={images[currentIndex]['img']} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {removeInvClass(e)}} alt={images[currentIndex]['alt']} />
        <div className={homeCSS.setIndexContainer}>
          {images.map( (_, imageIndex) => (
              <div key={imageIndex} onClick={() => (setIndex(imageIndex))} className={currentIndex === imageIndex ? `${homeCSS.indexDot} ${homeCSS.selectedDot}` : `${homeCSS.indexDot}`}></div>
            ))}
        </div>
        <img src={arrow} className={`${homeCSS.arrow} ${homeCSS.rightArrow}`} onClick={increaseIndex} alt='right arrow'/>
        <img src={arrow} className={`${homeCSS.arrow} ${homeCSS.leftArrow}`} onClick={decreaseIndex} alt='left arrow'/>
      </div>
      <div className={homeCSS.headerContainer}>
          <div className={homeCSS.headerDiv}>
              <img className={homeCSS.iconStyle} src={recycleColour} alt="logo of DWP"/>
              <h1>Delivering Skips across Ayrshire</h1>
              <p>D.W.Parker Skip Hire is a local, family-owned business based in Ardrossan. We go the extra mile to ensure that you get the right skip at the right time, for both your commercial and residential needs, providing skips all across Ayrshire.</p>
              <p>Founded in 1993, we have nearly 30 years of experience providing comprehensive skip hire. In our years of service we have built a customer base that knows us to be a company they can rely on to provide them superior, honest and dependable skip-hire service and expert guidance.</p>
              <p>We offer a same or next day skip delivery at flexible short or long term hire rental for all our skips to suit your needs. All this whilst providing competitive rates, regardless of the skip rental period.</p>
          </div>
      </div>

      <div className={`${homeCSS.parallax1} ${homeCSS.parallax}`} loading="lazy"/>
      
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
              <h3>Waste Management Services</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We provide professional waste management services for all your needs.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/waste-management">Waste Management Services</Link>
            </div>
          </div>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>
              <Blurhash
                  hash="LLE.%=9bE4xY%%oIbHWC03-T$|R-"
                  width
                  height
                  id={homeCSS.hashImg}
              />
              <img loading="lazy" src={environment} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="sunrise over D.W.Parker Skip Hire" />
            </div>  
            <div className={homeCSS.panelText}>
              <h3>Ecologically Responsible Disposal</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We are registered and authorised by the Scottish Environment Protection Agency (SEPA) as a controlled waste carrier. We promote environmentally conscious practices to recycle your waste the right way.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/recycled-materials">Ecologically Responsible Disposal</Link>
            </div>
          </div>
          <div className={homeCSS.panel}>
            <div className={homeCSS.panelImg}>
              <Blurhash
                hash="LXG+RDIVxuoH~qt7R*j?-:%LWCM}"
                width
                height
                id={homeCSS.hashImg}
              />
              <img loading="lazy" src={individualLorry} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="individual D.W Parker Lorry" />
            </div>  
            <div className={homeCSS.panelText}>
                <h3>Waste Disposal</h3>
                <div className={homeCSS.headerTextDiv}>
                  <p>For professional skip rentals and waste management for residential or commercial properties, D.W.Parker Ltd offers straightforward, dependable service and professional guidance.</p>
                  </div>
                <Link className={homeCSS.panelLink} to="/waste-management">Waste Disposal</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${homeCSS.parallax2} ${homeCSS.parallax}`} loading="lazy"/>

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
              <h3>Skips For Your Needs</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We offer a wide variety of skip sizes for household and commercial use. Our experts will advise you on the best container for your needs.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/available-skips">Skips For Your Needs</Link>
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
              <h3>Domestic Waste Removal Specialists</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We at D.W.Parker Skip Hire Ltd are proud to be certified SEPA waste carriers; we provide expert guidance in the responsible management of waste materials.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/waste-management">Waste Management</Link>
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
              <h3>Local Services For You</h3>
              <div className={homeCSS.headerTextDiv}>
                <p>We are a family run business based in Ardrossan; delivering skips and recycled materials all across Ayrshire.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${homeCSS.parallax3} ${homeCSS.parallax} `} loading="lazy"/>

      <div className={homeCSS.socialDiv}>
        <div className={homeCSS.socialContainer}>
          <h1 className={homeCSS.socialTitle}>Check out our social media</h1>
          <p className={homeCSS.socialHighlight}>Leave a like or comment</p>
          <div className={homeCSS.socialButtons}>
            <a href={facebookLink}><img className={homeCSS.socialIconStyle} src={facebook} alt="link to DWP facebook page"/></a>
            <a href={instaLink}><img className={homeCSS.socialIconStyle} src={instagram} alt="link to DWP instagram page"/></a>
          </div>
          <p className={homeCSS.socialParagraph}>Follow us to get a glimpse into our daily work with regular updates from our team. Leave a like or write a review to help us improve our service.</p>
        </div>
      </div>
    </div>
  );
}

export default Home


