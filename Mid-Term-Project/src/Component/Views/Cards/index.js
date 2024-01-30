import { useNavigate } from "react-router-dom";
// import heart from '../../../heart.svg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Cards(props) {
    const { price, description, images, title, id } = props;
    const navigate = useNavigate()

    const HandleCardPress = (e) => {
        navigate(`/DetailScreen/${id}`, { state: e })
    }

    return (
        <CardGroup  onClick={() => HandleCardPress(props)}>
        <Card className="cardss" style={{ border: '2px solid rgb(12, 15, 93)',  margin:"10px", marginBottom:"20px",  display: "inline-flex",  padding:20, cursor:"pointer" , gap:10}}>
          <Card.Img variant="top" style={{ width: '100%',  borderRadius: 5 }}  src={images[0]} />
          <Card.Body >
            <Card.Title> <h2>{title}</h2> </Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
         <h3>Rs : {price}</h3>  
           
          </Card.Footer>
        </Card>
        
        <Card  style={{border: '2px solid rgb(12, 15, 93)' , gap:10 , margin:"10px", marginBottom:"20px"}}>
          <Card.Img variant="top" style={{ width: '100%',  borderRadius: 5 }}  src={images[1]} />
          <Card.Body>
            <Card.Title> <h2>{title}</h2> </Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
         <h3>Rs : {price}</h3>  
          </Card.Footer>
        </Card>
   
        <Card style={{border: '2px solid rgb(12, 15, 93)' , gap:10 , margin:"10px", marginBottom:"20px"}}>
          <Card.Img variant="top" style={{ width: '100%' }}  src={images[2]} />
          <Card.Body>
            <Card.Title> <h2>{title}</h2></Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
         <h3>Rs : {price} </h3> 
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  
}

export default Cards;