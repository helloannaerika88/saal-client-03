import { useState, useEffect } from "react";
import axios from "axios";

import RoomCard from "../components/RoomCard";
// import AddRoom from "../components/AddRoom"; 

function RoomListPage() {
  const [rooms, setRooms] = useState([]);
  
  const getAllRooms = () => {
    const storedToken = localStorage.getItem("authToken");
    console.log(storedToken)
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
      {/* <h2 className="text-3xl font-bold underline">List of Rooms</h2> */}

{/* <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
   <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse show" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Add new room
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="block p-6 rounded-lg shadow-lg bg-white">
  <AddRoom refreshRooms={getAllRooms} />
  </div>
</div> */}

<div className="container mx-auto p-6 grid grid-cols-3 gap-4">
{ rooms.map((room) => <RoomCard key={room._id} {...room} />  )} 
</div>    
    </div>
  );
}

export default RoomListPage;

