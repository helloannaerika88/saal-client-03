import { useState, useEffect } from "react";
import axios from "axios";

import ItemCard from "../components/ItemCard";


function ItemListPage() {
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/items`,
      { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllItems();
  }, [] );

  
  return (
    <div className="ItemListPage">
      
<div className="container mx-auto p-6 grid grid-cols-3 gap-4">
{ items.map((item) => <ItemCard key={item._id} {...item} />  )} 
</div>
      
      {/* { items.map((item) => <ItemCard key={item._id} {...item} />  )}  */}
    </div>
  );
}

export default ItemListPage;

