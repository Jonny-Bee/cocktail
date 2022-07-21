import { Card , Button, CardImg} from "react-bootstrap";
import './preview-card.style.css';
import { CatContext } from "../../contexts/cat-context/cat-context.context";
import { useContext } from "react";
import { Badge } from "react-bootstrap";
const PreviewCard = (props) => {
    const {setRecipe} = useContext(CatContext);
    const handleClick = () =>{
        setRecipe(props.data);
    }
    const insert = () => {if(props.data.strAlcoholic ==='Non alcoholic')
        return <Badge pill bg="light" text='dark' className='floating-badge'>Non-Alcoholic</Badge>;
    }
    return(
        <Card className='mb-5 mg' >
           
           
            <Card.Img variant="top" src={props.data.strDrinkThumb}/>
            
            <Card.Body>
            {insert()}
                <Card.Title>{props.data.strDrink}</Card.Title>
                    
                <Button variant="outline-dark" onClick={handleClick} >View Recipe</Button>
            </Card.Body>
         </Card>
    )

}

export default PreviewCard;