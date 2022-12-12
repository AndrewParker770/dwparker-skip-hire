import teamCss from '../css/team.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import recycleColour from '../media/recycleColours.svg';
import threeLorries from '../images/threeLorries.jpg';

import tractor from '../images/tractor.jpg';
import tipperDriver from '../images/tipperDriver.jpg';
import skipLorryDriver from '../images/skipLorryDriver.jpg';
import yardMen from '../images/yardMen.jpg';
import lorryAndVan from '../images/lorryAndVan.jpg';
import lorrySunset from '../images/lorrySunset.jpg';

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
                    <img className={teamCss.iconStyle} src={recycleColour} alt="logo of DWP"/>
                    <h1>Meet Our Team</h1>
                </div>
            </div>
            <div className={teamCss.introductionDiv}>
                <p>We are more than just a skip hire company. We are a family run business based in Ardrossan, that has nearly 30 years of experience in providing superior professional skip hire services that is second to none.</p>
            </div>
            <div className={teamCss.outerPanelDiv}>
                <div className={teamCss.panelDiv}>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            <Blurhash
                                hash="LQEy6=#Q-UWC_NIVbIR*ElOFNHn~"
                                width
                                height
                                id={`${teamCss.hashImg} ${teamCss.tipperImage}`}
                                className={teamCss.headImage}
                            />
                            <img loading="lazy" src={lorrySunset} id={teamCss.tipperImage} className={`${teamCss.infoImgCover} ${teamCss.imgInvisible} ${teamCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${teamCss.imgInvisible}`)}} alt="lorry at sunset" />
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>David Wilson Parker</h3>
                            <p>Mr. Parker founded this business in 1995 with one lorry on his family farm.</p>
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
                            <h3>Skip Lorry Drivers</h3>
                            <p>We have 3 full time skip lorry drivers devoted to getting your skips delivered to you.</p>
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
                            <h3>Tipper Drivers</h3>
                            <p>At D.W. Parker Skip Hire we have 4 full time tipper drivers working to supply materials for all your needs.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            <Blurhash
                                hash="LkE{kcE8WYoeX=ofj[az5E%1oeWV"
                                width
                                height
                                id={`${teamCss.hashImg} ${teamCss.tipperImage}`}
                                className={teamCss.headImage}
                            />
                            <img loading="lazy" src={lorryAndVan} id={teamCss.tipperImage} className={`${teamCss.infoImgCover} ${teamCss.imgInvisible} ${teamCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${teamCss.imgInvisible}`)}} alt="van and lorry" />
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Office staff</h3>
                            <p>Our friendly office staff are only a call away to advise you on what service is right for you.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            <Blurhash
                                hash="L?9+BabdoKjYk]kCj@axN2n~WWof"
                                width
                                height
                                id={`${teamCss.hashImg} ${teamCss.tipperImage}`}
                                className={teamCss.headImage}
                            />
                            <img loading="lazy" src={yardMen} id={teamCss.tipperImage} className={`${teamCss.infoImgCover} ${teamCss.imgInvisible} ${teamCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${teamCss.imgInvisible}`)}} alt="yard man operating tipper" />
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Yard Men</h3>
                            <p>Our yard men are the backbone of our business, working like a well oiled machine to manage waste collection and sorting.</p>
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
                            <p>With our site ebing located beside our family farm, we have access to pretty heavy machinery to get jobs done effectively and efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}