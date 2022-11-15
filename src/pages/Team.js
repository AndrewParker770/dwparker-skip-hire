import teamCss from '../css/team.module.css';

import icon from '../media/icon.svg';

import image3 from '../images/photo3.jpg';

export default function Team(){

    //<img className={teamCss.headImage} src={image3} alt="logo of DWP"/>
    return(
        <div>
            <div className={teamCss.headImageContainer}>
                 <img className={teamCss.headImage} src={image3} alt="logo of DWP"/>
            </div>
            <div className={teamCss.headerContainer}>
                <div className={teamCss.headerDiv}>
                    <img className={teamCss.iconStyle} src={icon} alt="logo of DWP"/>
                    <h1>Our Team</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, suscipit quae voluptas quas, explicabo laudantium, possimus voluptates maiores provident cum reprehenderit qui? Dicta eos, vero adipisci ratione soluta repudiandae voluptas?</p>
                </div>
            </div>
        </div>
    );
}