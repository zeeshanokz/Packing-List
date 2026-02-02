import React from 'react'

function Item({item}) {
  return (
    <li className='display flex justify-center'>
     <span style={item.packed ? { textDecoration: "line-through"} : {}}>
     {item.quality}   {item.description}
    </span>
    <button>✖️</button>
    </li>
  )
}

export default Item;