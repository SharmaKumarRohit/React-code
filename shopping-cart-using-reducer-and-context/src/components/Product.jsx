import { useCart } from "../contexts/cartProvider";
import styles from "./Product.module.css";
import { toast } from "react-toastify";

function Product({ id, title, price, img }) {
  const { addItemToCart, cart } = useCart();
  const handleAdd = () => {
    for (let item of cart) {
      if (item.id === id) {
        toast.error("Item already add to cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    addItemToCart(newCartItem);
    toast.info("Item added!!");
  };
  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>&#8377; {price.toLocaleString()}</p>
      <button onClick={handleAdd} className={styles.addToCartBtn}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
