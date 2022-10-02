import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

function ItemEditPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [room, setRoom] = useState("");
  // const [item, setItem] = useState("");
  
  
  const { itemId } = useParams();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('authToken');
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const oneItem = response.data;
        console.log(oneItem.room)
        setTitle(oneItem.title);
        setDescription(oneItem.description);
        setRoom(oneItem.room._id);
      })
      .catch((error) => console.log(error));

    
  }, [itemId]);
  

  const handleFormSubmit = (e) => { 
    e.preventDefault();
    const requestBody = { title, description};
    const storedToken = localStorage.getItem('authToken');

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`, requestBody, {headers: {Authorization: `Bearer ${storedToken}`}} )
      .then((response) => {
        navigate(`/rooms/${room}`) // from the state
      });
  };
  
  
  const deleteItem = () => {
    const storedToken = localStorage.getItem('authToken');

    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(() => {
        navigate("/rooms");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="ItemEditPage">
      <h3>Edit the Item</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Item</button>
      </form>

      <button onClick={deleteItem}>Delete Item</button>
    </div>
  );
}

export default ItemEditPage;
