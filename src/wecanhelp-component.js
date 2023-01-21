import React from 'react';

import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './styles/wecanhelp.scss';

export default function WeCanHelp() {
    return (
              <Col id='wecanhelpyoubuildyourproject'>
                 <Col id='wecanhelpyoubuildyourproject-subcontainer'>
                    <h1 className='wecanhelpyoucreateyourproject-header'>WE CAN HELP YOU CREATE YOUR PROJECT!</h1>
                    <p className='tellusaboutyourproject-header'>TELL US ABOUT YOUR PROJECT</p>
                    <Link to='/contactus' id='contactus-button'>Contact us</Link>
                 </Col>
              </Col>
           )
}