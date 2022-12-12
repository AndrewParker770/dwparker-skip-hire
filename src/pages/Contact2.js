import contactCss from '../css/contactpage.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import recycleColour from '../media/recycleColours.svg';

import facebook from '../media/facebookIcon.svg';
import instagram from '../media/instaIcon.svg';

import quotation from '../media/quotation_mark.svg';

import { Map, Marker } from "pigeon-maps"

export default function Contact2(){

    const email = "info@dwparkerskiphire.co.uk";
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
                    <img className={contactCss.iconStyle} src={recycleColour} alt="logo of DWP"/>
                    <h1>Choose from our wide range of skip sizes</h1>
                    <p>We have a variety of container sizes according to your needs, from 4yrd, 8yrd, 12yrd and 16yrd standard skips to 15yrd, 20yrd and 40yrd ROLO skips. Contact D.W Parker Skip Hire today for expert advice.</p>
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
                                <p className={contactCss.contactPointer}><a href={`mailto:${email}`}>{email}</a></p>
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
                            <p>D.W Parker Skip Hire, is registered in Scotland as a limited company. Company number: SC241950</p>
                            <p>Registered Company Address: Lochfield House, 135 Neilston Road, Paisley, Renfrewshire, PA2 6QL</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={contactCss.outerTestimonials}>
                <h1>Testimonials</h1>
                <div className={contactCss.testimonials}>
                    <div className={contactCss.quote}>
                        <img className={contactCss.socialIconStyle} src={quotation} alt="quotation mark"/>
                        <p>"Needed a skip last minute and girl on the phone got me one in a couple hours. Really easy as well."</p>
                    </div>
                    <div className={contactCss.quote}>
                        <img className={contactCss.socialIconStyle} src={quotation} alt="quotation mark"/>
                        <p>"10/10 Would recommend and will definitely use again."</p>
                    </div>
                    <div className={contactCss.quote}>
                        <img className={contactCss.socialIconStyle} src={quotation} alt="quotation mark"/>
                        <p>"Thank you very much."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};