import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

export function ShelfItem() {

  const [item, setItem] = useState('');
  const [image, setImage] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch()

  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log("in hSubmit")
    dispatch({
      type: 'ADD_TO_SHELF',
      payload: {
        item: item,
        image: image,
      },
    });
  
  }
  
  return <div>
    <input type='text' placeholder='item'></input>
    <input type='text' placeholder='url'></input>
    <button className='submit' onClick={handleSubmit}>SUBMIT</button>
  </div>;
}
