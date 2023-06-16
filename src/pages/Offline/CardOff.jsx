import React from 'react'

function CardOff(props) {
  return (
    <div className='d-flex flex-column justify-content-center card'>
      <img src={props.Url} className="wdt-mng mb-2 " />
      <div className='d-flex justify-content-center flex-wrap maxi mt-3'>
       <h6> <strong>Address:</strong> {props.Address}</h6>
      </div>
    </div>
  )
}

export default CardOff
