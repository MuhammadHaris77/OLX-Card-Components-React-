import React from 'react'

function Image({src,width,height,className}) {
  return (
    <div>
        
        <img className={className} src={src} width={width} height={height} />
        </div>
  )
}

export default Image;