const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_KEY);

function Contact() {
  return (
    <h1>Contact</h1>
  );
}

export default Contact


