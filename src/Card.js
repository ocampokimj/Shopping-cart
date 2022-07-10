import { Link } from "react-router-dom";
import React from "react";

const Card = (props) => {
  const { item } = props;

  return (
    <div className="shopping-item" key={item.id}>
      <Link to={`/shop/${item.id}`}> 
        <img src={item.avatar} alt={item.name} className="shopping-img" />
      </Link>
      <div className="item-info">
        <p className="shop-name">{item.name}</p>
        <p className="shop-price">${item.price}</p>
      </div>
    </div>
  );
};

export default Card;
