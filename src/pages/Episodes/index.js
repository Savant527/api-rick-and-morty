import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CartaApp from "./episodes";
import { useEpisodes } from "../../hooks/useEpisodes";


const CartasApp = () => {
    const { getAllEpisodes, Episodes} = useEpisodes();
  
    useEffect(() => {
        getAllEpisodes();
  
      }, [Episodes]);
      // console.log(Episodes);
  
    return (
      <div>
        <h1 className="text-center m-4">EPISODES</h1>
      
      <Container className="d-flex justify-content-center flex-wrap">
     
        {Episodes != null ? (Episodes.map((episodes) => (
          <CartaApp
            key={episodes.id}
            id = {episodes.id}
            nombre={episodes.name}
            date={episodes.air_date}
            episode={episodes.episode}
            creado={episodes.created}
          />
        ))) : ('Loading...')}
      </Container>
    </div>
    );
  };
  
  export default CartasApp;