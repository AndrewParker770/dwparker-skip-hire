
import skipsCss from '../css/skips.module.css';

import icon from '../media/icon.svg';

export default function Skips(){
    return(
        <div>
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
        </div>
    );
}