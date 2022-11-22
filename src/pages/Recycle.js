import recycleCss from '../css/recycle.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import icon from '../media/icon.svg';
import sandstone from '../images/sandstone.jpg';

export default function Recycle(){

    return(
        <div>
            <ScrollToTopOnMount/>
            <div className={recycleCss.headImageContainer}>
                 
            </div>
            <div className={recycleCss.headerContainer}>
                <div className={recycleCss.headerDiv}>
                    <img className={recycleCss.iconStyle} src={icon} alt="logo of DWP"/>
                    <h1>Recycled Materials</h1>
                    <p>At D.W Parker Skip Hire, we offer recycled aggregates to all customer, delivering throughout Ayrshire including Ardrossan, Irvine, Prestwick, Ayr, Kilmarnock and all in between.</p>
                </div>
            </div>
            <div className={recycleCss.introductionDiv}>
                <h2>Recycled materials for your home</h2>
                <p>At D.W Parker Skip Hire we aim to recycle the majority of the waste we manage. As a result of the waste we recycle we produce and supply many by-products. These are purchased and used by many in Ayrshire for domestic, garden and business use. We supply and sell our recycled products by the tonne for domestic, garden and business use. Our products are perfect for relaying lawns, building borders and remedial garden work. We can deliver all our products to your property in Ayrshire.</p>
            </div>
            <div className={recycleCss.outerPanelDiv}>
                <div className={recycleCss.panelDiv}>
                    <div className={recycleCss.panel}>
                        <div className={recycleCss.panelImg}>
                            
                        </div>  
                        <div className={recycleCss.panelText} id={recycleCss.panel1}>
                            <h3>We supply:</h3>
                            <p>Top soil and quarry aggregate, ideal for use in your garden or for commercial landscaping businesses.</p>
                            <ul>
                                <li>Soil</li>
                                <li>Whin dust</li>
                                <li>Type 1</li>
                                <li>Sandstone</li>
                                <li>Tar plannings</li>
                                <li>Stone material</li>
                                <li>Hard core chips</li>
                            </ul>
                        </div>
                    </div>
                    <div className={recycleCss.panel}>
                        <div className={recycleCss.panelImg}>

                        </div>  
                        <div className={recycleCss.panelText} id={recycleCss.panel2}>
                            <h3>Environmentally friendly disposal for your garden waste</h3>
                            <p>Giving your garden a makeover? We specialise in the safe, environmentally friendly disposal of garden waste. We can collect a variety of waste in Ayrshire and expertly dispose of it for you at highly competitive rates.</p>
                        </div>
                    </div>
                    <div className={recycleCss.panel} id={recycleCss.panel3}>
                        <div className={recycleCss.panelImg}>

                        </div>  
                        <div className={recycleCss.panelText}>
                            <h3>Recycled materials</h3>
                            <p>At our site located in Ardrossan,  we supply a range of aggregates for household and industrial needs.  We offer competitive prices that are hard to beat elsewhere.  Offering a local delivery service or you can come and collect it yourself from our yard.  To find out more on how we can help you, give us a call.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={recycleCss.materialDiv}>
                <div className={recycleCss.materialElem}>
                    <div className={recycleCss.materialTextbox}>
                        <h3>Soil</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                    <div className={recycleCss.materialTextbox}>
                        <h3>Whin Dust</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                    <div className={recycleCss.materialTextbox}>
                        <h3>Type 1</h3>
                    </div>
                </div>
                <div className={recycleCss.materialElem}>
                    <img src={sandstone} id={recycleCss.materialCover} alt="sandstone"/>
                    <div className={recycleCss.materialTextbox}>
                        <h3>Sandstone</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
