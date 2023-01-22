import React,{useState} from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const addCategorie = ( newCategorie ) =>{
        const existe = categories.find(categorie => categorie.toLowerCase() == newCategorie.toLowerCase());
        if(existe)return;
        setCategories([ ...categories, newCategorie ])
    }

  return (
   <>
   <h1>Gif Expert App</h1>
   <AddCategory 
        //setCategories={setCategories}
        onNewCategory={ addCategorie }
    />

        {
           categories.map( (categorie, index) => 
                (
                    <GifGrid categorie={categorie} key={index}/>
                )
            )
        }
   </>
  )
}
