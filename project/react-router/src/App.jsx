//import VendorLayout from "../../React/src/layouts/vendorLayout";
import Login from "./pages/login";
import Notfound from "./pages/not-found";
import Signup from "./pages/signup";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/vendor/inventory";
import Addproduct from "./pages/vendor/add-product";
import Vendor from "./pages/vendor/Home";
import Customer from "./pages/customer/home";
import Cart from "./pages/customer/cart";
import Order from "./pages/customer/order";
import ProtectedRoutes from "./middleware";

function App() {
  return (
    <>
      <Routes path="/">
        <Route path="">
          <Route index element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
        <Route path="vendor">
          <Route
            index
            element={
              <ProtectedRoutes>
                <Vendor />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="inventory"
            element={
              <ProtectedRoutes>
                <Inventory />
              </ProtectedRoutes>
            }
          ></Route>
          <Route path="add-product" element={<Addproduct />}></Route>
        </Route>
        <Route path="customer">
          <Route index element={<Customer />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="order" element={<Order />}></Route>
        </Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
