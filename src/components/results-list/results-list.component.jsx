import {  searchCockTailsByLetter, searchCockTailsByIngredient, searchCockTails } from '../../IO/dataIO';
import { useState, useEffect, useContext } from 'react';

import PreviewCard from '../previewcard/preview-card.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CatContext } from '../../contexts/cat-context/cat-context.context';

const ResultsList = (props) => {

    const {searchField  ,searchType} = useContext(CatContext);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
    const LoadDrinks = (cat,stype) => {

        const f = (data) =>{ 
          console.log(data.drinks);
          if(data.drinks != null){
            setDrinks(data.drinks);
            console.log('loaded');
          }
        };
        if(stype === 'letter')
              searchCockTailsByLetter(cat,f);
        else if(stype === 'ingredient')
              searchCockTailsByIngredient(cat,f);
        else
            searchCockTails(cat,f);
    };
    return LoadDrinks(searchField,searchType);
  },[searchField , searchType]);


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