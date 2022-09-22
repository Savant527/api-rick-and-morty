import React, { useEffect } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { Container } from "react-bootstrap";
import CartaApp from "./characters";


const CartasApp = () => {
    const { getAllCharacters, Characters} = useCharacters();
  
    useEffect(() => {
        getAllCharacters();
  
      // console.log(Characters);
    }, [Characters]);
  
    return (
      <div>
        <h1 className="text-center m-4">CHARACTERS</h1>
      
      <Container className="d-flex justify-content-center flex-wrap">
     
        {Characters != null ? (Characters.map((characters) => (
          <CartaApp
            key={characters.id}
            id = {characters.id}
            nombre={characters.name}
            imagen={characters.image}
            status={characters.status}
            genero ={characters.gender}
            especie={characters.species}
            locacion={characters.location.name}
            creado={characters.created}
          />
        ))) : ('Loading...')}
      </Container>
    </div>
    );
  };
  
  export default CartasApp;