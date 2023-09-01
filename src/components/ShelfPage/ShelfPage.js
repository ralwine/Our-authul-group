
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import React from 'react';
import { ShelfItem } from './ShelfItem/ShelfItem';





function ShelfPage() {
  const item = useSelector((store) => store.item);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, []);
  console.log('here is the item', item)






  return (
    <>
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
        
        
      <ul>
        {item.map ( thing => (
          <li key={thing.id}>{thing.description}</li>
        ))}
      </ul>
    
    </div>
    <ShelfItem />
    </>
  );
}

export default ShelfPage;

