import React, { useRef } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Navigation from './Components/TopNav';
import { contactConfig } from './content_option';
import Footer from './Components/Footer';
import emailjs from '@emailjs/browser';

function ContactUs() {

    const form = useRef()
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qrw7vg4', 'template_ytioym1', form.current, '6hH-zC7yfk63_9-vF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

  return (
    <>
    <div className="bg1">

    <Container className="yess">
        <Row className="title mb-5 mt-3">
            <Col lg='8'>
                <h1 className="display-4 mb-4">
                    Contact Us
                </h1>
            </Col>
        </Row>

        <Row className="sec_sp">
            <Col lg='5' className="mb-5">
                <h3 className="color_sec py-4">Get in touch</h3>
                <address>
                    <strong>Email: Kp.info@gmail.com</strong>
                    <br/>
                    <br/>
                    <p>
                        <strong>Phone: +65 928-153-0023</strong>
                    </p>
                </address>
                <p>{contactConfig.description}</p>
            </Col>
            <Col lg='7' className="d-flex align-items-center">
                <form ref={form} onSubmit={sendEmail} className="contact_form w-100">
                    <Row>
                        <Col lg='6' className="form-group">
                    <input 
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        />
                        </Col>
                        <Col lg='6' className="form-group">
                    <input 
                        className="form-control "
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        />
                        </Col>
                    </Row>
                    <br/>
                    <textarea className="form-control " id="message"
                    name="message"
                    placeholder="Message"
                    rows='5'>

                    </textarea>
                    <br/>
                    <Row>
                        <Col lg='12' className="form-group">
                            <button className="btn ac_btn" type="submit">Send</button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
    </div>
</>
  )
}



export default ContactUs
