import React from 'react';

import homeCSS from './css/home.module.css'
import ScrollToTopOnMount from './ScrollToTopOnMount';

import icon from './media/icon.svg';
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
    {'img' : newSkips, 'alt': "lorry full of new skips", 'blur': "LqGScXM_t7Rj_4WBWAkCxta}WCoe"},
    {'img' : sign, 'alt': "D.W.Parker Sign", 'blur': "LTCjq=MzT0xuEraxa#WB8^xZwaM|"},
    {'img' : pulmonaryFibSkip, 'alt': "Skips in support of pulmonary fibrosis", 'blur': "LhDAcf%hx_odKnNfXAoc%LxZRjWA"},
    {'img': enclosedLowering, 'alt': "Enclosed skip being lowered", 'blur': "LnGbk]S$xts8_4jZkDbIX8nhWCSh"}
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const decreaseIndex = () => {
    const atFirstIndex = (currentIndex === 0);
    const newIndex = (atFirstIndex ? images.length -1 : currentIndex -1);
    setCurrentIndex(newIndex);
  }

  const increaseIndex = () => {
    const atLastIndex = (currentIndex === images.length -1);
    const newIndex = (atLastIndex ? 0: currentIndex + 1);
    setCurrentIndex(newIndex);
  }

  const setIndex = (chosenIndex) => {
    setCurrentIndex(chosenIndex);
  }


  const displayImgRef = useRef();
  useEffect(() =>{
    displayImgRef.current.classList.add(`${homeCSS.imgInvisible}`);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      increaseIndex();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  
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
        <img key={Date.now()} ref={displayImgRef} loading="lazy" src={images[currentIndex]['img']} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt={images[currentIndex]['alt']} />
        <div className={homeCSS.setIndexContainer}>
          {images.map( (image, imageIndex) => (
              <div key={imageIndex} onClick={() => (setIndex(imageIndex))} className={currentIndex === imageIndex ? `${homeCSS.indexDot} ${homeCSS.selectedDot}` : `${homeCSS.indexDot}`}></div>
            ))}
        </div>
        <img src={arrow} className={`${homeCSS.arrow} ${homeCSS.rightArrow}`} onClick={increaseIndex} />
        <img src={arrow} className={`${homeCSS.arrow} ${homeCSS.leftArrow}`} onClick={decreaseIndex} />
      </div>
      <div className={homeCSS.headerContainer}>
          <div className={homeCSS.headerDiv}>
              <img className={homeCSS.iconStyle} src={icon} alt="logo of DWP"/>
              <h1>Delivering Skips across Ayrshire</h1>
              <p>Here at D.W Parker Skip Hire we go the extra mile to ensure that you get the right skip at the right time, for your needs. Providing a wide selection of skips available for flexible short and long term contracts to help you with waste removal in Ayrshire and surrounding areas.</p>
          </div>
      </div>

      <div className={`${homeCSS.parallax1}`} loading={"lazy"}>
            <div className={`${homeCSS.innerParallax}`}/>
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
              <Blurhash
                  hash="LLE.%=9bE4xY%%oIbHWC03-T$|R-"
                  width
                  height
                  id={homeCSS.hashImg}
              />
              <img loading="lazy" src={environment} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="sunrise over D.W.Parker Skip Hire" />
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
              <Blurhash
                hash="LXG+RDIVxuoH~qt7R*j?-:%LWCM}"
                width
                height
                id={homeCSS.hashImg}
              />
              <img loading="lazy" src={individualLorry} className={`${homeCSS.infoImgCover} ${homeCSS.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${homeCSS.imgInvisible}`)}} alt="individual D.W Parker Lorry" />
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

      <div className={`${homeCSS.parallax2}`} loading={"lazy"}>
            <div className={`${homeCSS.innerParallax}`}/>
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
                <p>We are a local, family run business based in Ardrossan. We can deliver skips and recycled materials throughout Ayrshire.</p>
              </div>
              <Link className={homeCSS.panelLink} to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${homeCSS.parallax3}`} loading={"lazy"}>
            <div className={`${homeCSS.innerParallax}`}/>
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


