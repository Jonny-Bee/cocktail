import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMartiniGlass, faBeerMugEmpty} from '@fortawesome/free-solid-svg-icons';
import './home.style.css'
const Home = (props) =>{
    return(
        <div className='text-center fillScreen white-t'>
            <Container className='mt-5' >
           < Row lg = {1} md={1} sm={1} xs={1}>
           <Col><h1 className='mb-5'>Fresh Drink Ideas</h1></Col>
            <Col><FontAwesomeIcon icon={faMartiniGlass} size='lg' className='big-icon white-t'/></Col>
            <Col><h1>Just a tap away!</h1></Col>
            <Col><FontAwesomeIcon icon={faBeerMugEmpty} size='lg' className='big-icon white-t mt-5'/></Col>
           </Row>
           </Container>
           </div>
        
       
    )
}

export default Home;