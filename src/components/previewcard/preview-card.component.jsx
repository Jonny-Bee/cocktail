import { Card , Button} from "react-bootstrap";
import './preview-card.style.css';
import { CatContext } from "../../contexts/cat-context/cat-context.context";
import { useContext } from "react";
const PreviewCard = (props) => {
    const {setRecipe} = useContext(CatContext);
    const handleClick = () =>{
        setRecipe(props.data);
    }
    return(
        <Card className='mb-5 mg' >
            <Card.Img variant="top" src={props.data.strDrinkThumb} />
            <Card.Body>
                <Card.Title>{props.data.strDrink}</Card.Title>
                    
                <Button variant="outline-dark" onClick={handleClick} >View Recipe</Button>
            </Card.Body>
         </Card>
    )

}

export default PreviewCard;