import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";



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

    // eslint-disable-next-line
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
    <div className="ItemEditPage py-14">
      <h3>Edit the Item</h3>

      <div className="block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form onSubmit={handleFormSubmit}>
    <div className="form-group mb-6">
      <input type="text" 
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Title"/>
    </div>
    
    <div className="form-group mb-6">
      <textarea
      type="text"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Description"
    ></textarea>
    </div>
    
    <button type="submit"
    className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Update item</button>
      <br/>
      <button onClick={deleteItem}
    className="
      w-full
      px-6
      py-2.5
      mt-2.5
      bg-red-300
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Delete item</button>
  </form>
</div>      

      {/* <form onSubmit={handleFormSubmit}>
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

      <button onClick={deleteItem}>Delete Item</button> */}
    </div>
  );
}

export default ItemEditPage;
