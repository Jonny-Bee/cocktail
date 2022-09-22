import {  searchCockTailsByLetter, searchCockTailsByIngredient, searchCockTails, DrinkRecipe } from '../../IO/dataIO';
import { useState, useEffect } from 'react';
import React  from 'react';
import PreviewCard from '../previewcard/preview-card.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppSelector, useAppDispatch } from '../../store/hooks';


const ResultsList = () => {

    const searchField = useAppSelector((state) => state.search.searchField);
    const searchType = useAppSelector((state) => state.search.searchType);
    const [drinks, setDrinks] = useState<DrinkRecipe[]>([]);
    
    useEffect(() => {
      
    const LoadDrinks = (cat:string,stype:string) => {

        const f = (data:DrinkRecipe[]) =>{ 
          if(data != null){
            setDrinks(data);
            
          }
        };
        if(stype === 'letter')
              searchCockTailsByLetter(cat,f);
        else if(stype === 'ingredient')
              searchCockTailsByIngredient(cat,f);
        else
            searchCockTails(cat,f);
    };
    return LoadDrinks(searchField!,searchType!);

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