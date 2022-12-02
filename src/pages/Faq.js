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
                        <h4>What are your business hours?</h4>
                        <ul>
                            <li>Monday - Friday: 6am - 5pm</li>
                            <li>Saturday: 8am - 12pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={trash} loading="lazy" alt="bin icon"/>
                        <h4>What can be put in a skip?</h4>
                        <p>We take most household items, <span className={faqCss.bold}>except</span> fridge freezers, plaster board, tyres and gas bottles. We <span className={faqCss.bold}>can not</span> take hazardous materials, like asbestos.</p>
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
                        <p>We collect cash or cheque on delivery of the skip, or we take card payment over the phone. Our card machine takes most major cards.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img id={faqCss.iconHourGlass} className={faqCss.iconStyle} src={hourglass} loading="lazy" alt="hourglass icon"/>
                        <h4>How long can I have the skip?</h4>
                        <p>The price we quote is for a weeks hire, but a longer term hire can be arranged. Conversely, if you only need the skip for a few days we can pick it up if you give us a call once you're done. We also offer a wait and load service.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={calendar} loading="lazy" alt="calendar icon"/>
                        <h4>How much notice do you need to order a skip?</h4>
                        <p>We usually need just one days notice and, on occasion, we can deliver same day. During busier times, please leave 2-3 days notice.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={pie} loading="lazy" alt="pie chart icon"/>
                        <h4>If I only need the skip for one day is it cheaper?</h4>
                        <p>No, the price is still the same. As it is same amount of rubbish we need to process in the correct manner. We do however pride ourselves on helping you, the customer out as much as possible.  On request we can drop off and pick up the skip on the same day, we also offer a wait and load service.</p>
                    </div>
                    <div className={faqCss.question}>
                        <img className={faqCss.iconStyle} src={recycle} loading="lazy" alt="recycle icon"/>
                        <h4>What happens to my rubbish?</h4>
                        <p>After we collect your skip we bring it back to our waste transfer station located at our site in Ardrossan. We sort through your rubbish and recycle as much as possible.</p>
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