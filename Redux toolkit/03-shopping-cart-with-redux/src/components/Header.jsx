import { useState, useEffect } from "react";
import Model from "./UI/Model";
import Cart from "./UI/Cart";
import styles from "./Header.module.css";
import Container from "./UI/Container";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart);
  const [isModelOpen, setIsModelOpen] = useState(false);
  useEffect(() => {
    if (isModelOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isModelOpen]);
  const totalQuantity = cart.reduce(
    (accum, cartItem) => accum + cartItem.quantity,
    0
  );
  const closeModel = () => {
    setIsModelOpen(false);
  };
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC Shop</h1>
          <button
            className={styles.showCartBtn}
            onClick={() => {
              setIsModelOpen(true);
            }}
          >
            <span className={styles.cartIconAndNumber}>
              <BsCartFill />
              {totalQuantity > 0 && (
                <span className={styles.number}>{totalQuantity}</span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>
      </Container>
      {isModelOpen && (
        <Model closeModel={closeModel}>
          <Cart />
        </Model>
      )}
    </header>
  );
}

export default Header;
