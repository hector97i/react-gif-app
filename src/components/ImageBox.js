import React from 'react'

export const ImageBox = ({url, title, id}) => {
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
