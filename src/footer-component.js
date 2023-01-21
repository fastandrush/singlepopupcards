import React from 'react';

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Facebook,
         Youtube } from 'react-bootstrap-icons';

import './styles/footer.scss';

export default function Footer() {
    return(
      <Col id='footer-container'>
        <Col id='footer-subcont'>
        <Col  lg={4} md={4} className='footerinfocontainer'>
         <h1 className='footer-header'>ADDRESS</h1>
         <p className='footer-information'>Blk 8, Lot 50, Gold City Balulang, Cagayan de Oro city, Philippines</p>
        </Col>
        <Col  lg={4} md={4}  className='footerinfocontainer'>
         <h1 className='footer-header'>PHONE</h1>
         <p className='footer-information'>(088) 327 4522 / +639551155071</p>
        </Col>
        <Col  lg={4} md={4}  className='footerinfocontainer'>
         <h1 className='footer-header'>EMAIL</h1>
         <p className='footer-information'>mc.gomezconstruction@gmail.com</p>
        </Col>
        </Col>
        <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
           <h1 className='footer-header'>FOLLOW US</h1>
           <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
         <a href='https://www.facebook.com/Mc.GomezConstructionOffical'><Facebook className='footer-fbicon'/></a>
         <Youtube className='footer-yticon'/>
          </Col>
        </Col>
      </Col>
    )
}