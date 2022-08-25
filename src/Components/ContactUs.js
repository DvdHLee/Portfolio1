import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_el86y8s', 'template_xzra4hd', form.current, 'Tm6Iprbt_C_bjR5MN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const submitted = () => {
        alert("Message Sent!");
    }

    return (
        <div className="contactus">
            <form ref={form} onSubmit={sendEmail}>
                <h2 className="contactustitle">Contact Me</h2>
                <div className="entrytype">
                    <input className="input" type="text" name="user_name" placeholder="Name"/>
                </div>
                <div className="entrytype">
                    <input className="input" type="email" name="user_email" placeholder="Email"/>
                </div>
                <div className="entrytype">
                    <textarea className="inputmessage" name="message" placeholder="Message"/>
                </div>
                <input className="submit" type="submit" value="SEND" onClick={submitted}/>
            </form>
        </div>
    );
};

export default ContactUs;