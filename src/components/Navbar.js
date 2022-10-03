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
      {user && <span>Welcome back {user.name}</span>}
      <Link to="/">
        <button>Home</button>
      </Link>

      {/* <Link to="/movies/add"> Add a movie </Link> */}

      {isLoggedIn && (
        <>
          <Link to="/rooms">
            <button>Rooms</button>
          </Link>
          <Link to="/items">
            <button>Items</button>
          </Link>           
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
