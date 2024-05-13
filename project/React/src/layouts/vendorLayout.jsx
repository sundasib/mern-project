import { useState } from "react";
import Navbar from "../components/nav-bar";
import Sidebar from "../components/side-bar";
import Home from "../vendors";
function VendorLayout() {
  const [options, setOptions] = useState("analytics");
  const changeOption = (newOption) => {
    setOptions(newOption);
  };
  return (
    <>
      <div className=" flex w-screen h-screen bg-gray-300 flex-col ">
        <Navbar />
        <div className=" flex w-screen h-screen bg-gray-300 ">
          <Sidebar changeOption={changeOption} />
          <Home option={options} />
        </div>
      </div>
    </>
  );
}
export default VendorLayout;
