import Products from "./components/Products";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={700}
        hideProgressBar={true}
      />
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
