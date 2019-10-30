import React, { Component } from 'react';
import './contactus.css';
import '../global.css';


class ContactUs extends Component {
    render() {
        return (
            <div className="contact-us big-font">
            <h2 className=' contact-h2 big-font'>Contact Us</h2>
            <h3 className=' contact-h3 big-font'>Cavan Shem, CEO - cavan.shem@acmetools.tv </h3>
            <h3 className=' contact-h3 big-font'>Ilan Rackover, CTO - ilan.rackover@acmetools.tv</h3>
            <h3 className=' contact-h4 big-font'>Feedback makes out products great!</h3>
            </div>
        );
    }
}

export default ContactUs;