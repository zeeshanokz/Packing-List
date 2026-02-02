import React, { useState } from 'react'

function Form() {
  const [description, setDescription] = useState("");
  const [quality, setQuality] = useState(1);
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
  e.preventDefault();

  if(!description) return;

  const newItem = {description, quality, packed: false, id: Date.now() };
  console.log(newItem);
  

  setDescription("");
  setQuality(1);
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <span id='span'>🤷‍♂️❤️ What do you need for Your Trips ❤️🤷‍♂️</span>
      <select className='border rounded-full px-3 py-0.5 mx-3 bg-amber-100' value={quality} onChange={(e) => setQuality(Number(e.target.value))}>
      {Array.from({length: 20}, (_, i) => i + 1).map((num) => 
      (
        <option value= {num} key={num}> {num}</option>
      ))}
      </select>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input className='border rounded-full px-3 py-0.5 bg-amber-100 mx-3 text-sm' type="text"  placeholder='items... ' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button className='border rounded-full px-3 py-0.5 ml-2 bg-green-200 text-sm'>ADD</button>
    </form>
  )
}

export default Form;