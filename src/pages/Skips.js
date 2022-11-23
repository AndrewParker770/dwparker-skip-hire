import skipsCss from '../css/skips.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import icon from '../media/icon.svg';
import skipSequence from '../images/skipSequence.jpg';
import lorryRow from '../images/lorryRow.jpg';
import individualLorry from '../images/individualLorry.jpg';
import individualSkip from '../images/individualSkip.jpg';

import { Blurhash} from "react-blurhash";

export default function Skips(){
    
    return(
        <div>
            <ScrollToTopOnMount/>
            <div className={skipsCss.headImageContainer}>
            </div>
            <div className={skipsCss.headerContainer}>
                <div className={skipsCss.headerDiv}>
                    <img className={skipsCss.iconStyle} src={icon} alt="logo of DWP"/>
                    <h1>Do you want to hire a skip?</h1>
                    <p>At D.W Parker Skip Hire, we offer a range of skips for hire, based in Ardrossan, Ayrshire, why not get in touch today?</p>
                </div>
            </div>
            <div className={skipsCss.introductionDiv}>
                <h2>Skip Hire in Ayrshire</h2>
                <p>Had a recent property clearance? Has building work left you with excess materials and waste at your property? Whatever the reason you need to hire a skip, D.W Parker Skip Hire have skips available for hire for both domestic and commercial uses. We offer flexible hire services to all our customers at the most competitive rates in Ayrshire. Our skips are available to hire for both short term and long term contracts depending on our customer’s needs. No matter how long you want to hire our skips for, all our contracts are Ayrshire's most competitive prices.</p>
            </div>
            <div className={skipsCss.contactPanel}>
                <h2>To find out more about our skip hire services and for advice on the best skip size for your disposal needs contact D.W Parker Skip Hire today</h2>
                <h2><span className={skipsCss.contactPanelBold}>01294 463 597</span> or <span className={skipsCss.contactPanelBold}>07770 563 078</span></h2>
            </div>
            <div className={skipsCss.outerPanelDiv}>
                <div className={skipsCss.panelDiv}>
                    <div className={skipsCss.panel}>
                        <div className={skipsCss.panelImg}>
                            <Blurhash
                                hash="UrF$qy%LoIof~qxaocj[s.ayj[ayM{WCa#WV"
                                width
                                height
                                id={skipsCss.hashImg}
                            />
                            <img loading="lazy" src={individualSkip} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="individual D.W>Parker skip" />
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
                                hash="LXG+RDIVxuoH~qt7R*j?-:%LWCM}"
                                width
                                height
                                id={skipsCss.hashImg}
                            />
                            <img loading="lazy" src={individualLorry} className={`${skipsCss.infoImgCover} ${skipsCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${skipsCss.imgInvisible}`)}} alt="individual D.W>Parker Lorry" />
                        </div>  
                        <div className={skipsCss.panelText}>
                            <h3>What we offer</h3>
                            <p>At D.W Parker Skip Hire we stock a wide range of skips that are suitable for needs of all sizes. Our skips are suitable for anything from small, house clearances to large scale building site waste disposal. We stock both midi and maxi skips and our experts are available to give advice on the best skip for your needs. We supply skips of all sizes from 4, 6, 8, 12 and 16 standard skips to 15, 20 and 40 cubic yard ROLO options.</p>
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
                        <p>4 yard skip also known as the midi skip. The dimensions are approximately 7 ft in length x 5 ft in width x 4 ft in height. These skips can hold your domestic waste up to 4 tones or 40 to 50 black bin bags. Besides these, they can hold 15 to 18 wheelbarrows.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>8 Yard Skip</h4>
                        <p>8 yard skip known as a builders skips. 8 yard skips can carry a moderate amount of waste from your kitchen or bathroom. These skips can hold eight tones of waste and 60-70 black bin bags. The dimensions of 8 yard skips are 12 ft length x 6 ft width x 4.5 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>12 Yard Skip</h4>
                        <p>12 yard skips are best for industrial purposes. The skip holds 120 tonnes, or 120 to 130 black bin bags. These skips are handy to get rid of a large amount of waste. The dimensions of these skips are 13 ft length x 6 ft width x 6.5 ft height.</p>
                    </div>
                    <div className={skipsCss.skipInfo}>
                        <h4>15 Yard Bin</h4>
                        <p>15 yard bin is the best solution for waste removal for more massive house clean ups, destruction, renovations and also used to carry a vast amount of waste from building areas. 15 yard bins can hold 170 to 180 black bin bags and the dimension 13.5 ft length x 6 ft width x 6.5 ft height.</p>
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
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Open</h3>
                    </div>
                </div>
                <div className={skipsCss.skipDisplayElem}>
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Enclosed</h3>
                    </div>
                </div>
                <div className={skipsCss.skipDisplayElem}>
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Bins</h3>
                    </div>
                </div>
                <div className={skipsCss.skipDisplayElem}>
                    <div className={skipsCss.skipDisplayTextbox}>
                        <h3>Lorries</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}