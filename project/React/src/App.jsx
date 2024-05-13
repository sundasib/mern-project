//import Layout from "./components/layout";
//import Login from "./components/login";
import Index from "./components/index";
import VendorLayout from "./layouts/vendorLayout";
//import vendorLayout from "./layouts/vendorLayout";
import { Route, Routes } from "react-router-dom";
import Notfound from "./not-Found";
import { createContext, useState } from "react";
import ProtectedRoutes from "./middleware";
export const LoginContext = createContext([]);
function App() {
  //localStorage.setItem("isLogin", false);
  //const [isLogin, setIsLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") == undefined
      ? false
      : localStorage.getItem("isLogin")
  );
  return (
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      <Routes path="/">
        <Route path="">
          <Route index element={<Index />} />
        </Route>
        <Route path="vendor">
          <Route
            index
            element={
              <ProtectedRoutes>
                <VendorLayout />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* <div className="w-screen h-screen bg-gray-200">  */}
      {/* <VendorLayout /> */}
      {/* <Index /> */}
      {/* <Layout />  */}
      {/* <Login /> */}
      {/* </div> */}
    </LoginContext.Provider>
  );
}
export default App;
