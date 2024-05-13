import PropTypes, { useState } from "react";
import axios from "axios";
Login.propTypes = {
  setLogin: PropTypes.isRequired,
};
function Login({ setLogin }) {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async () => {
    console.log("username", username);
    console.log("password", password);
    //const response = await axios.post("http://localhost:3000/auth/login", {
    const { data } = await axios.post(
      "http://localhost:3000/auth/login",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );
    //console.log(response);
    if (data.error) {
      return alert("Invalid Credentials");
    }
    return alert("logged in successfully");
  };
  return (
    <>
      {/* parent div */}
      {/* <div className="flex w-full h-full justify-center items-center border-4 border-blue-800 "> */}
      {/* <div className="flex w-full h-full justify-center items-start border-4 border-blue-800"> */}
      {/* <div className="flex w-full h-full flex-wrap ">
        <div className="w-1/4 h-1/6 bg-blue-400"></div>
        {/* <div className="flex self-center w-1/6 h-1/6 bg-pink-400"></div> */}
      {/* <div className=" w-1/4 h-1/6 bg-pink-400"></div>
        {/* <div className="flex self-end w-1/6 h-1/6 bg-indigo-900"></div> */}
      {/* <div className=" w-1/4 h-1/6 bg-indigo-900"></div> */}
      {/* <div className="w-1/4 h-1/6 bg-teal-900"></div> */}
      {/* <div className="w-1/4 h-1/6 bg-teal-900"></div>  */}
      <div className="w-full h-full flex justify-center">
        <div className="w-1/5 h-full py-4 flex items-center">
          <div className="w-full h-3/5 bg-white rounded-md">
            <div className="flex justify-center h-1/5 ">
              <h1 className="text-gray-600 font-semibold">Login</h1>
            </div>
            <div className="h-3/5  flex flex-col py-4">
              <label className="text-xl font-semibold text-gray-600 my-1">
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
              <label className="text-xl font-semibold text-gray-600 my-1">
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
                className="text-xl text-white bg-gray-600 focus:outline-none focus:border-transparent"
                onClick={login}
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
