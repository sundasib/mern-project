function Signup({ setLogin }) {
  console.log("check", setLogin);
  return (
    <>
      <div className="w-full h-full flex justify-center ">
        <div className="w-1/4 h-full py-4 flex items-center">
          <div className="w-full h-5/6 p-4 bg-gray-300 rounded-md">
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
              />
              <label className="text-xl font-semibold text-gray-600 ">
                Password
              </label>
              <input
                className="py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="password"
                required
              />

              <label className="text-xl font-semibold text-gray-600">
                Confirm Password
              </label>
              <input
                className="py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="password"
                required
              />
              <label className="text-xl font-semibold text-gray-600">
                Role
              </label>
              <input
                className="py-2 border-2 border-gray-300 focus:outline-none rounded-md"
                type="text"
                required
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
              <button className="text-xl text-white  bg-gray-600 focus:outline-none focus:border-transparent">
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
