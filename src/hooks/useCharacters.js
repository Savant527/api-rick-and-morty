import { useState }from 'react'

export const useCharacters = () => {
    const [Characters, setCharacters] = useState(null);
    const [details, setDetails] = useState(null);

    const back = () => {
      window.history.go(-1)
    }
   const getAllCharacters = async () => {
   try { var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      await fetch(`https://rickandmortyapi.com/api/character/`, requestOptions)
      .then(response => response.json())
      .then(result => setCharacters(result.results))
      .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
        
   };

   const getDetail = async(id) => {
    try { var requestOptions = {
         method: 'GET',
         redirect: 'follow'
       };
       
       await fetch(`https://rickandmortyapi.com/api/character/${id}`, requestOptions)
       .then(response => response.json())
       .then(result => setDetails(result))
       .catch(error => console.log('error', error));
     } catch (error) {
       console.log(error);
     }
         
    };

  return {
    Characters,
    getAllCharacters,
    back,
    getDetail,
    details

  };

};
