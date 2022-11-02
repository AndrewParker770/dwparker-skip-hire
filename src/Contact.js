import React, { useState, useRef } from 'react';

import icon from './media/icon.svg'

import './css/contact.css';

function Contact() {
  const freshEmail = {'name': '', 'email': '', 'phone': '', 'address': '', 'onRoad': '', 'message': ''}
  const [email, setEmail] = useState(freshEmail);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const roadRef = useRef();
  const addressRef = useRef();
  const msgRef = useRef();

  const refs = [nameRef, emailRef, phoneRef, roadRef, addressRef, msgRef];


  function sendEmail(e)
  {
    e.preventDefault();
    //const submittion_text = document.getElementById('submittion-indicator');

    refs.forEach((elem) => elem.current.value = "");
    setEmail(freshEmail);
  }

  return (
    <div className="contact-div">
      <h1>Contact Us:</h1>
      <div>
        <p>{email.address}</p>
      </div>
      <form className='form-layout' onSubmit={(e) => sendEmail(e)}>
        <div className="overflow-form-div">
          <input ref={nameRef} className="form-element overflow-form-element" placeholder='Name *' type="text" onChange={(e) => setEmail({...email, 'name': e.target.value})} required />
          <input ref={emailRef} className="form-element overflow-form-element" placeholder='E-mail *' type="email" onChange={(e) => setEmail({...email, 'email': e.target.value})} required />
        </div>
        <div className="overflow-form-div">
          <input ref={phoneRef} className="form-element overflow-form-element" placeholder='Phone Number *' type="tel" onChange={(e) => setEmail({...email, 'phone': e.target.value})} required />
          <input ref={roadRef} className="form-element overflow-form-element" placeholder='Will the skip have to be on the road? *' type="text" onChange={(e) => setEmail({...email, 'onRoad': e.target.value})} required />
        </div>
        <textarea ref={addressRef} className="form-element message-form-element" placeholder='Address *' type="text" onChange={(e) => setEmail({...email, 'address': e.target.value})} required />
        <textarea ref={msgRef} className="form-element message-form-element" placeholder='Message *' type="text" onChange={(e) => setEmail({...email, 'message': e.target.value})} required />
        <button type='submit'>Submit</button>
      </form>
      <h2 id='submittion-indicator'>E-mail Sent</h2>
      <img className='icon-style' src={icon} alt="logo of DWP"/>
    </div>
  );
}

export default Contact