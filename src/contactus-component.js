import React from 'react';

import { Col } from 'react-bootstrap';

import MapContainer from './map-component';
import { Telephone,
         Phone } from 'react-bootstrap-icons';

import './styles/contactusheader.scss';

export default function ContactUs() {
    return(
        <Col>
          <Col>
            <ContactUsHeader />
          </Col>
          <Col>
           <MapContainer />
          </Col>
          <Col>
            <ContactUsField />
          </Col>
        </Col>
    )
}

function ContactUsHeader() {
   return(
      <Col>
       <div id='contactusheader-container'>
         <div id='contactusheader-dpcontainer'>
            <img  id='contactusheaderdp' 
                  src='/images/excavator.jpg'/>
         </div>
         <div id='contactusheader-yellowbackground'>
            <h1 id='contactusheader'>
              Contact Us
            </h1>
            <p id='gotaconcern'>GOT A QUESTION OR CONCERN? GET IN TOUCH.</p>
         </div>
        
       </div>
      </Col>

   )
}

function ContactUsField() {
  return (
    <Col id='contactusfield-container'>

      <Col lg={6} md={6} xs={12}
           id='fieldscontainer1'>
         <h1 className='contactus-header contactus-headerl1'>HIRE US TODAY</h1>
         <p className='contactus-header contactus-headerl1'>NO PROJECT IS TOO SMALL FOR RENOVATION</p>
         <input type='text' 
               placeholder='Your name'
               className='contactus-field'/><br/>
         <input type='text' 
               placeholder='Your E-mail'
               className='contactus-field'/><br/>
         <input type='text'
               placeholder='Subject'
               className='contactus-field'/><br/>
         <textarea row='12'
                  col='12'
                  placeholder='Your message'
                  className='contactus-field contactusmessage'/><br/>
         <button id='send-message'>Send Message</button>
      </Col>

      <Col lg={6} md={6} id='fieldscontainer2'>
         <h1 className='contactus-header'>NEED HELP?</h1>
         <p className='contactus-def'>
           I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing contact@your-website.com elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
         </p>
         <h1 className='contactus-header' style={{marginTop: '15%'}}>24/7 CUSTOMER SUPPORT</h1>
         <p className='contactus-def'>
         I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing contact@your-website.com elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
         </p>
         <h3 className='contactus-header' style={{marginTop: '15%'}}>AVAILABLE 24 HOURS A DAY</h3>
         <Col>
           <Telephone /><span className='contactus-def cpn'>(088) 327 4522</span>
         </Col>
         <Col>
          <Phone /><span className='contactus-def cpn'>+639551155071</span>
         </Col>
      </Col>
    </Col>
  )
}

