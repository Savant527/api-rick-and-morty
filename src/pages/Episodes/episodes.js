import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Imagen1 from '../../assets/img/logo.png'


function CartaApp({id,nombre, date,episode,creado}) {
  return (
    <Card style={{ width: '17rem' }} className='m-1'>
      <Card.Header className='bg-light text-dark'><strong>{id}. {nombre}</strong></Card.Header>
      <Card.Img variant="top"  src={Imagen1}/>
      <ListGroup variant="flush" className='texto-carta text-center'>
        <ListGroup.Item><strong>Air date: </strong>{date}</ListGroup.Item>
        <ListGroup.Item><strong>Episode: </strong>{episode}</ListGroup.Item>
        <ListGroup.Item><strong>Created: </strong>{creado}</ListGroup.Item>
      </ListGroup>
      <Card.Body className='text-center'>       
        <Link to={`/detailsepisodes/${id}`}>
        <Button variant="secondary" className='boton'>Details</Button>
      </Link>  
      </Card.Body>
    </Card>
  );
}

export default CartaApp;