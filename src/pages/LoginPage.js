import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from '../context/auth.context';
import { ThemeContext } from '../context/theme.context';
import Lottie from 'react-lottie';
import * as animationData from '../lottie/lf30_editor_hoxpd9zc.json'
 
 
function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);
 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 
  const { theme } = useContext(ThemeContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
 
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
      .then((response) => {
      // Request to the server's endpoint `/auth/login` returns a response
      // with the JWT string ->  response.data.authToken
        console.log('JWT token', response.data.authToken );
        storeToken(response.data.authToken) // store in my localStorage the authToken
        authenticateUser() // verify token is valid to get the user information from the server 
        navigate('/');                             // <== ADD      
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return (
    // <div className="LoginPage">
    //   <h1>Login</h1>
 
    //   <form onSubmit={handleLoginSubmit}>
    //     <label>Email:</label>
    //     <input 
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={handleEmail}
    //     />
 
    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handlePassword}
    //     />
    //       <button>Submit</button>
    //     </form>
    //   </div>

  
<>
  <div className="flex pt-36">
  

  <div className={`${theme} pt-10 w-1/2`}>
  <h1>Login</h1>
  <div className={`block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md`}>
  <form onSubmit={handleLoginSubmit}>
    <div className="form-group mb-6">
      <input type="email" 
          name="email"
          value={email}
          onChange={handleEmail}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="email"/>
    </div>

    <div className="form-group mb-6">
      <input type="password" 
          name="password"
          value={password}
          onChange={handlePassword}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="password"/>
    </div>
    
    <button type="submit"
    className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Login</button>
  </form>
</div>
        <br/>

        {/* <button className="btn-primary" type="submit">Login</button> */}
      
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>

    <div className="w-1/2">
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>


    </div>
    </>
  )
}

 
export default LoginPage;