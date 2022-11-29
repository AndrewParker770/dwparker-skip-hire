import teamCss from '../css/team.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import icon from '../media/icon.svg';
import threeLorries from '../images/threeLorries.jpg';

import tractor from '../images/tractor.jpg';
import tipperDriver from '../images/tipperDriver.jpg';
import skipLorryDriver from '../images/skipLorryDriver.jpg';

import { Blurhash} from "react-blurhash";

export default function Team(){

    return(
        <div>
            <ScrollToTopOnMount/>
            <div className={teamCss.headImageContainer}>
                <Blurhash
                    hash="LyIhmbt6ofoL~qoJayj[ogayaya}"
                    width
                    height
                    id={teamCss.hashImg}
                    className={teamCss.headImage}
                />
                <img loading="lazy" src={threeLorries} className={`${teamCss.infoImgCover} ${teamCss.imgInvisible} ${teamCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${teamCss.imgInvisible}`)}} alt="three lorries in a row" />
            </div>
            <div className={teamCss.headerContainer}>
                <div className={teamCss.headerDiv}>
                    <img className={teamCss.iconStyle} src={icon} alt="logo of DWP"/>
                    <h1>Meet Our Team</h1>
                </div>
            </div>
            <div className={teamCss.introductionDiv}>
                <p>We are more than just a skip hire company.  We are a family run business based in Ardrossan, that has 25 years experience allowing us to provide expert service to all our customers, old and new.</p>
                <p>At D.W Parker Skip Hire we work hard to allow us to give our customers the best service we can.  All our team members are experienced and reliable to help offer a service second to none.</p>
            </div>
            <div className={teamCss.outerPanelDiv}>
                <div className={teamCss.panelDiv}>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>David Parker</h3>
                            <p>Mr. Parker is the founder and manager of the company.  Starting the business in 1995 with one lorry on his family farm.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            <Blurhash
                                hash="LRBzY1V;OHNGKUe-o$bJIvo$slxu"
                                width
                                height
                                id={`${teamCss.hashImg} ${teamCss.tipperImage}`}
                                className={teamCss.headImage}
                            />
                            <img loading="lazy" src={skipLorryDriver} id={teamCss.tipperImage} className={`${teamCss.infoImgCover} ${teamCss.imgInvisible} ${teamCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${teamCss.imgInvisible}`)}} alt="skip lorry" />
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Skip Lorry drivers</h3>
                            <p>Working with us we have 3 full time skip lorry drivers working hard to get your skips delivered to you.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            <Blurhash
                                hash="LWHo5ro#j?oI9GRjRjWB~ot6M{Rk"
                                width
                                height
                                id={`${teamCss.hashImg} ${teamCss.tipperImage}`}
                                className={teamCss.headImage}
                            />
                            <img loading="lazy" src={tipperDriver} id={teamCss.tipperImage} className={`${teamCss.infoImgCover} ${teamCss.imgInvisible} ${teamCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${teamCss.imgInvisible}`)}} alt="tipper" />
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Tipper drivers</h3>
                            <p>At Parkers we have 4 full time tipper drivers working.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>

                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Office staff</h3>
                            <p>Our office staff are always on hand to help and just a phone call away.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>

                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Yard Men</h3>
                            <p>Onsite working hard to sort through everything that come in and out our yard is our yards men.  Working hard to keep the well oiled machine going.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            <Blurhash
                                hash="LqGleVxsxtoe_4s.oLf8xuj[WCay"
                                width
                                height
                                id={teamCss.hashImg}
                                className={teamCss.headImage}
                            />
                            <img loading="lazy" src={tractor} className={`${teamCss.infoImgCover} ${teamCss.imgInvisible} ${teamCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${teamCss.imgInvisible}`)}} alt="tractor" />
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Farm workers</h3>
                            <p>Our site is located beside the family farm, allowing us to use our other machinery to get jobs done effectively and efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}