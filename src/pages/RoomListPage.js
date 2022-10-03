import { useState, useEffect } from "react";
import axios from "axios";

import RoomCard from "../components/RoomCard";
import AddRoom from "../components/AddRoom"; 
import MovieCard from "../components/MovieCard";

function RoomListPage() {
  const [rooms, setRooms] = useState([]);

  const getAllRooms = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/rooms`,
      { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => setRooms(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllRooms();
  }, [] );

  
  return (
    <div className="RoomListPage">
      
      <AddRoom refreshRooms={getAllRooms} />
      
      { rooms.map((room) => <RoomCard key={room._id} {...room} />  )} 
     {/* <MovieCard /> */}
    </div>
  );
}

export default RoomListPage;

