import { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import ForgotPass from "./ForgotPass";
import House from "./House/House";
import Type from "./House/Typing/Type";

function Sinlog() {
  const [LogIn, setLogin] = useState(true);
  const [forgotPass, setForgotPass] = useState(false);
  return (
    <div className="flex bg-white w-screen h-screen ">
      <div className="flex-auto bg-blue-300 w-8/12">
        <Type />
        <House />
      </div>
      <div className="w-4/12 flex justify-center items-center ">
        {forgotPass ? (
          <ForgotPass curr={setLogin} forgot={setForgotPass} />
        ) : LogIn ? (
          <Login curr={setLogin} forgot={setForgotPass} />
        ) : (
          <Signin curr={setLogin} />
        )}
      </div>
    </div>
  );
}

export default Sinlog;

//{LogIn ? <Login curr={setLogin} /> : <Signin curr={setLogin} />}
