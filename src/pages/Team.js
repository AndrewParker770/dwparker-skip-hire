import teamCss from '../css/team.module.css';

import icon from '../media/icon.svg';

export default function Team(){
    
    return(
        <div>
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