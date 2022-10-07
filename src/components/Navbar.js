// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context";
import { ThemeContext } from "../context/theme.context";


function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className=
    {`Navbar ${theme}
    pl-12
relative
w-full
flex flex-wrap
items-center
justify-between
py-4
shadow-lg
navbar navbar-expand-lg navbar-light
    `}>

<div className="container-fluid w-90 flex flex-row flex-wrap items-center justify-between px-6">
{/* <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent"> */}


      {user && <span className="pr-4">Welcome back, {user.name}</span>}
      <NavLink to="/">
        <button className="btn-navbar">Home</button>
      </NavLink>

      {/* <Link to="/movies/add"> Add a movie </Link> */}

      {isLoggedIn && (
        <>
          <NavLink to="/rooms">
            <button className="btn-navbar">Rooms</button>
          </NavLink>
          <NavLink to="/items">
            <button className="btn-navbar">Items</button>
          </NavLink>
          <NavLink to="/users/profile">
          <button className="btn-navbar">my Profile</button>
          </NavLink>
          <NavLink to="/">          
          <button className="btn-navbar" onClick={logOutUser}>Logout</button>
          </NavLink> 
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <NavLink to="/signup"> <button className="btn-navbar">Sign Up</button> </NavLink>
          <NavLink to="/login"> <button className="btn-navbar">Login</button> </NavLink>
        </>
      )}
        </div>
      {/* </div> */}

        <div className="flex pr-12">
      <img src="/micasa-logo-1.png" alt="logo" className="h-8 mx-auto btn-navbar"/>
      <button className="btn-theme px-8" onClick={toggleTheme}>
        {theme === 'light' ? 'dark 🌜 ' : 'light 🟡 '}
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
