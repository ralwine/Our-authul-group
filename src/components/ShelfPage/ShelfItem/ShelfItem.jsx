import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

export function ShelfItem() {

  const [item, setItem] = useState('');
  const [image, setImage] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in hSubmit")
    dispatch({
      type: 'ADD_TO_SHELF',
      payload: {
        item: item,
        image: image,
      },
    });
    setItem('')
    setImage('')
  }

  return <div>
    <input type='text' value={item} placeholder='item' onChange={event => setItem(event.target.value)}></input>
    <input type='text' value={image} placeholder='url' onChange={event => setImage(event.target.value)}></input>
    <button className='submit' onClick={handleSubmit}>SUBMIT</button>
  </div>;
}
