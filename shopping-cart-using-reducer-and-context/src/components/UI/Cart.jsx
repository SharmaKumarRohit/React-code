import { useCart } from "../../contexts/cartProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useCart();
  let totalAmount = cart.reduce(
    (accum, cartItem) => accum + cartItem.price * cartItem.quantity,
    0
  );
  if (cart.length === 0)
    return (
      <h1 className={`${styles.cartHeading} ${styles.cartNoFound}`}>
        No item found!!
      </h1>
    );
  return (
    <div className={styles.cart}>
      <h1 className={styles.cartHeading}>Shopping Cart</h1>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1 className={styles.cartHeading}>
        Total Amount: &#8377; {totalAmount.toLocaleString()}
      </h1>
    </div>
  );
}

export default Cart;
