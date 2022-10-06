import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddItem from "../components/AddItem";
import ItemUserCard from "../components/ItemUserCard";



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
<h2 className="text-3xl font-bold pt-16">Room Details</h2>

      {room && (
        <>
<div className="flex justify-center pb-6">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-lg bg-white">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" alt="room" src={room.imageUrl}/>
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{room.title}</h5>
      <h6 className="text-gray-700 text-base mb-4">
      {room.description}      
      </h6>
    </div>
  </div>
</div>
          {/* <h1>{room.title}</h1>
          <p>{room.description}</p> */}
        </>
      )}

      <Link to="/rooms">
        <button className="btn-primary mx-1">Back to rooms</button>
      </Link>
          
      <Link to={`/rooms/edit/${roomId}`}>
        <button className="btn-primary mx-1">Edit Room</button>
      </Link>
      
      
      <AddItem refreshRooms={getRoom} roomId={roomId} />          

<div className="container mx-auto p-6 grid grid-cols-3 gap-4">
{ room && room.items.map((item) => <ItemUserCard  {...item} key={item._id} roomId={room._id} />  )} 
</div>
      
    </div>
  );
}

export default RoomDetailsPage;