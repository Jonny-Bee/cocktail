import { Card , Button} from "react-bootstrap";
import './preview-card.style.css';

import { Badge } from "react-bootstrap";
import { DrinkRecipe } from "../../IO/dataIO";
import React from 'react';
import {  useAppDispatch } from '../../store/hooks';
import { setRecipe } from '../../store/recipe.slice'; 
import { useNavigate } from 'react-router-dom';

type PreviewProps = {
    data:DrinkRecipe
}
const PreviewCard = ({data}:PreviewProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    
    const handleClick = () =>{
        dispatch(setRecipe(data));
        navigate('/recipe');
    }
    const insert = () => {if(data.strAlcoholic ==='Non alcoholic')
        return <Badge pill bg="light" text='dark' className='floating-badge'>Non-Alcoholic</Badge>;
    }
    return(
        <Card className='mb-5 mg' >
           
           
            <Card.Img variant="top" src={data.strDrinkThumb}/>
            
            <Card.Body>
            {insert()}
                <Card.Title>{data.strDrink}</Card.Title>
                    
                <Button variant="outline-dark" onClick={handleClick} >View Recipe</Button>
            </Card.Body>
         </Card>
    )

}

export default PreviewCard;