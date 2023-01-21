import React from 'react';
import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Telephone, 
         Phone, 
         EnvelopePlus,
         Facebook,
         Youtube } from 'react-bootstrap-icons';

import './styles/contactheader.scss';

export default function ContactHeader() {
    return(
        <Col id='contactheader'>
           <Col xs={4} lg={2} md={3}>
             <Telephone  className='contactheader-icon contachheader-telephoneicon'/>
             <span className='contactheader-info'>(088) 327 4522</span>
           </Col>
           <Col lg={2} md={3} xs={3}>
             <Phone  className='contactheader-icon pn'/>
             <span className='contactheader-info'>+639551155071</span>
           </Col>
           <Col md={5} xs={6} style={{display: 'flex'}}>
             <EnvelopePlus className='contactheader-icon em'/>
             <span className='contactheader-info emn'>mc.gomezconstruction@gmail.com</span>
           </Col>
           <Col id='contactheader-iconscontainer'>
             <a href='https://www.facebook.com/Mc.GomezConstructionOffical/photos/pcb.266949918553404/266949518553444'>
                <Facebook className='contactheader-socialicons fb'/>
             </a>
             <Youtube className='contactheader-socialicons yt'/>
           </Col>
        </Col>
    )
}