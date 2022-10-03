import { useState, useEffect } from "react";
import service from "../api/service";

function HomePage() {
  const [rooms, setRooms] = useState([]);

  // Run the effect after the initial render to get a list of movies from the server
  useEffect(() => {
    service.getRooms()
      .then((data) => {
        // console.log("data", data);
        setRooms(data);
      })
      .catch((err) => console.log(err));
  }, []); //  <-- This effect will run only once, after the initial render

  return (
    <div className="HomePage">
      <h2 className="text-3xl font-bold underline">Movies</h2>
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
