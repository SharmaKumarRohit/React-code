import { useCart } from "../../contexts/cartProvider";
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { ImCross } from "react-icons/im";
import styles from "./CartItem.module.css";

function CartItem({ id, title, price, img, quantity }) {
  const { increaseQty, decreaseQty, removeItem } = useCart();
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartImgAndTitle}>
        <img src={img} alt={title} className={styles.cartImage} />
        <p className={styles.cartItemTitle}>{title}</p>
      </div>
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              decreaseQty(id);
            }}
          >
            <RiSubtractLine />
          </button>
          <p className={styles.qtyDisplay}>{quantity}</p>
          <button
            onClick={() => {
              increaseQty(id);
            }}
          >
            <IoMdAdd />
          </button>
        </div>
        <p className={styles.price}>
          &#8377; {(price * quantity).toLocaleString()}
        </p>
        <button
          className={styles.cartItemRemove}
          onClick={() => {
            removeItem(id);
          }}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
