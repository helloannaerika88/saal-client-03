import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="
relative
w-full
flex flex-wrap
items-center
justify-between
py-4
bg-gray-100
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light
    ">
<div className="container-fluid w-90 flex flex-row flex-wrap items-center justify-between px-6">
{/* <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent"> */}


      {user && <span>Welcome back {user.name}</span>}
      <Link to="/">
        <button className="btn-navbar">Home</button>
      </Link>

      {/* <Link to="/movies/add"> Add a movie </Link> */}

      {isLoggedIn && (
        <>
          <Link to="/rooms">
            <button className="btn-navbar">Rooms</button>
          </Link>
          <Link to="/items">
            <button className="btn-navbar">Items</button>
          </Link>
          <Link to="/profile">
          <button className="btn-navbar">my Profile</button>
          </Link>           
          <button className="btn-navbar" onClick={logOutUser}>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button className="btn-navbar">Sign Up</button> </Link>
          <Link to="/login"> <button className="btn-navbar">Login</button> </Link>
        </>
      )}
        </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
