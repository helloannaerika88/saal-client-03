import { Link } from "react-router-dom";


// We are deconstructing props object directly in the parentheses of the function
function RoomCard ( { title, description, imageUrl, _id } ) {
  
  return (
    <div className="RoomCard card">
      <Link to={`/rooms/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      {imageUrl && <img alt="room/image" src={`${imageUrl}`} className={"w-[100px] h-[100px] rounded-full"} />}
    </div>
  );
}

export default RoomCard;