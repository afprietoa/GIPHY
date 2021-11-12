import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {

const [ categories, setCategories] = useState (['One Punch']);

// const handleAdd =  () =>{
//     setCategories([...categories, 'Vegeta'])
// }

  return (
    <>

      <h1 className="title-SG">GIPHY Developers</h1>

        <AddCategory setCategories={setCategories}/>

        <hr/>

        {/* <button onClick={handleAdd} >ADD</button> */}

        <ol>
            {
                categories.map( category =>(
                  // para objetos se encierra entre parentesis ()
                    <GifGrid 
                    key={category}
                    category={category} />
               ))
            }
        </ol>
    </>
  )
}

export default GitExpertApp

