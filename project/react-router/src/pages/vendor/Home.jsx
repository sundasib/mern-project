import { Link } from "react-router-dom";
function Vendor() {
  return (
    <>
      <h1>vendor home</h1>

      <div>
        <Link to={"inventory"}>Inventory</Link>
      </div>
      <div>
        <Link to={"add-product"}>Add product</Link>
      </div>
    </>
  );
}

export default Vendor;
