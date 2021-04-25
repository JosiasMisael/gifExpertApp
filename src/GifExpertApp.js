import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Rick and Morti'])
    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory addNew={setCategories}/>
           <hr/>
           
           <ol>
           {
               categories.map(cat=>(<GifGrid  key={cat} category={cat}/>))
           }
               
           </ol>
        </>
    )
}

export default GifExpertApp
