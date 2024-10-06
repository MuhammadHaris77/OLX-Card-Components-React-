import React from 'react'

function Card({src,title,description,location}) {
  return (
<div className="card m-2 p-1" style={{ width: "18rem" }}>
  <img src={src} height={"180px"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
   {description} </p>
   <h5 className='lead'>{location}</h5>          
    <a href="#" className="btn btn-warning">
      Add to Cart
    </a>
  </div>
</div>


)
}

export default Card;