import { Link } from "react-router-dom";

function UserCard ({ title, description, imageUrl, _id }) {

    return(
        <div>
            <h1>hello from the user card</h1>
            <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
  
    <a href={`/rooms/${_id}`}>
    {imageUrl && <img alt="room" src={`${imageUrl}`} className="rounded-t-lg object-cover h-48 w-96" />}
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
      <p class="text-gray-700 text-base mb-4 flex-1">
      {description}
      </p>
      <Link to={`/rooms/${_id}`}>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Room details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
}

export default UserCard;