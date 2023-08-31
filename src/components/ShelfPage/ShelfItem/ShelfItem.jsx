import React from 'react';

export function ShelfItem() {
  console.log("in ShelfItem")
  return <div>
    <input type='text' placeholder='item'></input>
    <input type='text' placeholder='url'></input>
    <button className='submit' onClick={ShelfItem}>SUBMIT</button>
  </div>;
}
