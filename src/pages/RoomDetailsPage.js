import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddItem from "../components/AddItem";
import ItemCard from "../components/ItemCard";



function RoomDetailsPage (props) {
  const [room, setRoom] = useState(null);
  const { roomId } = useParams();
  
  const getRoom = () => {
    const storedToken = localStorage.getItem("authToken"); // capture the value of 'authToken' key
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/rooms/${roomId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
      	const oneRoom = response.data;
      	setRoom(oneRoom);
    	})
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getRoom();
    // eslint-disable-next-line
  }, [] );

  
  return (
    <div className="RoomDetails">
    
      {room && (
        <>
          <h2 className="text-3xl font-bold underline">Room Details</h2>
          <h1>{room.title}</h1>
          <p>{room.description}</p>
        </>
      )}

      <Link to="/rooms">
        <button className="btn-primary">Back to rooms</button>
      </Link>
          
      <Link to={`/rooms/edit/${roomId}`}>
        <button className="btn-primary">Edit Room</button>
      </Link>
      
      
      <AddItem refreshRooms={getRoom} roomId={roomId} />          

<div className="container mx-auto p-6 grid grid-cols-3 gap-4">
{ room && room.items.map((item) => <ItemCard  {...item} key={item._id} roomId={room._id} />  )} 
</div>
      
    </div>
  );
}

export default RoomDetailsPage;