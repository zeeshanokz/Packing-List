import React from 'react'

function Form() {
  return (
    <form className='form'>
      <span id='span'>🤷‍♂️❤️ What do you need for Your Trips ❤️🤷‍♂️</span>
      <select className='border rounded-full px-3 py-0.5 mx-3 bg-amber-100'>
        <option value= {1}>1</option>
        <option value= {2}>2</option>
        <option value= {3}>3</option>
      </select>
      <input className='border rounded-full px-3 py-0.5 bg-amber-100 mx-3 text-sm' type="text"  placeholder='items...'/>
      <button className='border rounded-full px-3 py-0.5 ml-2 bg-green-200 text-sm'>ADD</button>
    </form>
  )
}

export default Form;