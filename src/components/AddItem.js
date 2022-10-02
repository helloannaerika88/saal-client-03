import { useState } from "react";
import axios from "axios";

function AddItem(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the project id when creating the new task
    const { roomId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, roomId };

    const storedToken = localStorage.getItem('authToken');
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/items` ,requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
      
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshRooms();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddItem">
      <h3>Add New Item</h3>
      
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default AddItem;