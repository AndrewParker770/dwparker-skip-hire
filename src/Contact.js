import React, { useState } from 'react';

import icon from './media/icon.svg'

import './css/contact.css';

function Contact() {
  const [email, setEmail] = useState({'name': '', 'email': '', 'phone': '', 'address': '', 'onRoad': '', 'message': ''});

  return (
    <div className="contact-div">
      <h1>Contact Us:</h1>
      <form className='form-layout'>
        <div className="overflow-form-div">
          <input className="form-element overflow-form-element" placeholder='Name *' type="text" onChange={(e) => setEmail({...email, 'name': e.target.value})} required />
          <input className="form-element overflow-form-element" placeholder='E-mail *' type="email" onChange={(e) => setEmail({...email, 'email': e.target.value})} required />
          <input className="form-element overflow-form-element" placeholder='Phone Number *' type="tel" onChange={(e) => setEmail({...email, 'phone': e.target.value})} required />
        </div>
        <input className="form-element" placeholder='Will the skip have to be on the road? *' type="text" onChange={(e) => setEmail({...email, 'onRoad': e.target.value})} required />
        <textarea className="form-element message-form-element" placeholder='Address *' type="text" onChange={(e) => setEmail({...email, 'address': e.target.value})} required />
        <textarea className="form-element message-form-element" placeholder='Message *' type="text" onChange={(e) => setEmail({...email, 'message': e.target.value})} required />
        <button>Submit</button>
      </form>
      <img className='icon-style' src={icon} alt="logo of DWP"/>
    </div>
  );
}

export default Contact

//const [email, setEmail] = useState({'name': '', 'email': '', 'phone': '', 'address': '', 'onRoad': '', 'message': ''});


//<div className="">
//      <p>{email}</p>
//      <form>
///        <input type="text" onChange={(e) => setEmail({...email, 'name': email.target.value})}/>
//      </form>
 //   </div>//
