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
                    <h1>Do you want to hire a skip?</h1>
                    <p>At D.W Parker Skip Hire, we offer a range of skips for hire throughout Ayrshire. Why not get in touch today?</p>
                </div>
            </div>
            <div className={skipsCss.introductionDiv}>
                <h2>Skip Hire in Ayrshire</h2>
                <p>Had a recent property clearance? Has building work left you with excess materials and waste at your property? Whatever the reason you need to hire a skip, D.W Parker Skip Hire have skips available for hire for both domestic and commercial uses. We offer flexible hire services to all our customers at the most competitive rates in Ayrshire. Our skips are available to hire for both short term and long term contracts depending on our customer’s needs. No matter how long you want to hire our skips for, all our contracts are Ayrshire's most competitive prices.</p>
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
                            <h3>Skip hire to suit your needs</h3>
                            <p>Our prices are based on a 7 day hire but if you are looking for a longer term arrangement contact us and we will see what we can do to help.</p>
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
                            <h3>Skip sizes to suit all properties</h3>
                            <p>From 4yd, 8yd and 12yd builders to 40yd ROLO bins, we have a range of sizes available depending on your needs.</p>
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
                            <h3>What we offer</h3>
                            <p>At D.W Parker Skip Hire we stock a wide range of skips that are suitable for needs of all sizes. Our skips are suitable for anything from small, house clearances to large scale building site waste disposal. We stock both midi and maxi skips and our experts are available to give advice on the best skip for your needs. We supply skips of all sizes from 4, 8, 12 and 16 standard skips to 15, 20 and 40 cubic yard ROLO options.</p>
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
                        <h3>Skip the hassle</h3>
                            <ul>
                                <li>Difficult access service</li>
                                <li>Wait and load service</li>
                                <li>Commercial skip hire</li>
                                <li>Domestic skip hire</li>
                                <li>Roll on/roll off skip hire</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={skipsCss.outerSkipInfo}>
                <div className={skipsCss.infoContainer}>
                    <div className={skipsCss.skipInfo}>
                        <h4>4 Yard Skip</h4>
                        <p></p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>8 Yard Skip</h4>
                        <p></p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>12 Yard Skip</h4>
                        <p></p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4></h4>
                        <p></p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>20 Yard Bin</h4>
                        <p>20 yard bins also known as Roll-On & Roll-Off skip. 20 yard bins can carry numerous amounts of waste very quickly where the regular skips are not the excellent. 20 yard skip can hold 220 to 230 black bin bags and the dimensions are approximately 20 ft length x 8 ft width x 4 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>40 Yard Bin</h4>
                        <p>40 yard skip is the largest skip size available in the skip hire industry. These skips can carry numerous amount of rubbish and the best choice for a vast amount of waste removal. 40 yard skip can carry 400 tones or can hold 440 to 450 black bin bags. The dimensions are 20 ft Length x 8 ft Width x 8.5 ft Height.</p>
                    </div>
                </div>
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