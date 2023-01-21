import React, { useState,
                useEffect } from 'react';

import { Col } from 'react-bootstrap';

import './styles/portfolio.scss';

export default function Portfolio() {

   const [selected, loadSelected] = useState('All');

    return (
      <Col>

        <Col>
         <PortfolioHeader />
        </Col>

        <Col>
         <PortfolioHighLight selected={selected}
                             loadSelected={loadSelected}/>
        </Col>
        
      </Col>
    )
}

function PortfolioHeader() {
    return(
       <Col>
        <div id='portfolioheader-container'>
          <div id='portfolioheader-dpcontainer'>
             <img  id='portfolioheaderdp' 
                   src='/images/excavator.jpg'/>
          </div>
          <div id='portfolioheader-yellowbackground'>
             <h1 id='portfolioheader'>
               PORTFOLIO
             </h1>
             <p id='gotaconcern'>WE ARE A TEAM OF HIGHLY SKILLED PROFESSIONALS</p>
          </div>
         
        </div>
       </Col>
 
    )
}


function PortfolioHighLight(props) {

  let project;
  if ( props.selected === 'All' ) {
      project = <All />
  } 
  if ( props.selected === 'Commercial' ) {
      project = <Commercial />
} 
if ( props.selected === 'Construction' ) {
      project = <Contruction />
} 
  return(
      <Col style={{padding: '100px 0px 100px 0px'}}>
        <Col>
         <Categories  loadSelected={props.loadSelected}/>
        </Col>
        <Col id='projectcontainer'>
         {project}
        </Col>
      </Col>
  )
}

function Categories(props) {
    return (
        <Col id='categories-container'>
          <Col id='encapsulate-categories'>
           <Col lg={1}>
             <p className='category' onClick={()=> {props.loadSelected((slct)=> slct = 'All')}}>All</p>
           </Col>
           <Col>
             <p className='category' onClick={()=> {props.loadSelected((slct)=> slct = 'Commercial')}}>Commercial</p>
           </Col>
           <Col>
             <p className='category'>Landscaping</p>
           </Col>
           <Col lg={3}>
             <p className='category' onClick={()=> {props.loadSelected((slct)=> slct = 'Construction')}}>New Construction</p>
           </Col>
           <Col>
             <p className='category'>Residential</p>
           </Col>
          </Col>
        </Col>
    )
}

function All() {

    useEffect(()=> {
        const dps = document.getElementsByClassName('underprojectdp-all');

        for ( let images = 0; images < dps.length; images++) {
          dps[images].style.transform = "scale(1, 1)";
        }
    }, [])
    
    const array = ['./images/samsungfwdp1.jpg', './images/lbcfwdp1.jpg', './images/interiordp.jpg'];
    
    return(
        <Col className='underproject-container'>
          {
          array.map((data, idx)=> {
              return <Col lg={4} key={idx}>
                        <img className='underprojectdp-all' 
                             src={data}/>
                     </Col>
           })
         }
        </Col>

    )
}

function Commercial() {

    useEffect(()=> {

        const dps = document.getElementsByClassName('underprojectdp-commercial');

        for ( let images = 0; images < dps.length; images++) {
          dps[images].style.transform = "scale(1, 1)";
        }

      }, [])
 
    const array = ['./images/samsungfwdp1.jpg', './images/lbcfwdp1.jpg'];

    return(
      <Col className='underproject-container'>
        {
          array.map((data, idx)=> {
              return <Col lg={4} key={idx}>
                        <img className='underprojectdp-commercial' 
                             src={data}/>
                     </Col>
          })
        }
      </Col>
    )
}

function Contruction() {

    useEffect(()=> {

        const dps = document.getElementsByClassName('underprojectdp-construction');

        for ( let images = 0; images < dps.length; images++) {
          dps[images].style.transform = "scale(1, 1)";
        }

      }, [])
 
    const array = ['./images/contruction.jpg'];

    return(
      <Col className='underproject-container'>
        {
          array.map((data, idx)=> {
              return <Col lg={4} key={idx}>
                        <img className='underprojectdp-construction' 
                             src={data}/>
                     </Col>
          })
        }
      </Col>
    )
}
