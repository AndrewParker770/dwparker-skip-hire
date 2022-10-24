import './css/navbar.css'
import phoneIcon from './media/phone.png'
import icon from './media/icon.svg'

function Navbar() {
  const phone_number = "01294 463 597";
  const email = "info@dwparkerskiphireayrshire.co.uk";

  return (
    <div className="navbar-body">
      
      <div className="drop-down">
        <div className="bars">
          <div className="bar-1 bar">

          </div>
          <div className="bar-2 bar">

          </div>
          <div className="bar-3 bar">

          </div>
        </div>
      </div>

      <div className="title-container">
        <div className="title">
          <p id="primary-title">D. W Parker</p>
          <p id="secondary-title">Skip Hire</p>
        </div>
        <img className="title-icon" src={icon} alt="logo of DWP"/>
      </div>

      <div className="phone-div">
        <p><a href="tel:{phone_number}"><img className="phone-icon" src={phoneIcon} alt="icon of a phone"/></a></p>
        <div className="contact-numbers">
          <ul>
            <li id="contact-pointer"><a href="tel:{phone_number}"> {phone_number}</a></li>
            <li id="contact-pointer"><a href="mailto:{email}"> {email}</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Navbar


