// We are deconstructing the props object directly in the parentheses of the function
import { Link } from 'react-router-dom';

function ItemCard({ title, description, imageUrl, _id }) {


    return (

<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
  
    <a href={`/items/${_id}`}>
    {imageUrl && <img alt="item" src={`${imageUrl}`} className="rounded-t-lg object-cover h-48 w-96" />}
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2 flex-1">{title}</h5>
      <h6 className="text-gray-700 text-base mb-4 flex-1">
      {description}
      </h6>
      <Link to={`/items/edit/${_id}`}>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit item</button>
      </Link>
    </div>
  </div>
</div>

      /* <div className="ItemCard card">
        <h3>{title}</h3>
        <h4>Description:</h4>
        <p>{description}</p>
        <Link to={`/items/edit/${_id}`}>
        <button>Edit Item</button>
      </Link>
      </div> */
    );
  }
  
  export default ItemCard;
  
  