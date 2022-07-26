import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './nav-bar.styles.css';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setSearch } from '../../store/search.slice'; 
import { useNavigate } from 'react-router-dom';

const TopNav = () =>{

    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log('search : ' + event.target.elements.search.value)
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            event.preventDefault();
            dispatch(setSearch({searchType:'search', searchField:event.target.elements.search.value}))
            //setSearch(event.target.elements.search.value,'search');
            navigate('/list');
        }
        
      };

      const setSearchProps =(  sField, sType) => {
        dispatch(setSearch({searchField:sField,searchType:sType}))
        navigate('/list');
      }

    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const ingredients = ['Gin','Vodka','Whiskey','Rum','Tequila','Brandy','Coconut','Lime','Soda','Tonic',];
    
    return (
        <Navbar sticky='top'  expand="lg" variant='dark' className=' p-3 deep-red'>
          <Container>
          
            <Navbar.Brand href='/'><FontAwesomeIcon icon={faMartiniGlassCitrus} size='lg' className='mr-1'/> Thirsty</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Cocktails A-Z" id="basic-nav-dropdown" className='scrollable-max'>
                <Row lg = {1} md={2} sm={3} xs={4}>
                {letters.map((ltr,k) => (
            
                    <Col key={k}><NavDropdown.Item key={ltr+k}  onClick={() => setSearchProps(ltr,'letter')}>{ltr.toUpperCase()}</NavDropdown.Item></Col>
                ))}
                    </Row>
                </NavDropdown>
                <NavDropdown title="Cocktails By Ingredient" id="basic-nav-dropdown" className='scrollable-max'>
                <Row lg = {2} md={2} sm={2} xs={2}>
                    
                {ingredients.map((ltr,k) => (
                    
                    <Col key={ltr}><NavDropdown.Item key={ltr+k}  onClick={() => setSearchProps(ltr.toLocaleLowerCase(),'ingredient')}>{ltr}</NavDropdown.Item></Col>
                ))}
                  
                  </Row>
                </NavDropdown>
              </Nav>
              <Form className="d-flex"  onSubmit={handleSubmit}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    name='search'
                  />
                  <Button type='submit' variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default TopNav;