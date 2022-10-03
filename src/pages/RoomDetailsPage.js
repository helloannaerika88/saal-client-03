import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddItem from "../components/AddItem";
import ItemCard from "../components/ItemCard";
import service from "../api/service";


const API_URL = "http://localhost:5005";


function RoomDetailsPage (props) {
  const [room, setRoom] = useState(null);
  const { roomId } = useParams();
  
  const [movies, setMovies] = useState([]);

  // Run the effect after the initial render to get a list of movies from the server
  useEffect(() => {
    service.getMovies()
      .then((data) => {
        // console.log("data", data);
        setMovies(data);
      })
      .catch((err) => console.log(err));
  }, []); //  <-- This effect will run only once, after the initial render

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
    // eslint-disable-next-line
  }, [] );

  
  return (
    <div className="RoomDetails">
    
      {room && (
        <>
          <h1>{room.title}</h1>
          <p>{room.description}</p>
          <h2 className="text-3xl font-bold underline">Movies</h2>
      {movies &&
        movies.map((movie) => (
          <div key={movie._id}>
            <p>{movie.title}</p>
            <img src={movie.imageUrl} alt="movie" width="200" />
            <p>{movie.description}</p>
          </div>
        ))}
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