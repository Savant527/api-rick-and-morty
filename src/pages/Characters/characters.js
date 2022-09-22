import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function CartaApp({id,imagen,nombre,genero,status, creado}) {
  return (
    <Card style={{ width: '17rem' }} className='m-1'>
      <Card.Header className='bg-light text-dark'><strong>{id}. {nombre}</strong></Card.Header>
      <Card.Img variant="top" src={imagen}/>
      <ListGroup variant="flush" className='texto-carta text-center'>
        <ListGroup.Item><strong>Gender: </strong>{genero}</ListGroup.Item>
        <ListGroup.Item><strong>Status: </strong>{status}</ListGroup.Item>
        <ListGroup.Item><strong>Created: </strong>{creado}</ListGroup.Item>
      </ListGroup>
      <Card.Body className='text-center'>       
       <Link to={`/details/${id}`}>
        <Button variant="secondary" className='boton'>Details</Button>
      </Link> 
      </Card.Body>
    </Card>
  );
}

export default CartaApp;