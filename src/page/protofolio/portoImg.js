import React from 'react'

export default function portoImg(props) {
  return (
        <div style={{
            gridArea: props.area,
            backgroundImage: `url(${props.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '5px 5px',
            cursor: 'pointer',
            }} 
            className="portoImg">
        </div>
  )
}
