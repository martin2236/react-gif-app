import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import '../styles.css';



export const GifGrid = ({categorie}) => {

  const { gifs, isLoading } = useFetchGifs( categorie );

  return (
    <>
       <h3>{ categorie }</h3>
           {
            isLoading 
            && 
                <h4>Cargando ...</h4>
            
           }

            <div className="card-grid">
                {
                    gifs.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>
    </>
  )
}
