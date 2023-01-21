import React, {useState} from 'react';
import { Col, 
         Carousel,
         Accordion } from 'react-bootstrap';

import { Facebook,
         Youtube } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import ContactHeader from './contactheader-component';
import Nav from './nav-component';
import Footer from './footer-component';
import AllrightsReserved from './allrightsreserved-component';
import WeCanHelp from './wecanhelp-component';


import './styles/landingpage.scss';


export default function LandingPage(props) {

    return(


        <Col id='landingpage'>
          
          <HeaderCarousel />
          <OurServices />
          <FeaturedWork />
         </Col>
    )
}

function HeaderCarousel() {
  return (
    <Col>
      <Carousel fade style={{width: '100%', height: '100%'}}>
       <Carousel.Item>
        <img
          className="constructionheaderimages"
          src="./images/residenceheaderimage.jpg"
          alt="First slide"
        />
       <Carousel.Caption>
         <h3 className='carouseldef'>Residential</h3>
         <p className='carouseldef'>A structural firm capable of rendering high-quality and cost efficient services that will become a reality</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
        className="constructionheaderimages constructionheaderimages2"
        src="./images/officeheaderimage.jpg"
        alt="Second slide"
      />
    <Carousel.Caption>
      <h3 className='carouseldef'>Interior and Exterios Work</h3>
      <p className='carouseldef'>We specialized also in interior / exterior finishing services and General Construction Works.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img
       className="constructionheaderimages constructionheaderimages2"
       src="./images/buildingheaderimage.jpg"
       alt="Third slide"
     />
    <Carousel.Caption>
      <h3 className='carouseldef'>Contructuctual</h3>
      <p className='carouseldef'>A construction company that focused on general and industrial engineering. </p>
   </Carousel.Caption>
  </Carousel.Item>
 </Carousel>
</Col>
  )
}

function OurServices() {
 return(
   <Col id='ourservices-container'>
       
          <h1 id='ourservices'>OUR SERVICES</h1>
          <p id='yearsofexperience'>YEARS OF EXPERIENCE</p>
      
    <Col id='services-servicesmaincontainer'>
        <Col xs={12} lg={4} md={4} className='service-container'>
        <Col>
           <img className='servicesdps'
                src='./images/helmet.png'/>
        </Col>
        <Col>
           <h2 className='services-header'>CONSTRUCTION</h2>
           <p className='services-def'>No project is too large for us to manage.</p>
        </Col>
       </Col>
       <Col lg={4} md={4}  xs={12} className='service-container'>
       <Col>
         <img className='servicesdps'
              src='./images/model.png'/>
       </Col>
       <Col>
         <h2 className='services-header'>STRUCTURAL</h2>
         <p  className='services-def'>We can help with projects large and small! From redential to offices or even pools!</p>
       </Col>
       </Col>
       <Col lg={4} md={4} xs={12} className='service-container'>
       <Col>
          <img className='servicesdps'
             src='./images/estimate.png'/>
       </Col>
       <Col>
          <h2 className='services-header'>DESIGN AND ESTIMATE</h2> 
          <p className='services-def'>Handle your metal works, steel, plumbing, and interior and exterior finishing works</p>
       </Col>
       </Col>
       </Col>
    </Col>
 )
}

