import { useState } from "react";

function Layout() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-black">{count}</h1>
        <h1
          className="text-black cursor-pointer"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count++
        </h1>
        <h1
          className="text-black cursor-pointer"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          count--
        </h1>
      </div>
    </>
  );
}
export default Layout;
