import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Lottie from 'react-lottie';
import Lottie from 'react-lottie-player'
import * as animationData from '../lottie/lf30_editor_hoxpd9zc.json'

 
function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
 
  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };
 
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };
 
  
  return (
    
 
      /* <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
 
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <label>Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />

        <br/>
 
        <button type="submit">Sign Up</button>
      </form> */
<>
  <div className="flex pt-36">
  
  

  <div className={`pt-10 w-1/2`}>
  <h1>Signup</h1>
  <div className={`block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md`}>
  <form onSubmit={handleSignupSubmit}>

  <div className="form-group mb-6">
      <input type="text" 
          name="name"
          value={name}
          onChange={handleName}
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
        placeholder="your username"/>
    </div>

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
      ease-in-out">Signup</button>
  </form>
</div>
        <br/>

        {/* <button className="btn-primary" type="submit">Login</button> */}
      
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
    
    </div>

    <div className="w-1/2">
      
    </div>
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 400, height: 400, margin:"0 auto" }}
    />

    </div>
    </> 
  )
}
 
export default SignupPage;