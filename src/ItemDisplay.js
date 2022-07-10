import "./App.css";
import { useParams } from "react-router-dom";
import List from "./Data";

const Item = (props) => {
  const { handleCartItem } = props;
  const params = useParams(); //get id number passed by the link

  const lists = List;

  const newItem = lists.filter(function (nItem) {
    return nItem.id === params.id;
  }); //filtering through the array to pass in the new item with the same id as the params

  return (
    <div className="item">
      <div className="item-title">{newItem[0].name}</div>
      <div className="display-container">
        <img
          src={newItem[0].avatar}
          alt={newItem[0].name}
          className="display-img"
        />
        <div className="display-details">
          <div className="display-info">
            <p className="item-price">${newItem[0].price}</p>
            <button
              value={newItem[0].id}
              className="add-cart"
              onClick={() => handleCartItem(newItem)}
            >
              add to cart
            </button>
            {newItem[0].description.map((details) => {
              return <li className="item-detail">{details}</li>;
            })}
            <p className="availability">available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
