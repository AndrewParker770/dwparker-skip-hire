import faqCss from '../css/faq.module.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

import recycleColour from '../media/recycleColours.svg';

import alarm from '../media/alarm.svg';
import trash from '../media/trash.svg';
import map from '../media/map_pin.svg';
import calendar from '../media/calendar.svg';
import hourglass from '../media/hourglass.svg';
import recycle from '../media/recycle.svg';
import pie from '../media/pie_chart.svg';
import traffic from '../media/trafficCone.svg';
import hidden from '../media/hidden.svg';


function Faq(){
    return(
        <div className={faqCss.faqOuter}>
            <ScrollToTopOnMount/>
            <div className={faqCss.faqHeaderDiv}>
                <img className={faqCss.iconStyle} src={recycleColour} alt="logo of DWP"/>
                <h1>Frequently Asked Questions</h1>
                <p>See some common questions and answers below, or for more information call us at 01294 463597.</p>
            </div>
            <div className={faqCss.faqQuestionsDiv}>
                <div className={faqCss.questions}>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={alarm} loading="lazy" alt="alarm clock icon"/>
                        <h4>What time do you open and close?</h4>
                        <ul>
                            <li>Monday - Friday: 6am - 5pm</li>
                            <li>Saturday: 8am - 12pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={trash} loading="lazy" alt="bin icon"/>
                        <h4>What can be thrown away in a skip?</h4>
                        <p>We are able to process most everyday items, however <span className={faqCss.bold}>we can not take:</span> electrical appliances, plaster board, tyres, mattresses, large furniture items, compressed gas cylinders, chemicals, and hazardous materials, like asbestos, etc. If you are unsure contact our team for advice.</p>
                        <p>We do reserve the right to return these items to your property.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={map} loading="lazy" alt="map pin icon"/>
                        <h4>Where is your main office?</h4>
                        <ul>
                            <li>High Boydstone Farm,</li>
                            <li>Ardrossan,</li>
                            <li>KA22 8PL.</li>
                        </ul>
                    </div>
                    <div className={faqCss.question}>
                        <span>£</span>
                        <h4>What type of payment methods do you accept?</h4>
                        <p>We accept cash or cheques, or we can take credit card payments over the phone. Most major cards are accepted by our card reader. <span className={faqCss.bold}>Payment is required on delivery of the skip.</span></p>
                    </div>
                    <div className={faqCss.question}>
                        <img id={faqCss.iconHourGlass} className={faqCss.iconStyle} src={hourglass} loading="lazy" alt="hourglass icon"/>
                        <h4>For how long can rent a skip?</h4>
                        <p>The quoted price is for a week's rental, however a longer rental period may be arranged on request. If you only need the skip for a few days, please call us when its full so we can come uplift it. We also provide a wait and load service.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={calendar} loading="lazy" alt="calendar icon"/>
                        <h4>How much notice do you need to order a skip?</h4>
                        <p>Typically, we only require one day's notice, though occasionally we can deliver the same day. Please provide two to three days' notice at peak times.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={pie} loading="lazy" alt="pie chart icon"/>
                        <h4>If I only need the skip for one day is it cheaper?</h4>
                        <p>No, the cost will be the same as the amount of waste we must process is the same.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={recycle} loading="lazy" alt="recycle icon"/>
                        <h4>What happens to my rubbish?</h4>
                        <p>After we pick up your skip, we return it to our garbage transfer station at our main site in Ardrossan. We sort through your trash and attempt to recycle as much as we can.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={traffic} loading="lazy" alt="recycle icon"/>
                        <h4>What is a skip permit and do I need one?</h4>
                        <p>If a skip has to sit on council owned land then it needs a permit which carries an additional charge. If the skip can sit on private land, such as a garden or driveway, then no permit is needed.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={hidden} loading="lazy" alt="recycle icon"/>
                        <h4>Are there any hidden costs to hiring a skip?</h4>
                        <p>There are no hidden costs to our skip hire. Our quote is for a level full skip for a week's hire. Delivery and uplift are included.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Faq;