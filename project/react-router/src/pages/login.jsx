import { useNavigate, Link } from "react-router-dom";
//import Signup from "./signup";

function Login() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/vendor");
  };
  return (
    <>
      <h1>Login</h1>
      <div>
        <Link to={"Signup"}>Signup</Link>
      </div>
      <div>
        <button
          onClick={() => {
            void login();
          }}
        >
          Login
        </button>
        {/* <Link to={"vendor"}>Login</Link> */}
      </div>
    </>
  );
}

export default Login;