function FeaturedWork() {

  const [selectedProject, getSelectedProject] = useState('Samsung franchise');

  const fwMouseOver = (e) => {
    let container = e.target.parentElement;
    let target = container.children[1];
    const query = target.children[0].innerText;

     target.style.left = '0%';

     getSelectedProject((proj)=> proj = query);

  }

  const fwMouseOut = (e) => {
    let container = e.target.parentElement;
    let target = container.children[1];

     target.style.left = '-100%';
  }

  const closeFwProjects = (e) => {
     const container = e.target.parentElement.parentElement;
     container.style.display = 'none';
  }

  const openFwProjects = (e) => {
    const container = document.querySelector('#projects-container');
    container.style.display = 'block';
 }

  return(
    <Col id='featuredwork'>

      <Col id='projects-container'>
        <Col id='projects-closebtncontainer'>
          <button id='projects-closebtn'
                  onClick={(e)=> closeFwProjects(e)}>x</button>
        </Col>
        <SelectedProject selectedProject={selectedProject}/>
      </Col>

      <h3 id='featuredwork-header'>FEATURED WORK</h3>
      <p id='wetakeprideinourwork'>WE TAKE PRIDE IN OUR WORK</p>

      <Col id='featuredwork-imagescontainer'>
      
        <Col className='fwolcontainer'>
          <img className='featuredworkdp' 
              src='./images/samsungdp.jpg'
              onMouseOver={(e)=> fwMouseOver(e)}/>
          <Col className='viewproject-container'
               onMouseLeave={(e)=> fwMouseOut(e)}>
            <p className='fw-header'>Samsung franchise</p>
            <p className='fw-vpheader'
               onClick={(e)=> openFwProjects(e)}>View Project</p>
          </Col>
        </Col>

        <Col className='fwolcontainer'>
          <img className='featuredworkdp'
               src='./images/lbcdp.jpg'
               onMouseOver={(e)=> fwMouseOver(e)}/>
          <Col className='viewproject-container'
               onMouseLeave={(e)=> fwMouseOut(e)}>
            <p className='fw-header'>LBC Branch</p>
            <p className='fw-vpheader'
               onClick={(e)=> openFwProjects(e)}>View Project</p>
          </Col>
        </Col>

        <Col className='fwolcontainer'>
          <img className='featuredworkdp'
             src='./images/interiordp.jpg'
             onMouseOver={(e)=> fwMouseOver(e)}/>
          <Col className='viewproject-container'
               onMouseLeave={(e)=> fwMouseOut(e)}>
            <p className='fw-header'>Finishing Interior Design</p>
            <p className='fw-vpheader'
               onClick={(e)=> openFwProjects(e)}>View Project</p>
          </Col>
        </Col>

      </Col>

      <Link to='/portfolio'
            id='viewportfolio'>View Portfolio</Link>

    </Col>
  )
}


function SelectedProject(props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

const samsungfranchise = ['./images/samsungfwdp1.jpg',
                            './images/samsungfwdp2.jpg',
                            './images/samsungfwdp3.jpg',
                            './images/samsungfwdp4.jpg',
                            './images/samsungfwdp5.jpg',
                            './images/samsungfwdp6.jpg',
                            './images/samsungfwdp7.jpg',
                            './images/samsungfwdp8.jpg',
                            './images/samsungfwdp9.jpg'];

const lbc = ['./images/lbcfwdp1.jpg',
             './images/lbcfwdp2.jpg',
             './images/lbcfwdp3.jpg',
             './images/lbcfwdp4.jpg',
             './images/lbcfwdp5.jpg',
             './images/lbcfwdp6.jpg',
             './images/lbcfwdp7.jpg',
             './images/lbcfwdp8.jpg',
             './images/lbcfwdp9.jpg',
             './images/lbcfwdp10.jpg',
             './images/lbcfwdp11.jpg',
             './images/lbcfwdp12.jpg'];

const interior = ['./images/interiorfwdp1.jpg',
                   './images/interiorfwdp2.jpg',
                   './images/interiorfwdp3.jpg',
                   './images/interiorfwdp4.jpg'
                  ];

  if ( props.selectedProject === 'Samsung franchise' ) {
  return (
    <Col className='carousel-container'>
      <Carousel className='carousel'
                activeIndex={index} 
                onSelect={handleSelect}>
         {
           samsungfranchise.map((imgdata, idx)=> {
             return <Carousel.Item key={idx}>
                       <img src={imgdata}
                            className='viewprojectimage'/>
                    </Carousel.Item>
           })
         }
      </Carousel>
  </Col>
  )
  }

  if ( props.selectedProject === 'LBC Branch' ) {
    return (
      <Col className='carousel-container'>
      <Carousel className='carousel'
                activeIndex={index} 
                onSelect={handleSelect}>
         {
           lbc.map((imgdata, idx)=> {
             return <Carousel.Item key={idx}>
                       <img src={imgdata}
                            className='viewprojectimage'/>
                    </Carousel.Item>
           })
         }
      </Carousel>
  </Col>
    )
    }

    if ( props.selectedProject === 'Finishing Interior Design' ) {
      return (
        <Col className='carousel-container'>
        <Carousel className='carousel'
                  activeIndex={index} 
                  onSelect={handleSelect}>
           {
             interior.map((imgdata, idx)=> {
               return <Carousel.Item key={idx}>
                         <img src={imgdata}
                              className='viewprojectimage'/>
                      </Carousel.Item>
             })
           }
        </Carousel>
    </Col>
      )
    }

}