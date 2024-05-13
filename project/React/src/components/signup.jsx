import axios from "axios";
import PropTypes, { useEffect, useState } from "react";
import Select from "react-select";
Signup.propTypes = {
  setLogin: PropTypes.isRequired,
};
//const role = [
// { label: "trainee", value: "id" },
// { label: "instructor", value: "id" },
//];
function Signup({ setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [rolesId, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  //console.log("check", setLogin);
  const getRoles = async () => {
    const { data } = await axios.get("http://localhost:3000/user/getRole");
    if (data.error) {
      return alert("no roles exist");
    }
    let roleDropDown = [];
    data.response.map((roles) => {
      console.log(roles);
      const roleValues = {
        label: roles.rolename,
        value: roles.rolesId,
      };

      roleDropDown.push(roleValues);
    });
    //console.log(data.response);
    //console.log(roleDropDown);
    setRoles(roleDropDown);
  };
  const signup = async () => {
    const { data } = await axios.post("http://localhost:3000/user/createUser", {
      username,
      password,
      address,
      rolesId,
    });
    console.log("data ", data);
    if (data.error) {
      return alert("Unable to create user");
    }
    alert("user created successfully");
    return setLogin(true);
    //console.log(data);
    //   console.log("username", username),
    //     console.log("password", password),
    //     console.log("address", address),
    //     console.log("rolesId", rolesId);
  };
  useEffect(() => {
    void getRoles();
  }, []);
  return (
    <>
      <div className="w-full h-full flex justify-center ">
        <div className="w-1/4 h-full py-4 flex items-center">
          <div className="w-full h-5/6 p-4 bg-white rounded-md">
            <div className="flex justify-center h-1/6 ">
              <h1 className="text-gray-600 font-semibold">Signup</h1>
            </div>
            <div className="h-4/6  flex flex-col py-4">
              <label className="text-xl font-semibold text-gray-600 ">
                Username
              </label>
              <input
                className=" py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="text"
                placeholder="username"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label className="text-xl font-semibold text-gray-600 ">
                Password
              </label>
              <input
                className="py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <label className="text-xl font-semibold text-gray-600">
                Address
              </label>
              <input
                className="py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="text"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <label className="text-xl font-semibold text-gray-600">
                Role
              </label>
              <Select
                className="py-2 border-2 border-gray-300 rounded-md text-gray-500 focus:outline-none"
                isSearchable={true}
                options={roles}
                onChange={(e) => {
                  //console.log(e.value);
                  setRoleId(e.value);
                }}
                placeholder="Select Role"
              />

              <p className="text-gray-600">
                {"Already have an account?"}
                <span
                  className="hover:text-blue-700 hover:underline cursor-point"
                  onClick={() => {
                    setLogin(true);
                  }}
                >
                  Go to Login
                </span>
              </p>
            </div>
            <div className="h-1/6 flex items-end justify-center ">
              <button
                className="text-xl text-white  bg-gray-600 focus:outline-none focus:border-transparent"
                onClick={() => {
                  void signup();
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
