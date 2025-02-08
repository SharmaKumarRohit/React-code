import Products from "./components/Products";
import CartProvider from "./contexts/cartProvider";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={700}
        hideProgressBar={true}
      />
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
