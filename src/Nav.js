import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineTrademark } from "react-icons/ai";

const Nav = (props) => {
  const { carts } = props;

  console.log(carts.length);

  return (
    <nav className="nav">
      <div className="placeholder">
        <Link to="/">
          <img
            className="icon"
            src={require("./images/rround-logo.jpeg")}
            alt="RROUND"
          />
        </Link>
      </div>
      <div className="title">
        RROUND
        <AiOutlineTrademark size=".6em" color="black" />{" "}
      </div>
      <ul className="top-nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="home-page">HOME</li>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <li className="shop-page">SHOP</li>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <li className="cart-page">
            <AiOutlineShoppingCart size="3em" color="black" />
            <p className="count">[{carts.length}]</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
