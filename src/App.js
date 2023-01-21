import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import ContactHeader from './contactheader-component';
import Nav from './nav-component';
import LandingPage from './landingpage-component';
import ContactUs from './contactus-component';
import WeCanHelp from './wecanhelp-component';
import Footer from './footer-component';
import AllRightsReserved from './allrightsreserved-component';
import Portfolio from './portfolio-component';
import Services from './services-component';

import { Col, Accordion } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import './styles/app.scss';

function App() {

  const [mobileNavContent, queryMobileNavContent] = useState('0vh');

  return (
    <Container id='app' fluid className='p-0'>

      <ContactHeader />

      <Nav queryMobileNavContent={queryMobileNavContent}
           mobileNavContent={mobileNavContent}/>
        <img id='logo' src='./images/logo.png'/>
      <Col id='mobilenav-contentcontainer'
          style={{height: mobileNavContent, width: '100%'}}>
        <Col className='mobilenavlinkcontainer'>
          <Link to='/home' 
                className='mobilenavlink'>Home</Link>
        </Col>
        <Col className='mobilenavlinkcontainer'>
           <p className="navmenu"
              onClick={() => alert("My Account, Shopping Cart, Checkout service's currently unavailable.")}>
            Shop
          </p>
          </Col>
        <Col className='mobilenavlinkcontainer'>
            <Link to='/services'
              className='mobilenavlink'>Services</Link>
        </Col>
        <Col className='mobilenavlinkcontainer'>
            <Link to='/portfolio'
               className='mobilenavlink'>Portolio</Link>
        </Col>
        <Col className='mobilenavlinkcontainer'>
            <p to='/testimonials' 
               className='mobilenavlink'>Testimonials</p>
        </Col>
        <Col className='mobilenavlinkcontainer'>
           <p>Latest News</p>
        </Col>
        <Col className='mobilenavlinkcontainer'>
            <Link to='/contactus'
           className='mobilenavlink'>Contact Us</Link>
        </Col>
      </Col>

      <Routes>
        <Route path='/'
             element={<LandingPage queryMobileNavContent={queryMobileNavContent}
                                   mobileNavContent={mobileNavContent}/>}
             exact>
        </Route>
        <Route path='/contactus'
               element={<ContactUs />}
               exact>
        </Route>
        <Route path='/portfolio'
               element={<Portfolio />}
               exact>
        </Route>
        <Route path='/services'
               element={<Services />}
               exact>
        </Route>
      </Routes>

      <WeCanHelp />
      <Footer />
      <AllRightsReserved />

   </Container>
  );
}

export default App;
