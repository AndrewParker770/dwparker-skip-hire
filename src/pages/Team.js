import teamCss from '../css/team.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import icon from '../media/icon.svg';

import image3 from '../images/photo3.jpg';

export default function Team(){

    return(
        <div>
            <ScrollToTopOnMount/>
            <div className={teamCss.headImageContainer}>
                 <img className={teamCss.headImage} src={image3} loading="lazy" alt="lorry header image"/>
            </div>
            <div className={teamCss.headerContainer}>
                <div className={teamCss.headerDiv}>
                    <img className={teamCss.iconStyle} src={icon} alt="logo of DWP"/>
                    <h1>Meet Our Team</h1>
                </div>
            </div>
            <div className={teamCss.introductionDiv}>
                <p>We are more than just a skip hire company.  We are a family run business based in Ardrossan, that has 25 years experience allowing us to provide expert service to all our customers, old and new.</p>
                <p>At D.W Parker Skip Hire we work hard to allow us to give our customers the best service we can.  All our team members are experienced and reliable to help offer a service second to none.</p>
            </div>
            <div className={teamCss.outerPanelDiv}>
                <div className={teamCss.panelDiv}>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>
                            
                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>David Parker</h3>
                            <p>Mr. Parker is the founder and manager of the company.  Starting the business in 1995 with one lorry on his family farm.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>

                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Skip Lorry drivers</h3>
                            <p>Working with us we have 3 full time skip lorry drivers working hard to get your skips delivered to you.  With 2 part time drivers and 1 new member of the team learning.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>

                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Tipper drivers</h3>
                            <p>At Parkers we have 4 full time tipper drivers working.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>

                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Office staff</h3>
                            <p>Our office staff are always on hand to help and just a phone call away.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>

                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Yard Men</h3>
                            <p>Onsite working hard to sort through everything that come in and out our yard is our yards men.  Working hard to keep the well oiled machine going.</p>
                        </div>
                    </div>
                    <div className={teamCss.panel}>
                        <div className={teamCss.panelImg}>

                        </div>  
                        <div className={teamCss.panelText}>
                            <h3>Farm workers</h3>
                            <p>Our site is located beside the family farm, allowing us to use our other machinery to get jobs done effectively and efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}