import { useContext } from "react";
import { UserContext } from "./context";
import { Login } from "./components/Login";
import { Signup } from "./components/SignUp";
// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { username } = useContext(UserContext);

  return username
    ? props.children
    : props.fallback || (
        <>
          <Login />
          <Signup />
        </>
      );
}
