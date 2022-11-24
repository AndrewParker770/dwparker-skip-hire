import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import React, { useRef, useState} from 'react';

import icon from './media/icon.svg'
import alert from './media/alert.svg'
import check from './media/check.svg'

import contactCSS from'./css/contact.module.css';

function Contact() {

  const phone_number = "01294 463 597";
  const email = "info@dwparkerskiphire.co.uk";

  const form = useRef();
  const captchaRef = useRef();

  const [disabled, setDisabled] = useState(true);
  const [formState, setFormState] = useState("unset");

  function sendEmail(e)
  {
    e.preventDefault();

    setFormState("waiting")

    if(form.current["g-recaptcha-response"] === null){
      setFormState("denied");
    }else{
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          if(result.text === "OK"){
            setFormState("accepted");
          }else{
            setFormState("denied");
          }
      }, (error) => {
        setFormState("denied");
      });
    
     form.current.reset();
    }
  }

  function handleChange(){
    if (captchaRef.current.getValue() === ''){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  }
  
  return (
    <div className={contactCSS.contactDiv}>
      <form id={contactCSS.formID} ref={form} className={formState === "unset" ? `${contactCSS.formLayout}` : `${contactCSS.formLayout} ${contactCSS.invisible}`} onSubmit={sendEmail}>
        <h1>Contact Us:</h1>
        <div className={contactCSS.overflowFormDiv}>
          <input name="customer_name" className={`${contactCSS.formElement} ${contactCSS.overflowFormElement}`} placeholder='Name *' type="text" required />
          <input name="customer_email" className={`${contactCSS.formElement} ${contactCSS.overflowFormElement}`} placeholder='E-mail *' type="email" required />
        </div>
        <div className={contactCSS.overflowFormDiv}>
          <input name="customer_phone_number" className={`${contactCSS.formElement} ${contactCSS.overflowFormElement}`} placeholder='Phone Number *' type="tel" required />
          <input name="on_road" className={`${contactCSS.formElement} ${contactCSS.overflowFormElement}`} placeholder='Will the skip have to be on the road? *' type="text" required />
        </div>
        <textarea name="customer_address" className={`${contactCSS.formElement} ${contactCSS.messageFormElement}`} placeholder='Address *' type="text" required />
        <textarea name="customer_message" className={`${contactCSS.formElement} ${contactCSS.messageFormElement}`} placeholder='Message *' type="text" required />
        <button type='submit' className={disabled ? `${contactCSS.disabledButton}`: {cursor: "pointer"}} disabled={disabled}>Submit</button>
        <p className={contactCSS.formPara}>Plase validate ReCAPTCHA below before form submission!</p>
        <ReCAPTCHA ref={captchaRef} name="g-recaptcha-response" sitekey={process.env.REACT_APP_RECAPTCHA_SITE} className={contactCSS.ReCAPTCHAElem} onChange={handleChange}/>
      </form>
      <div className={contactCSS.symbolContainer}>
        <div id={contactCSS.warmDiv} className={formState === "denied" ? `${contactCSS.circleDiv}` : `${contactCSS.invisible}`}>
          <h1>Warning: Unable to send Form</h1>
          <div className={contactCSS.symbolCircle}>
            <img className={formState === "denied" ? `${contactCSS.warnSymbol} ${contactCSS.visibleSymbol}` : `${contactCSS.warnSymbol}`} src={alert} alt="message not accepted symbol"/>
          </div>
          <p>Your message was unable to be sent to our team. Please contact us at: <a className={contactCSS.warnLink} href="tel:{phone_number}"> {phone_number}</a> or <a className={contactCSS.warnLink} href="mailto:{email}"> {email}</a>.</p>
        </div>

        <div id={contactCSS.accecptDiv} className={formState === "accepted" ? `${contactCSS.circleDiv}` : `${contactCSS.invisible}`}>
          <h1>Form Accepted!</h1>
          <div id={contactCSS.acceptCircle} className={contactCSS.symbolCircle}>
            <img className={formState === "accepted" ? `${contactCSS.acceptSymbol} ${contactCSS.visibleSymbol}` : `${contactCSS.acceptSymbol}`} src={check} alt="message sent symbol"/>
          </div>
          <p>A member of our team will contact you as soon as they are able. Thank you.</p>
        </div>
        <div className={formState === "waiting" ? `${contactCSS.outerWaiting}` : `${contactCSS.invisible}`}>
          <h1>Processing Form</h1>
          <div className={`${contactCSS.waitingCircle}`}/>
        </div>
      </div>
      <img className={contactCSS.iconStyle} src={icon} alt="logo of DWP"/>
    </div>
  );
}

export default Contact