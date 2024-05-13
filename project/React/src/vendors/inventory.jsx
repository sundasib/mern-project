import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "react";
Products.prototypes = {
  item: PropTypes.isRequired,
  updateProductList: PropTypes.isRequired,
};

function Products({ item, updateProductList }) {
  const deleteProduct = async () => {
    const { data } = await axios.delete(
      "http://localhost:3000/user/deleteUser",
      {
        params: {
          userId: item.userId,
        },
      }
    );

    console.log("data ", data);
    if (data.error || !data.response) {
      return alert("unable to delete");
    }
    return updateProductList();
  };

  // console.log("username", item.username);
  // console.log("Role", item.Role.rolename);
  // console.log("Address", item.Address.address);
  return (
    <>
      <div className="w-1/4 p-2 h-2/6 ">
        <div className="w-full bg-gray-300 shadow-lg h-5/6">
          <p className="font-normal text-md">{item.username}</p>
          <p className="font-normal text-md">{item.Role.rolename}</p>
          <p className="font-normal text-md">{item.Address.address}</p>
          <div className="w-full flex justify-end gap-2">
            <button className="bg-blue-400">Edit</button>
            <button
              className="bg-blue-400"
              onClick={() => {
                void deleteProduct();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Inventory() {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { data: products } = await axios.get(
      "http://localhost:3000/user/getAllUser"
    );
    //console.log(products.response);
    setProducts(products.response);
  };
  useEffect(() => {
    void getAllProducts();
  }, []);
  return (
    <>
      <div className=" w-full h-full p-4 flex-col">
        <p className="text-gray-900 text-2xl font-semibold">Products</p>
        <div className="w-full h-full bg-white p-4 flex flex-wrap">
          {products != null ? (
            <>
              {products.map((item, index) => {
                return (
                  <Products
                    item={item}
                    key={index}
                    updateProductList={getAllProducts}
                  />
                );
              })}
            </>
          ) : (
            <>
              <p>No Product Exists</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Inventory;
