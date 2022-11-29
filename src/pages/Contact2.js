import contactCss from '../css/contactpage.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import icon from '../media/icon.svg';

import facebook from '../media/facebookIcon.svg';
import instagram from '../media/instaIcon.svg';

import quotation from '../media/quotation_mark.svg';

import { Map, Marker } from "pigeon-maps"

export default function Contact2(){

    return(
        <div className={contactCss.outerDiv}>
            <ScrollToTopOnMount/>
            <div className={contactCss.mapDiv}>
                <Map height={275} defaultCenter={[55.67201832294405, -4.8221146418623215]} defaultZoom={12}>
                    <Marker width={50} anchor={[55.67201832294405, -4.8221146418623215]} />
                </Map>
            </div>
            <div className={contactCss.headerContainer}>
                <div className={contactCss.headerDiv}>
                    <img className={contactCss.iconStyle} src={icon} alt="logo of DWP"/>
                    <h1>Choose from a range of skip sizes in Ayrshire</h1>
                    <p>We offer a range of skip sizes for you to choose from. We supply skips of all sizes from 4,8,12,16 standard skips to 15, 20 and 40 ROLO skips. For skip hire for all your commercial and domestic needs in Ayrshire and surrounding areas, contact D.W Parker Skip Hire today.</p>
                    <p>Contact us Monday to Friday from 6am to 5pm and Saturday 8am to 12pm.</p>
                </div>
            </div>
            <div className={contactCss.outerDetailDiv}>
                <h1>Our contact details</h1>
                <div className={contactCss.detailFlex}>
                    <div className={contactCss.detailDiv}>
                        <div className={contactCss.detailElement}> 
                            <div>
                                <p id={contactCss.bold}>Tel:</p>
                                <p>01294 463 597</p>
                            </div>
                            <div>
                                <p id={contactCss.bold}>Mobile:</p>
                                <p>07770 563 078</p>
                            </div>
                            <div>
                                <p id={contactCss.bold}>Email:</p>
                                <p>info@dwparkerskiphire.co.uk</p>
                            </div>
                            <div>
                                <p id={contactCss.bold}>Social Media:</p>
                                <div className={contactCss.socialButtons}>
                                    <a href="https://www.facebook.com/DwpSkips/"><img className={contactCss.socialIconStyle} src={facebook} alt="link to DWP facebook page"/></a>
                                    <a href="https://www.instagram.com/dwpskips/"><img className={contactCss.socialIconStyle} src={instagram} alt="link to DWP instagram page"/></a>
                                </div>
                            </div>
                        </div>
                        <div className={contactCss.detailAddressElement}> 
                            <p id={contactCss.bold}>Address:</p>
                            <p>D.W Parker Skip Hire</p>
                            <p>High Boydston Farm</p>
                            <p>Ardrossan</p>
                            <p>Ayrshire</p>
                            <p>KA22 8PL</p>
                        </div>
                        <div id={contactCss.disclaim} className={contactCss.detailElement}> 
                            <p>D.W Parker Skip Hire, registered as a limited company in Scotland under company number: SC241950</p>
                            <p>Registered Company Address: Lochfield House, 135 Neilston Road, Paisley, Renfrewshire, PA2 6QL</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={contactCss.outerTestimonials}>
                <h1>Why people believe in us</h1>
                <div className={contactCss.testimonials}>
                    <div className={contactCss.quote}>
                        <img className={contactCss.socialIconStyle} src={quotation} alt="quotation mark"/>
                        <p>"Great service. Sent me my skip 2 days after I ordered it and they took it back early once I was finished with it. Called helpdesk a few times and they were great help too. Great price - 10/10"</p>
                    </div>
                    <div className={contactCss.quote}>
                        <img className={contactCss.socialIconStyle} src={quotation} alt="quotation mark"/>
                        <p>"Fantastic service. Heather in the office was friendly & approachable. Our hire was organised and executed exactly as we expected. Highly recommended and will definitely use again. Thank you so much."</p>
                    </div>
                    <div className={contactCss.quote}>
                        <img className={contactCss.socialIconStyle} src={quotation} alt="quotation mark"/>
                        <p>"Ordered an 8 yard skip and it was £120 cheaper than what I had been previously quoted from a few companies. Heather is a delight to speak to on the phone ... really happy with the service I was provided on the phone. Will be recommending to everyone"</p>
                    </div>
                    <div className={contactCss.quote}>
                        <img className={contactCss.socialIconStyle} src={quotation} alt="quotation mark"/>
                        <p>“First class service - thank you"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};