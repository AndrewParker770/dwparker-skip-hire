import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import React, { useRef, useState} from 'react';

import icon from './media/icon.svg'
import contactCSS from'./css/contact.module.css';

function Contact() {

  const form = useRef();
  const captchaRef = useRef();

  const [disabled, setDisabled] = useState(true);

  function sendEmail(e)
  {
    e.preventDefault();

    //form.current.style.display = 'none';
    
    if(form.current["g-recaptcha-response"] === null){
      console.log(form.current["g-recaptcha-response"]);
    }else{
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          if(result.text === "OK"){console.log("Exact Match")}
      }, (error) => {
          console.log(error.text);
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
      <h1>Contact Us:</h1>
      <form ref={form} className={contactCSS.formLayout} onSubmit={sendEmail}>
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
        <button type='submit' style={disabled ? {color: "gray", cursor: "not-allowed"}: {cursor: "pointer"}} disabled={disabled}>Submit</button>
        <ReCAPTCHA ref={captchaRef} name="g-recaptcha-response" sitekey={process.env.REACT_APP_RECAPTCHA_SITE} className={contactCSS.ReCAPTCHAElem} onChange={handleChange}/>
      </form>
      <h2 id={contactCSS.submittionIndicator}>E-mail Sent</h2>
      <img className={contactCSS.iconStyle} src={icon} alt="logo of DWP"/>
    </div>
  );
}

export default Contact