import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import serviceItem from "../api/serviceItem";

function AddItem(props) {
  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const storedToken = localStorage.getItem("authToken");
    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    serviceItem
      .uploadImage(uploadData, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(response => {
        console.log(response)
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.imageUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the project id when creating the new task
    const { roomId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, imageUrl, roomId, owner: user._id };
    const storedToken = localStorage.getItem('authToken');
    
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/items` ,requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
        setImageUrl("");
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshRooms();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddItem py-1.5">
      <h3>Add New Item</h3>

      <div className="block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form onSubmit={handleSubmit}>
    <div className="form-group mb-6">
      <input type="text" 
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        placeholder="Title"/>
    </div>
    
    <div className="form-group mb-6">
      <textarea
      type="text"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="
        form-control
        block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Description"
    ></textarea>
    </div>
    
    <div className="mb-3 w-96">
    <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Add picture*</label>
    <input onChange={(e) => handleFileUpload(e)} className="form-control
    block
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
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
      ease-in-out">Add</button>
  </form>
</div>
      
      {/* <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form> */}

    </div>
  );
}

export default AddItem;