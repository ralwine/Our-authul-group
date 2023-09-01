import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";






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
    <div className ="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {item.map ( thing => (
          <li key={thing.id}>{thing.description}</li>
        ))}
      </ul>
      

    </div>
    
  );
}

export default ShelfPage;
