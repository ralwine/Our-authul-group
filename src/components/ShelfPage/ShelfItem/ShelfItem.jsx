import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

export function ShelfItem() {

  const dispatch = useDispatch

  
  console.log("in ShelfItem")
  return <div>
    <input type='text' placeholder='item'></input>
    <input type='text' placeholder='url'></input>
    <button className='submit' onClick={ShelfItem}>SUBMIT</button>
  </div>;
}
