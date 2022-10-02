import { useState, useEffect } from "react";
import axios from "axios";

import ItemCard from "../components/ItemCard";
import AddItem from "../components/AddItem"; 

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
      
      <AddItem refreshItems={getAllItems} />
      
      { items.map((item) => <ItemCard key={item._id} {...item} />  )} 
    </div>
  );
}

export default ItemListPage;

