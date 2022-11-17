import wasteCss from '../css/waste.module.css';

import icon from '../media/icon.svg';

export default function Waste(){

    return(
        <div>
            <div className={wasteCss.headImageContainer}>
                
            </div>
            <div className={wasteCss.headerContainer}>
                <div className={wasteCss.headerDiv}>
                    <img className={wasteCss.iconStyle} src={icon} alt="logo of DWP"/>
                    <h1>Efficient rubbish removal services</h1>
                    <p>Do you require rubbish removal services in Ayrshire? Contact the professionals from D.W Parker Skip Hire today for a free quote.</p>
                </div>
            </div>
            <div className={wasteCss.introductionDiv}>
                <h2>Expert waste management in Ayrshire</h2>
                <p>At D.W Parker Skip Hire we are SEPA registered and fully qualified for waste disposal in Ayrshire. We are licensed to collect all types of waste and safely and securely dispose of it. We can dispose of both domestic and commercial waste. We can collect waste from your property and transport it to our site where the majority of the waste is recycled. The rest of the waste is transported and disposed of in environmentally friendly landfill sites.</p>
                <p>We are licensed to safely dispose of non-hazardous waste in Ayrshire and specialise in property clearances. We are also authorised aggregate and soil haulage carriers for loads of anywhere between 1 and 20 tonnes.</p>
            </div>
            <div className={wasteCss.outerPanelDiv}>
                <div className={wasteCss.panelDiv}>
                    <div className={wasteCss.panel}>
                        <div className={wasteCss.panelImg}>
                            
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

                        </div>  
                        <div className={wasteCss.panelText} id={wasteCss.panel2}>
                            <h3>Putting you and the environment first</h3>
                            <p>At D.W Parker Skip Hire our main concerns are the environment, public safety and health.</p>
                            <p>Our experienced team are trained to dispose safely of all types of waste. If you have any queries or concerns or simply want advice on disposing of your waste, please do not hesitate to contact us.</p>
                        </div>
                    </div>
                    <div className={wasteCss.panel} id={wasteCss.panel3}>
                        <div className={wasteCss.panelImg}>

                        </div>  
                        <div className={wasteCss.panelText}>
                            <h3>What we offer</h3>
                            <p>At our facility in Ardrossan we aim to recycle as much as possible.  We take your rubbish and sort it out using manual labour and our mechanical picking stations.</p>
                        </div>
                    </div>
                    <div className={wasteCss.panel} id={wasteCss.panel4}>
                        <div className={wasteCss.panelImg}>

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