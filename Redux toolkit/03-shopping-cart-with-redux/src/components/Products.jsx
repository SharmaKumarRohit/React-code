import { products } from "../data/products";
import Product from "./Product";
import Container from "./UI/Container";
import styles from "./Products.module.css";

function Products() {
  return (
    <Container>
      <h1 className={styles.productsHeading}>Best of ARC</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </Container>
  );
}

export default Products;
