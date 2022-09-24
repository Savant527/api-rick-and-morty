import { useState }from 'react'

export const useEpisodes = () => {
    const [Episodes, setEpisodes] = useState(null);
    const [details, setDetails] = useState(null);

    const back = () => {
      window.history.go(-1)
    }
   const getAllEpisodes = async () => {
   try { var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      await fetch(`https://rickandmortyapi.com/api/episode/`, requestOptions)
      .then(response => response.json())
      .then(result => setEpisodes(result.results))
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
       
       await fetch(`https://rickandmortyapi.com/api/episode/${id}`, requestOptions)
       .then(response => response.json())
       .then(result => setDetails(result))
       .catch(error => console.log('error', error));
     } catch (error) {
       console.log(error);
     }
         
    };

  return {
    Episodes,
    getAllEpisodes,
    getDetail,
    details,
    back

  };

};