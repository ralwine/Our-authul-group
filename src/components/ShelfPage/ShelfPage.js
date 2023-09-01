
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
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

  function removeItem(thing) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: thing.id,
    })

  }





  return (

    <>
    <div className="container">

      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {item.map ( thing => (
          <li key={thing.id}>{thing.description}
          <button onClick={() => removeItem(thing)}>DELETE</button></li>
          
        ))}
      </ul>
      

    </div>

    

    <ShelfItem />
    </>

  );
}

export default ShelfPage;

