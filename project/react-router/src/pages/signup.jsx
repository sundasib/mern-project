import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <h1>Signup</h1>
      <div>
        <Link to={"/"}>Login</Link>
      </div>
    </>
  );
}

export default Signup;
