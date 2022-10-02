import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddItem from "../components/AddItem";
import ItemCard from "../components/ItemCard";


const API_URL = "http://localhost:5005";


function RoomDetailsPage (props) {
  const [room, setRoom] = useState(null);
  const { roomId } = useParams();
  
  const getRoom = () => {
    const storedToken = localStorage.getItem("authToken"); // capture the value of 'authToken' key
    axios
      .get(`${API_URL}/api/rooms/${roomId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
      	const oneRoom = response.data;
      	setRoom(oneRoom);
    	})
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getRoom();
  }, [] );

  
  return (
    <div className="RoomDetails">
    
      {room && (
        <>
          <h1>{room.title}</h1>
          <p>{room.description}</p>
        </>
      )}
      
      <Link to="/rooms">
        <button>Back to rooms</button>
      </Link>
          
      <Link to={`/rooms/edit/${roomId}`}>
        <button>Edit Room</button>
      </Link>
      
      <AddItem refreshRooms={getRoom} roomId={roomId} />          

      { room && room.items.map((item) => <ItemCard  {...item} roomId={room._id} /> )} 

     
      
    </div>
  );
}

export default RoomDetailsPage;