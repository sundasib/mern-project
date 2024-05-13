import Products from "./add-product";
import Analytics from "./analytics";
import Inventory from "./inventory";
import Orders from "./orders";
import PropTypes from "react";
Home.prototypes = {
  option: PropTypes.isRequired,
};
function Home({ option }) {
  return (
    <>
      <div className="w-5/6 h-full bg-gray-300 py-2">
        {option == "inventory" && <Inventory />}
        {option == "analytics" && <Analytics />}
        {option == "products" && <Products />}
        {option == "orders" && <Orders />}
      </div>
    </>
  );
}
export default Home;
