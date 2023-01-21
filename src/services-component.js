import React from 'react';

import { Col } from 'react-bootstrap';

import './styles/services.scss';



export default function Services(props) {
  return(
    <Col>
      <Col>
        <ServicesHeader />
      </Col>
     <Col id='ourservices-container'>
        
           <h1 id='ourservices'>OUR SERVICES</h1>
           <p id='yearsofexperience'>YEARS OF EXPERIENCE</p>
       
       <Col id='services-servicesmaincontainer'>
           <Col lg={4} md={4} xs={4} className='service-container'>
              <Col>
                <img className='servicesdp'
                    src='./images/helmet.png'/>
              </Col>
            <Col>
               <h2 className='services-header'>CONSTRUCTION</h2>
               <p className='services-def'>No project is too large for us to manage.</p>
            </Col>
           </Col>
        <Col lg={4} md={4} xs={4} className='service-container'>
        <Col>
          <img className='servicesdp'
               src='./images/model.png'/>
        </Col>
        <Col>
          <h2 className='services-header'>STRUCTURAL</h2>
          <p  className='services-def'>We can help with projects large and small! From redential to offices or even pools!</p>
        </Col>
        </Col>
        <Col lg={4} md={4} xs={4} className='service-container'>
        <Col>
           <img className='servicesdp'
              src='./images/estimate.png'/>
        </Col>
        <Col>
           <h2 className='services-header'>DESIGN AND ESTIMATE</h2> 
           <p className='services-def'>Handle your metal works, steel, plumbing, and interior and exterior finishing works</p>
        </Col>
        </Col>
        </Col>
     </Col>

     </Col>
  )
 }

 function ServicesHeader() {
  return(
     <Col>
      <div id='portfolioheader-container'>
        <div id='portfolioheader-dpcontainer'>
           <img  id='portfolioheaderdp' 
                 src='/images/excavator.jpg'/>
        </div>
        <div id='portfolioheader-yellowbackground'>
           <h1 id='portfolioheader'>
             SERVICES
           </h1>
           <p id='gotaconcern'>WE ARE A TEAM OF HIGHLY SKILLED PROFESSIONALS</p>
        </div>
       
      </div>
     </Col>

  )
}