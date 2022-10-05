import { Link } from "react-router-dom";


// We are deconstructing props object directly in the parentheses of the function
function RoomCard ( { title, description, imageUrl, _id } ) {
  
  return (

<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
  
    <a href={`/rooms/${_id}`}>
    {imageUrl && <img alt="room" src={`${imageUrl}`} className="rounded-t-lg object-cover h-48 w-96" />}
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
      <p className="text-gray-700 text-base mb-4 flex-1">
      {description}
      </p>
      <Link to={`/rooms/${_id}`}>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Room details</button>
      </Link>
    </div>
  </div>
</div>

    /* <div className="RoomCard card">
      <Link to={`/rooms/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      {imageUrl && <img alt="room/image" src={`${imageUrl}`} className={"w-[100px] h-[100px] rounded-full"} />}
    </div> */
  );
}

export default RoomCard;