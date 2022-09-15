import { Card , Button} from "react-bootstrap";
import './preview-card.style.css';
import { CatContext } from "../../contexts/cat-context/cat-context.context";
import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { DrinkRecipe } from "../../IO/dataIO";
import React, { Component }  from 'react';
type PreviewProps = {
    data:DrinkRecipe
}
const PreviewCard = ({data}:PreviewProps) => {
    const {setRecipe} = useContext(CatContext);
    const handleClick = () =>{
        setRecipe(data);
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