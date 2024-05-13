import PropTypes, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../App";
Login.propTypes = {
  setLogin: PropTypes.isRequired,
};
function Login({ setLogin }) {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  const navigate = useNavigate();
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async () => {
    //const response = await axios.post("http://localhost:3000/auth/login", {
    const { data } = await axios.post("http://localhost:4000/auth/login", {
      username,
      password,
    });
    //console.log(response);
    if (data.error) {
      return alert("Invalid Credentials");
    }
    localStorage.setItem("isLogin", true);
    setIsLogin(localStorage.getItem("isLogin"));
    //setIsLogin(true);
    //for redirect to next page
    //return alert("logged in successfully");
    alert("logged in successfully");
    return navigate("/vendor");
  };
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="w-1/4 h-full py-4 flex items-center">
          <div className="w-full h-3/4 bg-white rounded-md">
            <div className="flex h-1/5 justify-center">
              <h1 className="text-gray-600 font-semibold">Login</h1>
            </div>
            <div className="h-3/5  flex flex-col p-4">
              <label className="text-xl font-semibold text-gray-600 my-2">
                Username
              </label>
              <input
                className=" py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="text"
                placeholder="username"
                required
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <label className="text-xl font-semibold text-gray-600 my-2">
                Password
              </label>
              <input
                className="py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="password"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <p className="text-gray-600">
                {"Dont have an account?"}
                <span
                  className="hover:text-blue-700 hover:underline cursor-point"
                  onClick={() => {
                    setLogin(false);
                  }}
                >
                  Go to signup
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                disabled={!(username, password)}
                className="text-xl text-white bg-gray-600 focus:outline-none focus:border-transparent"
                onClick={() => {
                  void login();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
