import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEpisodes } from "../../../hooks/useEpisodes";
// import Imagen1 from '../../../assets/img/logo.png';


function DetailsEpisodes() {
  const {details, getDetail, back} = useEpisodes();
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
             {/* <img src={} className="img-fluid" width="400"></img>  */}
    </div>
      <div key={details.id} className="mt-3">
              <ul>
                <li>
                  <strong>Air date: </strong>
                  {details.air_date}
                </li>
                <li>
                  <strong>Episode: </strong>
                  {details.episode}
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

export default DetailsEpisodes;