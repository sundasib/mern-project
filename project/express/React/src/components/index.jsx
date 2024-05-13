import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
function Index() {
  const [isLogin, setIsLogin] = useState(true);
  const updateState = (newState) => {
    setIsLogin(newState);
  };
  return (
    <>
      {isLogin && <Login setLogin={updateState} />}
      {!isLogin && <Signup setLogin={updateState} />}
    </>
  );
}
export default Index;
