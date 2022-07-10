import List from "./Data";
import Card from "./Card";

const Shop = (props) => {
  const { handleCartItem, removeItem } = props;

  const itemsArr = List;

  return (
    <div className="shop-page">
      <div className="shop-title">SHOP</div>
      <div className="shopping-items-container">
        {itemsArr.map((item) => (
          <div key={item.id}>
            <Card
              itemsArr={itemsArr}
              item={item}
              handleCartItem={handleCartItem}
              removeItem={removeItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
