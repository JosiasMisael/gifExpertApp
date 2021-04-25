import React  from 'react'
import { useFetchGift } from '../hooks/useFetchGift';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const {data: imgs, loading} =  useFetchGift(category)

    return (
       <>
        <h3>{category}</h3>
        {
            loading  && <p>Cargando...</p>
        }
        <div className="card-grid">
            <br/>
            {
                imgs.map(img => (
                    <GifGridItem key={img.id} {...img}/>
                    ))
            }
        </div>
       </> 
    )
}


export default GifGrid
