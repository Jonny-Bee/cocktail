
import { Button, Container} from "react-bootstrap";

import { Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { useAppSelector} from '../../store/hooks';
import { useNavigate } from "react-router-dom";
const Recipe = () =>{

    
        const selectedRecipe = useAppSelector((state) => state.recipe.value);
        const ingredients = [];
        const measures = [];
        let iEnd = true;
        let mEnd = true;
        let i = 1;
        const navigate = useNavigate();
        while(iEnd)
        {
           
            let ci = selectedRecipe!['strIngredient' + i];
            if(ci === null)
            {
                iEnd = false;
            }
            else
            {
                ingredients.push(ci);
                
            }
            i++;
        }
        i = 1;
        while(mEnd)
        {
            let ci = selectedRecipe!['strMeasure' + i];
            if(ci === null)
            {
                mEnd = false;
            }
            else
            {
                measures.push(ci);
                
            }
            i++;
        }
        return(
            <Container className='mt-5'>
            <Button className = 'mb-2' variant="primary" onClick={() => navigate('/list')}>back</Button>
            <Card className='mb-5 '>
                <Card.Img variant="top" src={selectedRecipe!.strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{selectedRecipe!.strDrink}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
                    
                    <Row>
                        <Col>
                        <ul>
                            {ingredients.map((drink,k) => (<li key={drink!+k}>{drink}</li> ))}
                        </ul>
                        </Col>
                        <Col>
                        <ul>
                            {measures.map((drink,k) => (<li key={drink!+k}>{drink}</li> ))}
                        </ul>
                        </Col>
                    </Row>
                    
                </Card.Body>
            </Card>
                
            <Card className='mb-5 '>
                <Card.Body>
                    <Card.Title>Method</Card.Title>
                    <Card.Text>
                        {selectedRecipe!.strInstructions}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Container>
        )
    }


export default  Recipe;