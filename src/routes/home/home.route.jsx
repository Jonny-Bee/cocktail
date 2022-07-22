import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMartiniGlass, faBeerMugEmpty, faChampagneGlasses} from '@fortawesome/free-solid-svg-icons';
import './home.style.css'
const Home = (props) =>{
    return(
        <div >
            <div className='banner'>
            < Row lg = {2} md={2} sm={1} xs={1} className='max-w800'>
            <Col><h1 className='banner-text'>Fresh drink ideas just a click away!</h1></Col>
            </Row>
            </div>
            <Container className='mt-5 text-center' >
           < Row lg = {3} md={3} sm={3} xs={3} className='max-w800'>
           
            <Col><FontAwesomeIcon icon={faMartiniGlass} size='lg' className='big-icon white-t'/></Col>
            <Col><FontAwesomeIcon icon={faBeerMugEmpty} size='lg' className='big-icon white-t'/></Col>
            <Col><FontAwesomeIcon icon={faChampagneGlasses} size='lg' className='big-icon white-t'/></Col>
           </Row>
           </Container>
           </div>
        
       
    )
}

export default Home;