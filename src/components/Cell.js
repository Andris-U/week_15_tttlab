import React from 'react'

const Cell = (props) => {
  return (
    <div className= {props.className} id={props.id} key={props.id} onClick={props.onClick}>

    </div>
  )
}

export default Cell
