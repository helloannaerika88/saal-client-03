import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

function RoomEditPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { roomId } = useParams();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('authToken');
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/rooms/${roomId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const oneRoom = response.data;
        setTitle(oneRoom.title);
        setDescription(oneRoom.description);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [roomId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
    const storedToken = localStorage.getItem('authToken');

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/rooms/${roomId}`, requestBody,  {headers: {Authorization: `Bearer ${storedToken}`}} )
      .then((response) => {
        navigate(`/rooms/${roomId}`)
      });
  };
  
  
  const deleteRoom = () => {
    const storedToken = localStorage.getItem('authToken');

    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/rooms/${roomId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(() => {
        navigate("/rooms");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="RoomEditPage pt-44">
      <h3>Edit the Room</h3>

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
      ease-in-out">Update room</button>
      <br/>
      <button onClick={deleteRoom}
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
      ease-in-out">Delete room</button>
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

        <button type="submit">Update Room</button>
      </form> */}
   
      {/* <button onClick={deleteRoom}>Delete Room</button> */}
    </div>
  );
}

export default RoomEditPage;
