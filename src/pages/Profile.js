import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddRoom from "../components/AddRoom";
import AddItem from "../components/AddItem";
import RoomCard from "../components/RoomCard";
import { AuthContext } from "../context/auth.context"

function Profile() {
    const { user } = useContext(AuthContext);
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
    

      useEffect(() => {
        getAllRooms();
           // eslint-disable-next-line 
      }, [] );   

    return (
        <>
        <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}
                <div class="bg-white p-3">
                    <div class="image overflow-hidden">
                        <img class="h-80 w-auto mx-auto"
                            src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="profile"/>
                    </div>
                    {user && <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Welcome, {user.name}</h1> }
                    
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Oct 07, 2022</span>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
                </div>
                {/* <!-- End of profile card --> */}
                
<div class="w-full md:w-9/12 mx-2 h-64">

{/* <!-- Show all rooms by the user --> */}

<div className="block p-6 rounded-lg shadow-lg bg-white">
  <AddRoom refreshRooms={getAllRooms} />
</div>

<div className="container mx-auto p-6 grid grid-cols-3 gap-4">
{ rooms.map((room) => <RoomCard key={room._id} {...room} />  )} 
</div>

<Link to="/rooms">
<button
class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
Back to room page</button>
</Link>
</div>     
    </>
    );
}

export default Profile;