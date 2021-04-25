import React from 'react'

const GifGridItem = ({title, url}) => {
    return (
        <div className="carta animate__animated animate__bounceIn">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
