import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categorie ) => {

   const [gifs, setGifs] = useState([]);
   const [isLoading,setIsLoading] = useState(true);

    const traerGifs = async() => {
        const newGifts = await getGifs(categorie);
        setGifs(newGifts);
        setIsLoading(false);
    }

    useEffect(() => {
      traerGifs()
    }, []);

    return{
        gifs,
        isLoading
    }
}
