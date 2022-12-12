import skipsCss from '../css/skips.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import recycleColour from '../media/recycleColours.svg';
import twoLorries from '../images/twoLorries.jpg';

import skipSequence from '../images/skipSequence.jpg';
import lorryRow from '../images/lorryRow.jpg';
import lorryAndVan from '../images/lorryAndVan.jpg';
import sign from '../images/sign.jpg';

import individualSkip from '../images/individualSkip.jpg';
import enclosedLoaded from '../images/enclosedLoaded.jpg';
import bin from '../images/bin.jpg';
import drop from '../images/dropDoor.jpg';

import { Blurhash} from "react-blurhash";

export default function Skips(){
    
    return(
        <div>
            <ScrollToTopOnMount/>
            <div className={skipsCss.headImageContainer}>
                <Blurhash
                    hash="LfEpD{n#s,of.AWBaej[SkWYWBWB"
                    width
                    height
                    id={skipsCss.hashImg}
                    className={skipsCss.headImage}
                />
                <img loading="lazy" src={twoLorries} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible} ${skipsCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="row of lorries" />
            </div>
            <div className={skipsCss.headerContainer}>
                <div className={skipsCss.headerDiv}>
                    <img className={skipsCss.iconStyle} src={recycleColour} alt="logo of DWP"/>
                    <h1>Need a skip and don't know where to start?</h1>
                    <p>D.W. Parker Skip Hire offers a variety of skip rentals throughout Ayrshire. Contact us today for expert guidance on what services are right for your needs.</p>
                </div>
            </div>
            <div className={skipsCss.outerPanelDiv}>
                <div className={skipsCss.panelDiv}>
                    <div className={skipsCss.panel}>
                        <div className={skipsCss.panelImg}>
                            <Blurhash
                                hash="LkE{kcE8WYoeX=ofj[az5E%1oeWV"
                                width
                                height
                                id={skipsCss.hashImg}
                            />
                            <img loading="lazy" src={lorryAndVan} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="lorry and van" />
                        </div>  
                        <div className={skipsCss.panelText} id={skipsCss.panel1}>
                            <h3>Skip Rental Periods</h3>
                            <p>Our prices are based on a 7 day rental period, but if you are looking for a long term contract, please contact us.</p>
                        </div>
                    </div>
                    <div className={skipsCss.panel}>
                        <div className={skipsCss.panelImg}>
                            <Blurhash
                                hash="U:GSv3kCoej]?wWCj[oLxuaxa#oejXofkAa#"
                                width
                                height
                                id={skipsCss.hashImg}
                            />
                            <img loading="lazy" src={skipSequence} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="variety of skip sizes" />
                        </div>  
                        <div className={skipsCss.panelText} id={skipsCss.panel2}>
                            <h3>Get The Right Size For You</h3>
                            <p>Providing 4yd, 8yd, 12yd and 16yrd standard to 15yrd, 20yd and 40yrd ROLO bins depending on your needs.</p>
                        </div>
                    </div>
                    <div className={skipsCss.panel} id={skipsCss.panel3}>
                        <div className={skipsCss.panelImg}>
                            <Blurhash
                                hash="LTCjq=MzT0xuEraxa#WB8^xZwaM|"
                                width
                                height
                                id={skipsCss.hashImg}
                            />
                            <img loading="lazy" src={sign} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="D.W.Parker Sign" />
                        </div>  
                        <div className={skipsCss.panelText}>
                            <h3>What We Offer</h3>
                            <p>At D.W. Parker Skip Hire Ltd we wide range of skips and services to facilitate anything from home to construction site waste clearances, providing both midi and maxi skips. Contact our specialists for advice on the best services for you.</p>
                        </div>
                    </div>
                    <div className={skipsCss.panel} id={skipsCss.panel4}>
                        <div className={skipsCss.panelImg}>
                            <Blurhash
                                hash="LwHVPIxuj[ay_4t7ayayt7ofWBf6"
                                width
                                height
                                id={skipsCss.hashImg}
                            />
                            <img loading="lazy" src={lorryRow} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="row of lorries" />
                        </div>  
                        <div className={skipsCss.panelText}>
                        <h3>Hassle Free Services</h3>
                        <p>We are experts waste removal, here to support you with services specialised to what you need. We provide:</p>
                            <ul>
                                <li>Difficult access services</li>
                                <li>Wait and load services</li>
                                <li>Commercial and Domestic Skip Hire</li>
                                <li>Roll on/Roll off Skip Hire</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={skipsCss.outerSkipInfo}>
                <div className={skipsCss.infoContainer}>
                    <div className={skipsCss.skipInfo}>
                        <h4>4 Yard Skip</h4>
                        <p>Ideal for kitchen and bathroom refittings, as well as gardening waste.</p>
                        <p>These can hold approximately 35 to 40 black bin bags.</p>
                        <p>The dimensions are approximately 7 ft in length x 4 ft in width x 3 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>8 Yard Skip</h4>
                        <p>Ideal for kitchen and bathroom renovations, as well as gardening waste.</p>
                        <p>These can hold approximately 65-70 black bin bags.</p>
                        <p>The dimensions are approximately 12 ft length x 6 ft width x 4.5 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>12 Yard Skip</h4>
                        <p>Perfect for industrial and commercial purposes. Ideal for holding large bulky items and construction materials.</p>
                        <p>These can hold approximately 120 black bin bags.</p>
                        <p>The dimensions are approximately 13 ft length x 6 ft width x 6.5 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>16 Yard Skip</h4>
                        <p>Perfect for large house clean clearances or renovations. Ideal for holding light items and large bulky construction materials.</p>
                        <p>These can hold approximately 170 black bin bags.</p>
                        <p>The dimensions are approximately 13.5 ft length x 6 ft width x 6.5 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>20 Yard Bin</h4>
                        <p>Popular amoungst builders to hold considerable waste and bulky items.</p>
                        <p>These can hold approximately 220 black bin bags.</p>
                        <p>The dimensions are approximately 20 ft length x 8 ft width x 4 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>40 Yard Bin</h4>
                        <p>Perfect for both commercial and domestic sites for the removal of a huge amount of mixed waste, such as metal, lumber, gardening waste, light and heavy items.</p>
                        <p>These can hold approximately 440 black bin bags.</p>
                        <p>The dimensions are approximately 20 ft length x 8 ft width x 8.5 ft height.</p>
                    </div>
                </div>
                <p>* dimensions are approximations as variations exist between manufacturers.</p>
            </div>
            <div className={skipsCss.skipDisplayDiv}>
                <div className={skipsCss.skipDisplayElem}>
                    <Blurhash
                        hash="LpFsAA%KoIoe~qxaocj[oIaej]WV"
                        width
                        height
                        id={skipsCss.hashImg}
                    />
                    <img loading="lazy" src={individualSkip} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="individual D.W Parker open skip" />
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Open</h3>
                    </div>
                </div>
                <div className={skipsCss.skipDisplayElem}>
                    <Blurhash
                        hash="LhF5~wt6x]%L~qWAofof%MM{M{Rj"
                        width
                        height
                        id={skipsCss.hashImg}
                    />
                    <img loading="lazy" src={enclosedLoaded} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="enclosed skip loaded on lorry" />
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Enclosed</h3>
                    </div>
                </div>
                <div className={skipsCss.skipDisplayElem}>
                    <Blurhash
                        hash="LyAnm4RkWUjEt:ayj?jYN2ofofbI"
                        width
                        height
                        id={skipsCss.hashImg}
                    />
                    <img loading="lazy" src={bin} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="lorry carrying bin" />
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Bins</h3>
                    </div>
                </div>
                <div className={skipsCss.skipDisplayElem}>
                    <Blurhash
                        hash="LuF6IQa}Rkog_4WBWVj]o#Rjt7WB"
                        width
                        height
                        id={skipsCss.hashImg}
                    />
                    <img loading="lazy" src={drop} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="ldrop door skip" />
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Drop Door</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}