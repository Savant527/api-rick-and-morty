import React, { useEffect } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Details() {
  const {details, getDetail, back} = useCharacters();
  const parametros = useParams();

  useEffect(() => {
    getDetail(parametros.id);
  }, []);

  

  return (

   <div>
   { details != null ? (  
   <Container>
   <Button className="m-3" variant="secondary" onClick={back}>Back</Button>
    <h1 className="text-center">Details of {details.name}</h1>
    <div className="container m-3 d-flex justify-content-center align-items-center flex-wrap">
    <div className="imagen">
            <img src={details.image} className="img-fluid" width="400"></img>
    </div>
      <div key={details.id} className="mt-3">
              <ul>
                <li>
                  <strong>Status: </strong>
                  {details.status}
                </li>
                <li>
                  <strong>Specie: </strong>
                  {details.species}
                </li>
                 <li>
                  <strong>Type: </strong>
                  {details.type === "" ? ('Empty'):(details.type)}
                </li> 
                <li>
                  <strong>Gender: </strong>
                  {details.gender}
                </li>
                <li>
                  <strong>Origin: </strong>
                  {details.origin.name}
                  
                </li> 
                 <li>
                  <strong>Location: </strong>
                  {details.location.name}
                </li> 
                <li>
                  <strong>Created: </strong>
                  {details.created}
                </li>
              </ul>
            </div>
    </div>
  
   </Container>
):('Loading...')}
   
 
 </div>
  );
}

export default Details;