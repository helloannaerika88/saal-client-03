// We are deconstructing the props object directly in the parentheses of the function
import { Link } from 'react-router-dom';

function ItemCard({ title, description, _id }) {


    return (
      <div className="ItemCard card">
        <h3>{title}</h3>
        <h4>Description:</h4>
        <p>{description}</p>
        <Link to={`/items/edit/${_id}`}>
        <button>Edit Item</button>
      </Link>
      </div>
    );
  }
  
  export default ItemCard;
  
  