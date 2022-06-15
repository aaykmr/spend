import { useContext } from "react";
import { UserContext } from "./context";
import { Login } from "./components/Login";
import { Signup } from "./components/SignUp";
import money from "./images/money-falling.gif";

export default function AuthCheck(props) {
  const user = useContext(UserContext);
  return !user.length
    ? props.children
    : props.fallback || (
        <>
          <div className="d-flex flex-column w-50">
            <Login />
            <Signup />
          </div>
        </>
      );
}
