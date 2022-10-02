import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

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
    <div className="RoomEditPage">
      <h3>Edit the Room</h3>

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

        <button type="submit">Update Room</button>
      </form>

      <button onClick={deleteRoom}>Delete Room</button>
    </div>
  );
}

export default RoomEditPage;
