
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import React from 'react';
import { ShelfItem } from './ShelfItem/ShelfItem';





function ShelfPage() {
  const item = useSelector((store) => store.item);
  const dispatch = useDispatch();

  useEffect(() => {
    getItems();
  }, []);
  
  
  const getItems= () => {
    dispatch({ type: "FETCH_ITEMS" });
  };





  return (
<<<<<<< HEAD
    <div className ="container">
=======
    <>
    <div className="container">
>>>>>>> f0025328a65a444bbb63622d977d78ff541f94e5
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {item.map ( thing => (
          <li key={thing.id}>{thing.description}</li>
        ))}
      </ul>
      

    </div>
<<<<<<< HEAD
    
=======
    <ShelfItem />
    </>
>>>>>>> f0025328a65a444bbb63622d977d78ff541f94e5
  );
}

export default ShelfPage;

