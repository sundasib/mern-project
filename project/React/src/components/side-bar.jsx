import PropTypes from "react";
Sidebar.prototypes = {
  changeOption: PropTypes.isRequired,
};
function Sidebar({ changeOption }) {
  return (
    <>
      <div className="w-2/6 h-full bg-white flex flex-col  justify-space-around items-center flex shadow-lg">
        <p
          className="text-2xl w-full justify-start font-semibold cursor-pointer"
          onClick={() => {
            changeOption("analytics");
          }}
        >
          Home
        </p>
        <p
          className="text-2xl w-full justify-start font-semibold cursor-pointer "
          onClick={() => {
            changeOption("products");
          }}
        >
          Add product
        </p>
        <p
          className="text-2xl w-full justify-start font-semibold cursor-pointer "
          onClick={() => {
            changeOption("inventory");
          }}
        >
          Inventory Management
        </p>
        <p
          className="text-2xl w-full justify-start font-semibold cursor-pointer"
          onClick={() => {
            changeOption("orders");
          }}
        >
          Order Management
        </p>
      </div>
    </>
  );
}
export default Sidebar;
