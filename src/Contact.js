import emailjs from '@emailjs/browser';

import React, { useRef } from 'react';

import icon from './media/icon.svg'
import contactCSS from'./css/contact.module.css';

function Contact() {

  const form = useRef();

  function sendEmail(e)
  {
    e.preventDefault();
    
    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    

     form.current.reset();
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
        <button type='submit'>Submit</button>
      </form>
      <h2 id={contactCSS.submittionIndicator}>E-mail Sent</h2>
      <img className={contactCSS.iconStyle} src={icon} alt="logo of DWP"/>
    </div>
  );
}

export default Contact