import wasteCss from '../css/waste.module.css';

import recycleColour from '../media/recycleColours.svg';

import snowy from '../images/snowy.jpg';
import tipper from '../images/tipper.jpg';
import skipSequence from '../images/skipSequence.jpg';
import newSkips from '../images/newSkips.jpg';
import lorryAndVan from '../images/lorryAndVan.jpg';

import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { Blurhash} from "react-blurhash";

export default function Waste(){

    return(
        <div>
            <ScrollToTopOnMount/>
            <div className={wasteCss.headImageContainer}>
                <Blurhash
                    hash="LfEpD{n#s,of.AWBaej[SkWYWBWB"
                    width
                    height
                    id={wasteCss.hashImg}
                    className={wasteCss.headImage}
                />
                <img loading="lazy" src={newSkips} className={`${wasteCss.infoImgCover} ${wasteCss.imgInvisible} ${wasteCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${wasteCss.imgInvisible}`)}} alt="new skips arriving" />
            </div>
            <div className={wasteCss.headerContainer}>
                <div className={wasteCss.headerDiv}>
                    <img className={wasteCss.iconStyle} src={recycleColour} alt="logo of DWP"/>
                    <h1>Efficient rubbish removal services</h1>
                    <p>We are registered and certified by SEPA as a controlled waste carrier; we are licensed to safely and securely dispose of both domestic and commercial waste. Once collected from your property, your waste is transported it to our site where we sort it out using manual labour and our mechanical picking stations, with the majority of the result being recycled. Any non-recyclable waste is properly disposed of in ecologically responsible landfill sites.</p>
                </div>
            </div>
            <div className={wasteCss.outerPanelDiv}>
                <div className={wasteCss.panelDiv}>
                    <div className={wasteCss.panel}>
                        <div className={wasteCss.panelImg}>
                            <Blurhash
                                hash="LkE{kcE8WYoeX=ofj[az5E%1oeWV"
                                width
                                height
                                id={wasteCss.hashImg}
                            />
                            <img loading="lazy" src={lorryAndVan} className={`${wasteCss.infoImgCover} ${wasteCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${wasteCss.imgInvisible}`)}} alt="van and lorry" />
                        </div>  
                        <div className={wasteCss.panelText} id={wasteCss.panel1}>
                            <h3>Types Of Waste</h3>
                            <p>We recycle and safely dispose of many types of waste:</p>
                            <ul>
                                <li>Construction and Demolition</li>
                                <li>Property clearance</li>
                                <li>Paper, Cardboard and Plastic</li>
                                <li>Commercial, Domestic and Garden</li>
                            </ul>
                        </div>
                    </div>
                    <div className={wasteCss.panel}>
                        <div className={wasteCss.panelImg}>
                            <Blurhash
                                hash="L9DcO7Mc-p~V0AjC9%IoEV?GM_E3"
                                width
                                height
                                id={wasteCss.hashImg}
                                className={wasteCss.snowyImg}
                            />
                            <img loading="lazy" src={snowy} className={`${wasteCss.infoImgCover} ${wasteCss.imgInvisible} ${wasteCss.snowyImg}`} onLoad={(e) => {e.target.classList.toggle(`${wasteCss.imgInvisible}`)}} alt="variety of skip sizes" />
                        </div>  
                        <div className={wasteCss.panelText} id={wasteCss.panel2}>
                            <h3>Our Commitment To The Environment</h3>
                            <p>The majority of materials that pass through our site is recycled. Any non-recyclable waste is properly disposed of in ecologically responsible landfill sites.</p>
                        </div>
                    </div>
                    <div className={wasteCss.panel} id={wasteCss.panel3}>
                        <div className={wasteCss.panelImg}>
                            <Blurhash
                                hash="LjEy*;%J-:of%%xstRt6bxt7a$f9"
                                width
                                height
                                id={wasteCss.hashImg}
                            />
                            <img loading="lazy" src={tipper} className={`${wasteCss.infoImgCover} ${wasteCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${wasteCss.imgInvisible}`)}} alt="tipper" />
                        </div>  
                        <div className={wasteCss.panelText}>
                            <h3>What We Offer</h3>
                            <p>At our facility in Ardrossan we aim to recycle as much as possible. We take your rubbish and sort it out using manual labour and our mechanical picking stations.</p>
                        </div>
                    </div>
                    <div className={wasteCss.panel} id={wasteCss.panel4}>
                        <div className={wasteCss.panelImg}>
                            <Blurhash
                                hash="L-GSv3j]oea}?wWBj[j[xtf5f8oe"
                                width
                                height
                                id={wasteCss.hashImg}
                            />
                            <img loading="lazy" src={skipSequence} className={`${wasteCss.infoImgCover} ${wasteCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${wasteCss.imgInvisible}`)}} alt="various skips in sequnece" />
                        </div>  
                        <div className={wasteCss.panelText}>
                            <h3>What Can Not Be Thrown Away?</h3>
                            <p>We are able to process most everyday items, however <span className={wasteCss.bold}>we can not take:</span> electrical appliances, plaster board, tyres, compressed gas cylinders, chemicals, and hazardous materials, like asbestos, etc. If you are unsure contact our team for advice.</p>
                            <p>We do reserve the right to return these items to your property.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}