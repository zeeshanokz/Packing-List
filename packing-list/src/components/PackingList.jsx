import React from 'react'
import  {initailItems} from "../data/data"
import Item from './Item';

function PackingList() {
  return (
      <ul className='list'>
        <span className='flex justify-center gap-12'>
    {initailItems.map((item) =>(<Item item={item} key={item.id} />) )}
    </span>
      </ul>
  )
}

export default PackingList;