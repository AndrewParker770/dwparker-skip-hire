import recycleCss from '../css/recycle.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import recycleColour from '../media/recycleColours.svg';
import individualLorry from '../images/individualLorry.jpg';

import sandstone from '../images/sandstone.jpg';
import brick from '../images/crushedBrick.jpg';
import tarPile from '../images/tarPlaningsPile.jpg';
import typeOne from '../images/typeOne.jpg';
import whinDust from '../images/whinDust.jpg';
import soil from '../images/soil.jpg';

import tarPlanings from '../images/tarPlanings.jpg';
import tipperDriver from '../images/tipperDriver.jpg';
import environment from '../images/environment.jpg';

import { Blurhash} from "react-blurhash";

export default function Recycle(){

    return(
        <div>
            <ScrollToTopOnMount/>
            <div className={recycleCss.headImageContainer}>
                <Blurhash
                    hash="LfEpD{n#s,of.AWBaej[SkWYWBWB"
                    width
                    height
                    id={recycleCss.hashImg}
                    className={recycleCss.headImage}
                />
                <img loading="lazy" src={individualLorry} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible} ${recycleCss.headImage}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="new skips arriving" />
            </div>
            <div className={recycleCss.headerContainer}>
                <div className={recycleCss.headerDiv}>
                    <img className={recycleCss.iconStyle} src={recycleColour} alt="logo of DWP"/>
                    <h1>Recycled Materials</h1>
                    <p>As a result of the waste we recycle we are able to supply a vast array of by-products perfect for relaying lawns, building borders and garden work. These are sold by the tonne and delivered straight to your property for domestic and commercial uses.</p>
                </div>
            </div>
            <div className={recycleCss.outerPanelDiv}>
                <div className={recycleCss.panelDiv}>
                    <div className={recycleCss.panel}>
                        <div className={recycleCss.panelImg}>
                            <Blurhash
                                hash="LWHo5ro#j?oI9GRjRjWB~ot6M{Rk"
                                width
                                height
                                id={recycleCss.hashImg}
                            />
                            <img loading="lazy" src={tipperDriver} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="tipper driver" />
                        </div>  
                        <div className={recycleCss.panelText} id={recycleCss.panel1}>
                            <h3>What We Supply:</h3>
                            <p>Ideal for use in your garden or for use by commercial landscaping businesses:</p>
                            <ul>
                                <li>Soil</li>
                                <li>Whin dust</li>
                                <li>Type 1</li>
                                <li>Sandstone</li>
                                <li>Tar plannings</li>
                                <li>Stone material</li>
                                <li>Hard core chips</li>
                                <li>Sized aggregates</li>
                                <li>Drainage stone</li>
                                <li>Top soil</li>
                            </ul>
                        </div>
                    </div>
                    <div className={recycleCss.panel}>
                        <div className={recycleCss.panelImg}>
                            <Blurhash
                                hash="LLE.%=9bE4xY%%oIbHWC03-T$|R-"
                                width
                                height
                                id={recycleCss.hashImg}
                            />
                            <img loading="lazy" src={environment} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="sunrise over D.W.Parker Skip Hire" />
                        </div>  
                        <div className={recycleCss.panelText} id={recycleCss.panel2}>
                            <h3>Responsible Disposal Of Garden Waste</h3>
                            <p>We specialise in the safe, environmentally responsible disposal of garden waste at highly competitive rates.</p>
                        </div>
                    </div>
                    <div className={recycleCss.panel} id={recycleCss.panel3}>
                        <div className={recycleCss.panelImg}>
                            <Blurhash
                                hash="L+EpjLWAt7ozpMs:WCofNIo#axRj"
                                width
                                height
                                id={recycleCss.hashImg}
                            />
                            <img loading="lazy" src={tarPlanings} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="tar plannings being poursed into bin" />
                        </div>  
                        <div className={recycleCss.panelText}>
                            <h3>Recycled Materials</h3>
                            <p>At our site in Ardrossan, we supply a range of recycled materials for domestic and commercial requirements, all whilst offering competitive prices. We offer local delivery service or can organise collection from our site. Contact us to find out more about what we supply.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={recycleCss.materialDiv}>
                <div className={recycleCss.materialElem}>
                    <Blurhash
                        hash="LYBp;8?Z%LoI_4%Kt7jYp0RjWBWC"
                        width
                        height
                        id={recycleCss.hashImg}
                    />
                    <img loading="lazy" src={soil} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="soil" />
                    <div className={recycleCss.materialTextbox}>
                        <h3>Soil</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                <Blurhash
                        hash="L2E{kJ00-.?b?w%f-.xu4=~pIToe"
                        width
                        height
                        id={recycleCss.hashImg}
                    />
                    <img loading="lazy" src={whinDust} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="whin dust" />
                    <div className={recycleCss.materialTextbox}>
                        <h3>Whin Dust</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                    <Blurhash
                        hash="L5GSAU%M^*xs~p%KRjM|^*afadt7"
                        width
                        height
                        id={recycleCss.hashImg}
                    />
                    <img loading="lazy" src={typeOne} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="type 1 material" />
                    <div className={recycleCss.materialTextbox}>
                        <h3>Type 1</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                    <Blurhash
                        hash="L=HL-yWBWqkB.TWCoJa|tTj[f6a#"
                        width
                        height
                        id={recycleCss.hashImg}
                    />
                    <img loading="lazy" src={sandstone} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="sandstone" />
                    <div className={recycleCss.materialTextbox}>
                        <h3>Sandstone</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                    <Blurhash
                        hash="LDHU@2_3xus+~VnhV@t7RjWBRjj["
                        width
                        height
                        id={recycleCss.hashImg}
                    />
                    <img loading="lazy" src={brick} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="crushed brick" />
                    <div className={recycleCss.materialTextbox}>
                        <h3>Crushed Brick</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                    <Blurhash
                        hash="LkDv~JWBs,of_NaeoIoe-=t6oJoe"
                        width
                        height
                        id={recycleCss.hashImg}
                    />
                    <img loading="lazy" src={tarPile} className={`${recycleCss.infoImgCover} ${recycleCss.imgInvisible}`} onLoad={(e) => {e.target.classList.toggle(`${recycleCss.imgInvisible}`)}} alt="tar planings" />
                    <div className={recycleCss.materialTextbox}>
                        <h3>Tar Planings</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
