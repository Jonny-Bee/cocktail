
import React  from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.style.css'
const Home = () =>{
    return(
        <div >
            <div className='banner'>
            < Row lg = {2} md={2} sm={1} xs={1} className='max-w800'>
            <Col><h1 className='banner-text'>Fresh drink ideas just a click away!</h1></Col>
            </Row>
            </div>
           
        </div>
        
       
    )
}

export default Home;