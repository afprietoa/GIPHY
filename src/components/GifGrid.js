import React from 'react'
// import { useEffect , useState } from 'react'

// import { getGifs } from '../helpers/getGifs'
import useFetchGifs from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

 //Custom Hooks: extraen lógica a reutilizar de algún componente de forma sencilla.
   
 // const [images, setImages] = useState([])

   

    // useEffect( () => {
    //     getGifs(category).then(setImages)
    // },[category])

    //Se recibe una categoria y se hace una peticion http

    
    const {data:gifs, loading} = useFetchGifs(category)
    

    return (
        <>
            <h2 className="animate__animated animate__fadeIn"> {category} </h2>
            {loading && <h3 className="animate__animated animate__flash">Loading...</h3>}
        <div className="card-grid">
                
           
                {
                    gifs.map( (img) =>(
                        
                        <GifGridItem 
                        key={img.id}
                        {...img} 
                        />
                     ))
                }
          

        </div>

        </>
    )
}
