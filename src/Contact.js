import emailjs from '@emailjs/browser';

import React, { useRef } from 'react';

import icon from './media/icon.svg'
import './css/contact.css';

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
    <div className="contact-div">
      <h1>Contact Us:</h1>
      <form ref={form} className='form-layout' onSubmit={sendEmail}>
        <div className="overflow-form-div">
          <input name="customer_name" className="form-element overflow-form-element" placeholder='Name *' type="text" required />
          <input name="customer_email" className="form-element overflow-form-element" placeholder='E-mail *' type="email" required />
        </div>
        <div className="overflow-form-div">
          <input name="customer_phone_number" className="form-element overflow-form-element" placeholder='Phone Number *' type="tel" required />
          <input name="on_road" className="form-element overflow-form-element" placeholder='Will the skip have to be on the road? *' type="text" required />
        </div>
        <textarea name="customer_address" className="form-element message-form-element" placeholder='Address *' type="text" required />
        <textarea name="customer_message" className="form-element message-form-element" placeholder='Message *' type="text" required />
        <button type='submit'>Submit</button>
      </form>
      <h2 id='submittion-indicator'>E-mail Sent</h2>
      <img className='icon-style' src={icon} alt="logo of DWP"/>
    </div>
  );
}

export default Contact