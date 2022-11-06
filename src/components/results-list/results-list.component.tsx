import {  searchCockTailsByLetter, searchCockTailsByIngredient, searchCockTails, DrinkRecipe } from '../../IO/dataIO';
import { useState, useEffect } from 'react';
import React  from 'react';
import PreviewCard from '../previewcard/preview-card.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppSelector } from '../../store/hooks';


const ResultsList = () => {

    
    const [drinks, setDrinks] = useState<DrinkRecipe[]>([]);
    const results = useAppSelector((state) => state.results.value)
    
    // lets get sagas to take care of these changes!!
    useEffect(() => {
      
    setDrinks(results!);

  },[results]);


    return(
        
          <Container fluid='md' className='mt-5'>
            <Row lg = {4} md={3} sm={2} xs={1}>
            {drinks.map((drink) => (
            
            <Col key={drink.idDrink}><PreviewCard key={drink.idDrink} data={drink} /></Col>
          ))}
          </Row>
          </Container>
        
      )
     
}

export default ResultsList;