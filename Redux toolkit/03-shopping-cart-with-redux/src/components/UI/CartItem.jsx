import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { ImCross } from "react-icons/im";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../../features/cart/cartSlice";

function CartItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
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
              dispatch(decreaseQty({ id }));
            }}
          >
            <RiSubtractLine />
          </button>
          <p className={styles.qtyDisplay}>{quantity}</p>
          <button
            onClick={() => {
              dispatch(increaseQty({ id }));
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
            dispatch(removeItem({ id }));
          }}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
