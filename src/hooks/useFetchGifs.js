//el use signigica que es un Hook, hooks no son más que funciones

import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";


// import React from 'react'
//la importación de react no es necesaria al menos que se regrese jsx

const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {

        getGifs(category)
        .then((imgs)=>{

            setState({
            data:imgs,
            loading: false
            })
            
        })

    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data:[1,2,3,4,5,6,7,8,9],
    //         loading:false
    //     })
    // }, 3000);

    return state //{data:[],loading:true}
}

export default useFetchGifs


