import { useContext } from "react";
import { UserContext } from "./context";
import { Login } from "./components/Login";
import { Signup } from "./components/SignUp";

export default function AuthCheck(props) {
  const user = useContext(UserContext);
  return user.username
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
