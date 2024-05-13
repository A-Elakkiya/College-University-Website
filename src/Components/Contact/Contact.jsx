import React from 'react';
import { useState } from 'react';
import './Contact.css';
import msg_icon from '../images/msg-icon.png'; 
import mail_icon from '../images/mail-icon.png'; 
import phone_icon from '../images/phone-icon.png'; 
import location_icon from '../images/location-icon.png'; 
import white_arrow from '../images/white-arrow.png'

const Contact = () => {
    // For sending entered messages to email
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2549e744-64cc-4bc5-b892-ddde6d1d0598");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
    return (
        <div className='contact'>
            <div className='left'>
                <h3>Send us a message<img src={msg_icon} alt="message" /></h3>
                <p>Feel free to reach out through contact form or find our contact infromation below . Your feedback, questions and suggestiona are important to us as we strive to provide exceptional service to our university community</p>
                <ul>
                    <li><img src={mail_icon} alt="mail" />Contact@gmail.com</li>
                    <li><img src={phone_icon} alt="phone" />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="location-icon" />77 Massachusetts Ave, Cambrideg<br /> MS 02139, United States</li>
                </ul>
            </div>
            <div className='right'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt='arrow' /></button>
                    <span>{result}</span>
                </form>

            </div>
        </div>
    )
}

export default Contact;