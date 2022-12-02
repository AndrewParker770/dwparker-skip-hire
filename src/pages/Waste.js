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
                    <p>Do you require rubbish removal services in Ayrshire? Contact the professionals from D.W Parker Skip Hire today for a free quote.</p>
                </div>
            </div>
            <div className={wasteCss.introductionDiv}>
                <h2>Expert waste management in Ayrshire</h2>
                <p>At D.W Parker Skip Hire we are SEPA registered and fully qualified for waste disposal in Ayrshire. We are licensed to collect all types of waste and safely and securely dispose of it. We can dispose of both domestic and commercial waste. We can collect waste from your property and transport it to our site where the majority of the waste is recycled. The rest of the waste is transported and disposed of in environmentally friendly landfill sites.</p>
                <p>We are licensed to safely dispose of non-hazardous waste. </p>
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
                            <h3>We recycle and safely dispose of many types of waste:</h3>
                            <ul>
                                <li>Building waste disposal</li>
                                <li>Paper and cardboard disposal</li>
                                <li>Commercial waste disposal</li>
                                <li>Construction waste disposal</li>
                                <li>Plastic waste disposal</li>
                                <li>Domestic and garden waste disposal</li>
                                <li>Property clearance</li>
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
                            <h3>Putting you and the environment first</h3>
                            <p>At D.W Parker Skip Hire our main concerns are the environment, public safety and health.</p>
                            <p>Our experienced team are trained to dispose safely of all types of waste. If you have any queries or concerns or simply want advice on disposing of your waste, please do not hesitate to contact us.</p>
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
                            <h3>What we offer</h3>
                            <p>At our facility in Ardrossan we aim to recycle as much as possible.  We take your rubbish and sort it out using manual labour and our mechanical picking stations.</p>
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
                            <h3>What we don't accept:</h3>
                            <p>Plasterboard, tyres, fridges or freezers, paint tins, gas bottles, any hazardous materials eg. asbestos. We do reserve the right to return these items to your property.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={wasteCss.contactPanel}>
                    <h2>For rubbish removal and waste management services in Ayrshire, get in touch with D.W Parker Skip Hire on</h2>
                    <h2><span className={wasteCss.contactPanelBold}>01294 463 597</span> or <span className={wasteCss.contactPanelBold}>07770 563 078</span></h2>
            </div>
        </div>
    );
}