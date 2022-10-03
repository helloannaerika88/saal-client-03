import { useState, useEffect } from "react";
import service from "../api/service";
import RoomCard from "../components/RoomCard";
import RoomListPage from "./RoomListPage";

function HomePage() {
  const [rooms, setRooms] = useState([]);

  // // Run the effect after the initial render to get a list of movies from the server
  // useEffect(() => {
  //   service.getRooms()
  //     .then((data) => {
  //       // console.log("data", data);
  //       setRooms(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []); //  <-- This effect will run only once, after the initial render

  return (
    <div className="HomePage p-9">
      <h2 className="text-3xl font-bold underline">Movies</h2>
      { rooms.map((room) => <RoomCard key={room._id} {...room} />  )} 
      {rooms &&
        rooms.map((room) => (
          <div key={room._id}>
            <p>{room.title}</p>
            <img src={room.imageUrl} alt="room" width="200" />
            <p>{room.description}</p>
          </div>
        ))}
    </div>
  );
}

export default HomePage;
